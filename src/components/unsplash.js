/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="container">
      <div className="row">
        {images.map((image) => (
          <div className="col-lg-2" style={{ width: "20%" }}>
            <img
              src={image.urls.small}
              className="mb-2 mt-2"
              alt="unsplash_image"
              style={{ maxWidth: "100%", height: "270px", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
