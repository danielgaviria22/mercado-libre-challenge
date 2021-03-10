import React from 'react';
import numeral from 'numeral';
import { ItemCardContent, Image, City, ItemDescription} from './styles';

const ItemCard = (props) => {
  const { title, shipping, price, address, thumbnail, id } = props;
  return (
    <ItemCardContent to={`items/${id}`}>
      <div>
        <Image src={thumbnail} alt={title}/>
      </div>
      <ItemDescription>
        <h2>
          {title}
        </h2>
        <p>
          {numeral(price).format('$0,0[.]00')}
          {shipping.free_shipping && <span><img src="images/ic_shipping.png" alt="shipping"/></span>}
        </p>
      </ItemDescription>
      <City>
        <p>{address.state_name}</p>
      </City>
    </ItemCardContent>
  )
};

export default ItemCard;