import styled from 'styled-components';
import { Color } from '../../config/styles';

export const DetailContainer = styled.div`
  width: 100%;
  padding: 32px;
  background-color: white;
  & .info {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    & img {
      width: 100%;
      max-width: 680px;
      min-width: 360px;
      margin-right: 32px;
    }
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  & p {
    margin-bottom: 16px;
  }
  & h2 {
    font-size: 1.5em;
    margin-bottom: 32px;
  }
  & .price {
    font-size: 3em;
    margin-bottom: 32px;
  }
  & button {
    background-color: ${Color.$MainBlue};
    color: white;
    border: none;
    font-size: 1.2em;
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: ${Color.$DarkGrey};
    }
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & h3 {
    margin-bottom: 32px;
    font-size: 1.75em;
  }
  & p {
    font-size: 1em;
    width: 100%;
    overflow: hidden;
  }
`;
