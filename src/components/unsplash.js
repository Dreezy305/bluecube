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
    setImages(data);
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  return (
    <div className="unsplash mt-3">
      <h1>photos</h1>
    </div>
  );
}
