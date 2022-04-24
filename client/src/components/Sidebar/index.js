import "../../styles/components/sidebar.scss";
import React, { useState } from "react";

import Link from "../Link";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  const toggleSidebar = () => {
    setOpened(!opened);
  };

  const links = [
    {
      name: "Achat",
      icon: "euro",
      path: "/",
    },
    {
      name: "Commercial",
      icon: "bar_chart",
      path: "/",
    },
    {
      name: "R. Humaines",
      icon: "group",
      path: "/",
    },
    {
      name: "Technique",
      icon: "settings_suggest",
      path: "/",
    },
    {
      name: "Exploitation",
      icon: "local_activity",
      path: "/",
    },
    {
      name: "Environnement",
      icon: "eco",
      path: "/",
    },
  ];

  return (
    <div
      className={`sidebar ${opened ? "opened" : ""}`}
      onMouseEnter={toggleSidebar}
      onMouseLeave={toggleSidebar}
    >
      {links.map(({ name, icon, path }, index) => (
        <Link key={index} to={path}>
          <i className="material-icons">{icon}</i>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;