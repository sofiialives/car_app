import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const VideoWrapper = styled.section`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TitleOverlay = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-white);
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(3px);
`;

export const StyledNavLink = styled(NavLink)`
  background: linear-gradient(to right, #3470ff, #00bfff, #00fa9a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
