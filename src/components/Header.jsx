import React from "react";

function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>{props.title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Feedback UI",
};

export default Header;
