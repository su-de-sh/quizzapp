import { Cancel, Home, Info, Login, Phone, Quiz } from "@mui/icons-material";
import React from "react";
import "./drawer.css";

const Drawer = ({ open, handleClose }) => {
  const sideDrawerClass = ["side_drawer"];

  if (open) {
    sideDrawerClass.push("show");
  }

  return (
    <div>
      <div className={sideDrawerClass.join(" ")}>
        <ul className="drawer_list">
          <li className="drawer_list_item">
            <Home sx={{ color: "navy" }} />
            <span className="drawer_list_item_name">Home</span>
          </li>
          <li className="drawer_list_item">
            <Quiz sx={{ color: "navy" }} />
            <span className="drawer_list_item_name">Quiz</span>
          </li>
          <li className="drawer_list_item">
            <Info sx={{ color: "navy" }} />
            <span className="drawer_list_item_name">About</span>
          </li>
          <li className="drawer_list_item">
            <Phone sx={{ color: "navy" }} />
            <span className="drawer_list_item_name">Contact</span>
          </li>
          <li className="drawer_list_item">
            <Login sx={{ color: "navy" }} />
            <span className="drawer_list_item_name">Login</span>
          </li>
          <li className="drawer_list_item" onClick={handleClose}>
            <Cancel sx={{ color: "red" }} className="drawer_list" />
            <span className="drawer_list_item_name">Cancel</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
