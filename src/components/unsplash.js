/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../assets/map-pin.svg";

export default function Unsplash() {
  const [images, setImages] = useState([]);

  const fetchPictures = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=n4mKFED6xmTSJ_HZ2ceT_Vnunl8CC1pBxE0swmvPLIk"
    );
    const data = await response.data;
    console.log(data);
    const dataImage = data !== undefined ? data : [];
    setImages(dataImage);
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  return (
    <div className="container pe-5 ps-0 mb-2">
      <div className="row ">
        {images.map((image) => (
          <>
            <div className="col-lg-2 imgCol mb-2 mt-2 flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img
                    src={image.urls.small}
                    className="mb-2 mt-2"
                    alt="unsplash_image"
                  />
                </div>
                <div className="flip-box-back ">
                  <img
                    src={image.urls.small}
                    className="mb-2 mt-2"
                    alt="unsplash_image"
                  />
                  <h2 className="d-flex flex-row p">
                    <span className="">{image.user.first_name}</span>
                    <span className="">{image.user.last_name}</span>,
                    <span className="">{image.user.total_photos}</span>
                  </h2>
                  <p>
                    <span>
                      <img src={Map} className="" alt="location" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

// first_name + last_name
// location
// total_photos
