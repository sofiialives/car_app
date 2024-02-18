import styled from "styled-components";

export const ClientsWrapper = styled.div`
  .dscr-text {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 18px;
    color: var(--text-blue);
    margin-bottom: 24px;
    line-height: 155%;
    text-align: justify;

    &::after,
    &::before {
      content: "";
      display: block;
      width: 163px;
      height: 1px;
      background-color: var(--text-blue);
    }
  }

  .dscr-title {
    color: var(--text-black);
    font-weight: 700;
    font-size: 48px;
    line-height: 125.5%;
    margin-bottom: 20px;
  }

  .dscr-span {
    color: var(--text-blue);
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin: 20px;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--text-white);

  &:hover {
    transform: scale(1.1);
  }

  .name {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-black);
    font-weight: 600;
  }

  .img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .descr {
    margin: 10px 0;
    font-size: 16px;
    color: #555;
    margin: 10px 0;
  }
`;
