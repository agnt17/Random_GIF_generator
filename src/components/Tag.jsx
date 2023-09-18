import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [tag,setTag] = useState('car');
  const { gif, loading, fetchdata } = useGif(tag);
  function clickhandler() {
    fetchdata(tag);
  }

  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div class="w-1/2 bg-gradient-to-r from-cyan-200 to-cyan-400 rounded-lg border border-black flex flex-col items-center gap-y-3 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold">Random {tag} GIF</h1>

      {
        loading ? (<Spinner/>) : (<img src ={gif} width="450"/>)
      }
     {/* Additional code which is not in random.jsx */}
     <input
      className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      onChange={changeHandler}
      value={tag}
      />


      <button
        onClick={clickhandler}
        className="w-1/3 bg-white text-lg py-2 rounded-lg mb-[20px] "
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;


