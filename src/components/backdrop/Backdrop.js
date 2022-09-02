import React from "react";
import "./backdrop.css";

const Backdrop = ({ handleClose, open }) => {
  return open && <div className="backdrop" onClick={handleClose}></div>;
};

export default Backdrop;
