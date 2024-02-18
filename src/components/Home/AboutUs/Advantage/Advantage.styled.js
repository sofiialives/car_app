import styled from "styled-components";

export const AdvantageWrapper = styled.div`
  .dscr-text {
    display: flex;
    align-items: center;
    gap: 14px;
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
    font-family: var(--main-font-bold);
  }

  .dscr-span {
    color: var(--text-blue);
    font-family: var(--main-font-medium);
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-family: var(--main-font-medium);
  }

  .dscr-button {
    align-self: flex-end;
    font-family: var(--main-font-semi);
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
