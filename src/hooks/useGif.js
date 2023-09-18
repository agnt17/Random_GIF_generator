import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [loading, setLoading] = useState('false');
  const [gif, setGif] = useState('');

  async function fetchdata(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchdata('car');
  }, []);

  return { loading, gif, fetchdata };
};

export default useGif;
