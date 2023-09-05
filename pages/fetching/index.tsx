import React, { useEffect } from 'react'
import { RootState } from "@/context/reducers";
import {  useDispatch, useSelector} from 'react-redux';
import { fetchData } from '../../context/thunks/fetchprod';
import { ProductFetching } from '../../helpers/thunks/products/product_one_fetching';
import { Product } from '../../context/reducers/Products/prod1_Reducer';
import CardProduct from '../../components/Cards/card-product';

const FetchingPage = (props) => {

  const Dispatch = useDispatch();
  const data:Product[]  = useSelector((state : RootState) => state.product.data);
  const isLoading = useSelector((state : RootState) => state.product.isLoading);
  const error = useSelector((state : RootState) => state.product.error);

  useEffect(()=> {
    ProductFetching(Dispatch)
  },[])

  return (
    <div className='text-white'>

      <h2 className='text-center py-4 text-3xl'>Products</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          {Array.isArray(data) ? (
            <ul className={`grid grid-cols-1 gap-3 h-screen gap-4 ${data.length > 10 && 'overflow-y-scroll'}`}>
              {data.map((item: Product, index: number) => (
                <CardProduct item={item} key={index} />
              ))}
            </ul>
          ) : (
            <p>Data is not an array {JSON.stringify(data)}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FetchingPage