import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;

  background-color: var(--backdrop-modal);
`;

export const ModalContent = styled.div`
  width: 541px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--text-white);

  .modal-icon {
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
  }
`;
