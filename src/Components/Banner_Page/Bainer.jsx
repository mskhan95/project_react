import React from "react";
import "./Bainer.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";

const Bainer = () => {
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
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
      name: "Cakes",
    },
    {
      Id: "6",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
      name: "Chinese",
    },
    {
      Id: "7",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
      name: "Chole_Bature",
    },
    {
      Id: "8",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
      name: "Dosa",
    },
    {
      Id: "9",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
      name: "Rolls",
    },
    {
      Id: "10",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
      name: "Noodles",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="mainContainer">
        <div className="Banner_mainContainer">
          <h1 className="title_Line">What's In Your Mind</h1>
          {/* <div className="carousel-button-group Icon_Container">
            <button className="pre_btn" onClick={HandlebtnPrev}>
              <ArrowBackIcon boxSize={6} />
            </button>
            <button className="next_btn" onClick={HandlebtnNext}>
              <ArrowForwardIcon boxSize={6} />
            </button>
          </div> */}
        </div>
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

export default Bainer;
