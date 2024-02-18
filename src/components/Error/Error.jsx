import React from "react";
import { ErrorSection } from "./Error.styled";
import error from '../../assets/images/error.png'

const Error = () => {
  return (
    <ErrorSection>
      <img src={error} alt="error" className="error"/>
    </ErrorSection>
  );
};

export default Error;
