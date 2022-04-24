import "../../styles/components/page.scss";

import React from "react";
import PropTypes from "prop-types";

const Page = ({ title, children }) => {
  title;

  return (
    <div className="page">
      {children}
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Page;