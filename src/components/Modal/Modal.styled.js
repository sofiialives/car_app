import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;

  background-color: var(--text-color);
`;

export const ModalContent = styled.div`
  width: 541px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--text-white);
  border-radius: 24px;

  .modal-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
    stroke: var(--text-black);
    cursor: pointer;
    transition: transform 600ms ease-in-out;

    &:hover,
    &:focus {
      transform: rotate(180deg);
    }
  }
`;
