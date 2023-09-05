import React from 'react'
import CardProductBody from './module/card_product_body'
import { Product } from '../../../context/reducers/Products/prod1_Reducer'
interface props {
  item: Product
}

const CardProduct = (props: props) => {
  return (
    <div className='flex flex-col p-4'>

          <div className='w-full  min-h-[10rem] mb-2'>
            <img src={props.item.thumbnail} loading='lazy'></img>
          </div>

          <div className={`flex flex-row gap-x-2 mb-2 ${props.item.images.length >= 4 ? 'overflow-x-scroll': 'overflow-hidden'}`}>
            {props.item.images.length > 0 && props.item.images.map((item)=> {
              return (
                <img 
                className='w-[100px] h-[100px] rounded-lg object-cover'
                src={item} 
                loading='lazy'>
                </img>
              )
            })}
          </div>
          <CardProductBody 
            item={props.item}
          />
    </div>
  )
}

export default CardProduct