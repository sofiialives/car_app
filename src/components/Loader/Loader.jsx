import { MutatingDots } from "react-loader-spinner";
import React from "react";
import { CenteredContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <CenteredContainer>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#3470FF"
        secondaryColor="#121417"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </CenteredContainer>
  );
};

export default Loader;
