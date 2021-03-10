/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResource } from 'react-request-hook';
import { queryURL } from '../../config/api';
import ItemCard from '../../components/ItemCard';
import { ItemListContent } from './styles';

const ItemsList = () => {
  const location = useLocation();
  const [ list, setList ] = useResource((query) => ({
    url: queryURL(query),
    method: 'get',
  }));

  useEffect(() => {
    setList(location.search.replace('?search=', ''));
  }, [location.search]);

  if(list.error && !list.isLoading ) return <p>404 Not Found</p>

  if(list.data && !list.isLoading) return (
    <ItemListContent>
      <div className="content">
        {list.data.results.length > 0 ? (
          <ul>
            {list.data.results.map(item => (
              <li key={item.id}>
                <ItemCard {...item} />
              </li>
            ))}
          </ul>) : (
            <p>404 Not Found</p>
          )}
      </div>
    </ItemListContent>
  );

  return <p> Loading ... </p>
}

export default ItemsList;
