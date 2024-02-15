import styled from "styled-components";

export const ModalSection = styled.div`
  padding: 24px 40px 40px;

  .image {
    width: 461px;
    height: 248px;
    object-fit: cover;
    border-radius: 14px;
    margin-bottom: 14px;
  }

  .text {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.3;
    font-weight: 500;
    font-family: var(--main-font-medium);
    color: var(--text-black);
  }

  .span {
    color: var(--text-blue);
  }

  .description {
    font-size: 14px;
    line-height: 1.4;
    color: var(--text-black);
    margin-top: 10px;
  }

  .second-block {
    h3 {
      margin-top: 24px;
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 1.4;
      font-weight: 500;
      font-family: var(--main-font-medium);
      color: var(--text-black);
    }
  }
`;

export const RentalBtn = styled.button`
  font-family: var(--main-font-semi);
  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  background-color: var(--text-blue);
  color: var(--text-white);
  padding: 12px 50px;
  border-radius: 12px;
  margin-top: 24px;
  cursor: pointer;
  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: var(--violet-bg);
  }
`;
