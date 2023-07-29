import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss"
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";


const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate=useNavigate()  
  const {url}=useSelector((state)=>state.home)
  const {data,loading}=useFetch("/movie/upcoming")

useEffect(()=>{
    const bg=url.backdrop+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
    setBackground(bg)
},[data])
  const handleSearch = (e) => {
    if(e.key=="Enter" && query.length>0){
        navigate(`/search/${query}`)
    }
  };
  return (
    <div className="hero-banner">
       {!loading && <div className="backdrop-img">
          <Img src={background}/>
        </div>}
        <div className="opacity-layer">

        </div>
        <ContentWrapper>
        <div className="wrapper">
        <div className="hero-banner-content">
          <span className="title">Welcome</span>
          <span className="sub-title">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="search-input">
            <input onChange={(e)=>setQuery(e.target.value)} onKeyUp={handleSearch}  type="text" placeholder="Search for movie or TV shows... " />
            <button>Search</button>
          </div>
        </div>
      </div>
        </ContentWrapper>
      
    </div>
  );
};

export default HeroBanner;
