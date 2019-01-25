import React from "react";

import styled from "styled-components";

const HomePage = props => {
  const IntroVideoContainer = styled.div`
    width: 97.5%;
    margin: 0 auto;

    iframe {
      width: 100%;
      height: 350px;
    }
  `;

  return (
    <IntroVideoContainer>
      <iframe
        src="https://www.youtube.com/embed/K2hcF1oOHb8?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </IntroVideoContainer>
  );
};

export default HomePage;
