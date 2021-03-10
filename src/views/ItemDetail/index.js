/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import numeral from 'numeral';
import { useParams } from 'react-router-dom';
import { useResource } from 'react-request-hook';
import { itemURL, descriptionURL } from '../../config/api';
import { ItemListContent } from '../ItemsList/styles';
import { DetailContainer, ItemInfo, ItemDescription } from './styles';

const ItemDetail = () => {
  const params = useParams();
  const [ item, setItem ] = useResource((id) => ({
    url: itemURL(id),
    method: 'get',
  }));
  const [ description, setDescription ] = useResource((id) => ({
    url: descriptionURL(id),
    method: 'get',
  }));

  useEffect(() => {
    setItem(params.itemId);
    setDescription(params.itemId);
  }, [params.itemId]);

  if(item.error && !item.isLoading ) return <p>404 Not Found</p>

  if(item.data && !item.isLoading) return (
    <ItemListContent>
      <div className="content">
        <DetailContainer>
          <div className="info">
            <img src={item.data.pictures[0].secure_url} alt={item.data.title}/>
            <ItemInfo>
              <p>
                {item.data.condition === 'new' ? 'Nuevo' : 'Usado'}
                {' - '}
                {item.data.sold_quantity}
                {' vendidos'}
              </p>
              <h2>{item.data.title}</h2>
              <p className="price">{numeral(item.data.price).format('$0,0[.]00')}</p>
              <button>Comprar</button>
            </ItemInfo>
          </div>
          <ItemDescription>
            <h3>Descripción del Producto</h3>
            {!description.isLoading && !description.error &&
              description.data.plain_text.split("\n").map(x => (<p>{x}</p>))
            }
            {!description.isLoading && description.error && <p>No hay Descripción</p>}
            {description.isLoading && <p>... Loading</p>}
          </ItemDescription>
        </DetailContainer>
      </div>
    </ItemListContent>
  );

  return <p> Loading ... </p>
}

export default ItemDetail;
