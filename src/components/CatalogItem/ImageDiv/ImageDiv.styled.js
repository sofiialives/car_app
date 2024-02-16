import styled from "styled-components";

export const ImageDivStyled = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
  fill: none;
  stroke: var(--text-white);

  .heart-icon {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

    &:hover,
    &:focus {
      stroke: var(--text-blue);
      fill: var(--text-blue);
      transform: scale(1.3);
    }
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
