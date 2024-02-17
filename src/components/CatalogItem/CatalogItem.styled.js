import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 600;
  font-family: var(--main-font-semi);
  font-size: 14px;
  line-height: 1.4;
  width: 100%;
  color: var(--text-white);
  background-color: var(--text-blue);
  padding: 12px 98.5px;
  border-radius: 12px;
  margin-top: 24px;
  cursor: pointer;
  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: var(--violet-bg);
  }
`;
