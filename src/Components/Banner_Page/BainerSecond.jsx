import React from "react";
import "./BainerSecond.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowBackIcon, ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";

const BainerSecond = () => {
  let BannerData = [
    {
      Id: "1",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be",
      offer: "60% OFF UPTO 120",
      name: "Wow! Momo",
      rating: 4,
      cuisine: [
        "Tibetan",
        "Healthy Food, Asian",
        "Chinese, Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      address: "Karol Bagh",
    },
    {
      Id: "2",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
      offer: "",
      name: "KFC",
      rating: 4.3,
      cuisine: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      address: "West Patel Nagar",
    },
    {
      Id: "3",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      name: "Burger King",
      offer: "ITEMS AT 129",
      rating: 4.3,
      cuisine: ["Burgers", "American"],
      address: "Shadipur",
    },
    {
      Id: "2",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
      offer: "",
      name: "KFC",
      rating: 4.3,
      cuisine: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      address: "West Patel Nagar",
    },
    {
      Id: "1",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be",
      offer: "60% OFF UPTO 120",
      name: "Wow! Momo",
      rating: 4,
      cuisine: [
        "Tibetan",
        "Healthy Food, Asian",
        "Chinese, Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      address: "Karol Bagh",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
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
        </div>
        <Center>
          <div className="banner_Item_main_container">
            <Carousel responsive={responsive}>
              {BannerData.map((ele, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "260px",
                        height: "183px",
                        border: "1px solid blue",
                        borderRadius: "16px",
                        maxWidth: "273px",
                      }}
                      className="image_div"
                      key={index}
                    >
                      <img src={ele.imageUrl} alt={ele.name} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "12px",
                      }}
                    >
                      <h1
                        style={{
                          fontFamily: "Basis_Grotesque_Pro_Bold",
                          fontSize: "18px",
                          fontWeight: 700,
                          lineHeight: "24px",
                          letterSpacing: "-0.3px",
                          color: "rgba(2, 6, 12, 0.75)",
                          overflow: "hidden",
                        }}
                      >
                        {ele.name}
                      </h1>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "#198D3D",
                              borderRadius: 50,
                            }}
                          >
                            <StarIcon w={3} h={3} color="white" />
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {`${ele.rating} . ${ele.name}`}
                          </div>
                        </div>
                      </div>
                      <div>{ele.cuisine.join(",")}</div>
                      <div>{ele.address}</div>
                    </div>
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

export default BainerSecond;
