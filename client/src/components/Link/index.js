import React from "react";
import { Link as RouterLink } from "react-router-dom";

import PropTypes from 'prop-types';

const Link = ({
  to,
  className,
  children,
  ...rest
}) => {
  const isString = (x) => {
    return Object.prototype.toString.call(x) === "[object String]";
  };

  if (isString(to)) {
    const internal = /^\/(?!\/)/.test(to);
    if (!internal) {
      return (
        <a
          href={to}
          className={className}
          target={"_blank"}
          rel={"noopener noreferrer"}
          {...rest}
        >
          {children}
        </a>
      );
    }
  }

  return (
    <RouterLink to={to} className={className} {...rest}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Link;