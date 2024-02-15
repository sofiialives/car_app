import styled from "styled-components";

export const ImageDivStyled = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;

  .heart-icon {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 18px;
    height: 18px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
