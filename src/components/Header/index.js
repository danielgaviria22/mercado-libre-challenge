import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContent, Logo, Form, Input, Button} from './styles';

const Header = (props) => {
  const { value, onChange } = props;
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push({ pathname: '/items', search: `?search=${encodeURIComponent(value)}`})
  }

  return (
    <HeaderContent>
      <h1>
        <Logo src="images/Logo_ML.png" alt="Mercado Libre"/>
      </h1>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text"
          placeholder="Nunca dejes de buscar"
          value={value}
          onChange={onChange}
        />
        <Button onClick={handleSubmit} type="submit">
          <img src="images/ic_Search.png" alt="Search"/>
        </Button>
      </Form>
    </HeaderContent>
  )
}

export default Header;