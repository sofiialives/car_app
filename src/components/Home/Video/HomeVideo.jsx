import React from "react";
import background from "../../../assets/images/background.mp4";
import { TitleOverlay, VideoWrapper, StyledNavLink } from "./Video.styled";

const HomeVideo = () => {
  return (
    <VideoWrapper>
      <video autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <TitleOverlay>
        Welcome to <StyledNavLink to="/catalog">Sofiko Car</StyledNavLink>{" "}
        service
      </TitleOverlay>
    </VideoWrapper>
  );
};

export default HomeVideo;
