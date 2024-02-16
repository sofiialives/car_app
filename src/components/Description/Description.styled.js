import styled from "styled-components";

export const DescrList = styled.ul`
  display: flex;
  margin-bottom: ${({ isCondition }) => (isCondition ? "8px" : "4px")};
  padding: 0; /* Забираємо внутрішній відступ списку */
  list-style: none; /* Приховуємо стандартні маркери списку */
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

  span {
    ${({ isCondition }) =>
      isCondition &&
      `
        padding: 7px 14px;
        background-color: #F9F9F9;
        border-radius: 35px;
        color: #363535;
      `}
  }

  &:not(:first-child) {
    margin-left: ${({ isCondition }) => (isCondition ? "8px" : "12px")};
  }
`;