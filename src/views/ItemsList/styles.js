import styled from 'styled-components';
import { Color } from '../../config/styles';

export const ItemListContent = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  & div.content {
    width: 100%;
    max-width: 1020px;
    margin: 100px 0 50px;
    & ul {
      list-style-type: none;
      & li {
        border-bottom: 1px solid ${Color.$LighterGrey}
      }
    }
  }
`;