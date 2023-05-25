import React from "react";

const Navbar = ({ getUsers }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="brand">TA-DA</div>
        <button className="btn-users" onClick={getUsers}>
          Get Users
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
