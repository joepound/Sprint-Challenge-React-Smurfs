import React from "react";

import { IntroVideoContainer } from "./HomePageStyles.js";

const HomePage = props => {
  return (
    <IntroVideoContainer>
      <iframe
        title="Welcome to Smurf Village"
        src="https://www.youtube.com/embed/K2hcF1oOHb8?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </IntroVideoContainer>
  );
};

export default HomePage;
