import React, { useEffect, useRef } from "react";
import "./Banner.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";

const Banner = () => {
  let BannerData = [
    {
      Id: "1",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png",
      name: "North_Indian",
    },
    {
      Id: "2",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
      name: "Pizza",
    },
    {
      Id: "3",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      name: "Burger",
    },
    {
      Id: "4",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biryani",
    },
    {
      Id: "5",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biryani",
    },
    {
      Id: "6",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biryani",
    },
    {
      Id: "7",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biryani",
    },
    {
      Id: "8",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biryani",
    },
    {
      Id: "9",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biryani",
    },
    {
      Id: "10",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biryani",
    },
    {
      Id: "11",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biryani",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let box = document.querySelector(".banner_Item_main_container");
  const HandlebtnPrev = () => {
    // let width = box.clientWidth;
    // box.scrollLeft = box.scrollLeft - width;
  };
  const HandlebtnNext = () => {
    // let width = box.clientWidth;
    // box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <>
      <div className="mainContainer">
        <div className="Banner_mainContainer">
          <h1 className="title_Line">What's In Your Mind</h1>
          <div className="Icon_Container">
            <button className="pre_btn" onClick={HandlebtnPrev}>
              <ArrowBackIcon boxSize={6} />
            </button>
            <button className="next_btn" onClick={HandlebtnNext}>
              <ArrowForwardIcon boxSize={6} />
            </button>
          </div>
        </div>

        {/* <div className="carousal">
          <div className="banner_Item_main_container">
            {BannerData.map((ele, index) => {
              return (
                <div className="image_div" key={index}>
                  <img src={ele.imageUrl} alt={ele.name} />
                </div>
              );
            })}
          </div>
        </div> */}
        <Center>
          <div className="banner_Item_main_container">
            <Carousel responsive={responsive}>
              {BannerData.map((ele, index) => {
                return (
                  <div className="image_div" key={index}>
                    <img src={ele.imageUrl} alt={ele.name} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Center>
      </div>
    </>
  );
};

export default Banner;
