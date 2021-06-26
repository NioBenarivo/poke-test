import { css } from '@emotion/css';

export const cardWrapper = css`
  display: block;
  position: relative;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 6px 0 rgba(49,53,59,0.12);
  background-color: #FFFFFF;
  cursor: default;
  margin: 0px 0px 24px;
  max-width: 500px;
  transition: 0.15s box-shadow ease-in-out;

  label {
    display: block;
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: rgba(49,53,59,0.96);
    margin-bottom: 4px;
  }

  &.list:hover {
    box-shadow: 0 1px 3px 4px rgba(49,53,59,0.12);
    cursor: pointer;
  }
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const cardHeading = css`
  font-size: 20px;
  margin: 0;
  color: rgba(49, 53, 59, 0.96);
`;

export const cardNickname = css`
  font-size: 16px;
  font-style: italic;
  color: rgba(49,53,59,0.7);
  margin: 0;
`;

export const statsWrapper = css`
  display: flex;
  justify-content: flex-start;
  margin: 8px 0;

  & > div {
    margin-right: 1rem;
  }
`;

export const flexCol = css`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    color: rgba(49,53,59,0.68);
  }
`;

export const flex = css`
  display: flex;
  align-items: center;
`;

export const flexWrap = css`
  flex-wrap: wrap;
`;

export const contentSectionWrapper = css`
  display: flex;
  flex-direction: column;
  margin: 8px 0;

  ol {
    padding: 0;
    margin: 0;
  }
`;

export const mr1 = css`
  margin-right: 1rem;
`;

export const mr05 = css`
  margin-right: 0.5rem;
`;

export const mb05 = css`
  margin-bottom: 0.5rem;
`;

export const moveName = css`
  font-size: 16px;
  font-weight: 400;
  color: rgba(49,53,59,0.96);
  margin: 4px 0;
`;

export const ownedStyles = css`
  font-size: 14px;
  color: rgba(49,53,59,0.68);

  strong {
    font-size: 18px;
    color: rgba(49,53,59,0.96);
  }
`;
