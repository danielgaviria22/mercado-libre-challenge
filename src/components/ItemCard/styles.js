import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Color } from '../../config/styles';

export const ItemCardContent = styled(Link)`
  padding: 16px;
  background-color: white;
  display: flex;
  text-decoration: none;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  flex-grow: 1;
  & h2 {
    color: ${Color.$Black};
    font-size: 1.125em;
    font-weight: normal;
    margin-top: 32px;
  }
  & p {
    color: ${Color.$Black};
    font-size: 1.5em;
    margin-top: 16px;
    & span {
      margin-left: 10px;
    }
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 4px;
  margin-right: 16px;
`;

export const City = styled.div`
  & p {
    color: ${Color.$Grey};
    font-size: 0.75em;
    margin: 20px 30px 0 0;
  }
`;