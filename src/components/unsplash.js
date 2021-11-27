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
                  <p className="d-flex flex-row" id="p">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-map-pin"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </span>
                    <span>{image.user.location}</span>
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
