/* eslint-disable react/style-prop-object */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Map from "../assets/map-pin.svg";

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
                  <div className="p-2">
                    <h2 className="d-flex flex-row p">
                      <span className="">{image.user.first_name}</span>
                      <span className="">{image.user.last_name}</span>,
                      <span className="">{image.user.total_photos}</span>
                    </h2>
                    <p className="d-flex flex-row" id="p">
                      <span className="me-3">
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
                    <div className="d-flex flex-row ">
                      {/* HEART SVG */}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style="fill: #c52b33;transform: ;msFilter:;"
                      >
                        <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                      </svg> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
