import styled from 'styled-components';
import { Color } from '../../config/styles';

export const HeaderContent = styled.header`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${Color.$MainYellow};
  & h1 {
    margin: 0;
    display:flex;
    align-items: center;
  }
`;

export const Logo = styled.img`
  margin: 0 15px 0 20px;
`;

export const Form = styled.form`
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 20px 0 15px;
  width: 100%;
  max-width: 940px;
`;

export const Input = styled.input`
  background-color: white;
  color: ${Color.$Black};
  font-size: 1.125em;
  line-height: 1.2em;
  height: 20px;
  padding: 10px;
  border: none;
  flex-grow: 1;
`;

export const Button = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  background-color: ${Color.$LighterGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;