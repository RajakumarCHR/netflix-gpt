import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
      
      main container
      -- videobackground
      -- video title
      secondory container
       -- mvielist* n
       --- moviecard *n
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
