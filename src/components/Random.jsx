import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const { gif, loading, fetchdata } = useGif();

  function clickhandler() {
    fetchdata();
  }

  return (
    <div className="w-1/2  bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg border border-black flex flex-col items-center gap-y-3 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold">A Random GIF</h1>

      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <button
        onClick={clickhandler}
        className="w-1/3 bg-white text-lg py-2 rounded-lg mb-[20px] "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
