import styled from "styled-components";

export const DescrList = styled.ul`
  display: flex;
  gap: ${({ isCondition }) => (isCondition ? "8px" : "12px")};
  row-gap: ${({ isCondition }) => (isCondition ? "8px" : "4px")};
  flex-wrap: wrap;
`;

export const DescrLi = styled.li`
  position: relative;

  &:not(:last-child):after {
    content: ${({ isCondition }) => (isCondition ? "none" : "''")};
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
    border: 1px solid var(--border-line);
    height: 16px;
  }

  p {
    ${({ isCondition }) =>
      isCondition &&
      `
        padding: 7px 14px;
        background-color: #F9F9F9;
        border-radius: 35px;
        color: #363535;
      `}
  }
`;
