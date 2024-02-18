import styled from "styled-components";
import { commonStyles } from "../../utils/filterStyle";

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 18px;
  .button {
    align-self: flex-end;
    line-height: 1.4;
    font-weight: 600;
    padding: 14px 44px;
    background-color: var(--text-blue);
    color: var(--text-white);
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 300ms ease;

    &:hover,
    &:focus {
      background-color: var(--violet-bg);
    }
  }
`;

export const SelectorStyled = styled.select`
  ${commonStyles}
  border-radius: 14px;
  border-color: transparent;
  margin-top: 8px;
  appearance: none;
  &::-ms-expand {
    display: none;
  }

  .car-option {
    background-color: var(--text-white);
    color: var(--text-color);
  }

  .car-option:checked {
    background-color: var(--text-white);
    color: var(--text-black);
  }
`;

export const LabelStyled = styled.label`
  line-height: 1.3;
  font-weight: 500;
  color: var(--text-grey);
`;

export const InputStyled = styled.input`
  ${commonStyles}
  border: 1px solid transparent;
  margin-top: 8px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-right: 1px solid var(--input-stick);
  max-width: 160px;
  box-sizing: border-box;

  &.input-left {
    border-right: 0;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &::placeholder {
    ${commonStyles}
    padding: 0;
  }
`;

export const WrapperInput = styled.div`
  position: relative;

  .icon-down {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
