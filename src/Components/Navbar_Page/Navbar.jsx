import React from "react";
import logo from "../../assets/Navbar/logo.png";
import "./Navbar.css";
import { Center } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="navbar_maincontainer">
      <Center>
        <div style={{ maxWidth: "1200px" }}>
          <div className="second_container">
            <div className="logo_Address_container">
              <div className="logo_container">
                <img className="logo_img" src={logo} alt="Logo" />
              </div>
              <div className="navbar_Address">Address</div>
            </div>
            <div className="item_list_container">
              <ul className="navbar_list">
                <li>Search</li>
                <li>Offers</li>
                <li>Help</li>
                <li>SignIn</li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </Center>
    </div>
  );
};
export default Navbar;
