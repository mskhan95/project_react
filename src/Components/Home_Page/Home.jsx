import React from "react";
import Footer from "../Footer_page/Footer";
import Bainer from "../Banner_Page/Bainer";
import BainerSecond from "../Banner_Page/BainerSecond";
import { Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <div>
        <Bainer />
        <Center>
          <hr
            style={{
              width: "70%",
              display: "flex",
              alignSelf: "center",
              margin: "32px 0",
            }}
          ></hr>
        </Center>
        <BainerSecond />
        <Center>
          <hr
            style={{
              width: "70%",
              display: "flex",
              alignSelf: "center",
              margin: "32px 0",
            }}
          ></hr>
        </Center>
      </div>
      <div>
        <h1>Home Page</h1>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
