import React from "react";
import "./Footer.css";
import { Center, Select } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className="MainContainer">
      <div style={{ backgroundColor: "#f0f0f5" }}>
        <Center>
          <div className="FirstContainer">
            <h1>For better experience,download the Swiggy app now</h1>
            <div className="LogoContainer">
              <div className="playStoreLogo">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                  alt="Google_Play_Logo"
                />
              </div>
              <div className="AppStoreLogo">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                  alt="App_Store_Logo"
                />
              </div>
            </div>
          </div>
        </Center>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <Center>
          <div className="SecondContainer">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "10px",
                }}
              >
                <img
                  width={"22px"}
                  height={"32px"}
                  src="https://companieslogo.com/img/orig/swiggy.D-27748b7c.png?t=1699336580"
                  alt="swiggy"
                />
                <h1
                  className="heading"
                  style={{
                    fontSize: "24px",
                    lineHeight: "28px",
                    fontWeight: 800,
                  }}
                >
                  Swiggy
                </h1>
              </div>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                  listStyleType: "none",
                  color: "rgba(255, 255, 255, 0.6",
                }}
              >
                <li>© 2023 Bundl Technologies Pvt. Ltd</li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <h1 className="heading">Company</h1>
              <ul
                style={{
                  listStyleType: "none",
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                  color: "rgba(255, 255, 255, 0.6",
                }}
              >
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Genie</li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <h1 className="heading">Contact us</h1>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                    listStyleType: "none",
                    color: "rgba(255, 255, 255, 0.6",
                  }}
                >
                  <li>Help & Support</li>
                  <li>Partner with us</li>
                  <li>Ride with us</li>
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <h1 className="heading">Legal</h1>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                    listStyleType: "none",
                    color: "rgba(255, 255, 255, 0.6",
                  }}
                >
                  <li>Terms & Conditions</li>
                  <li>Cookie Policy</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <h1 className="heading">We deliver to:</h1>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                  listStyleType: "none",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <li>Bangalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
              </ul>
              <Select style={{ color: "rgba(255, 255, 255, 0.6" }}>
                <option>589 Cities</option>
              </Select>
            </div>
          </div>
        </Center>
      </div>
    </div>
  );
};

export default Footer;
