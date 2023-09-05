import React from "react";

import { Product } from "../../../../context/reducers/Products/prod1_Reducer";
interface props {
  item: Product
}

const CardBody = (props: props) => {
    return (
        <div className="bg-white text-black px-4 rounded-md py-4">
                <div className="grid grid-cols-3">
                    <div className="label_title ">Title</div>
                    <div className="value col-span-2">{props.item.title}</div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="label_title ">Brand</div>
                    <div className="value col-span-2">{props.item.brand}</div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="label_title ">Description</div>
                    <div className="value col-span-2">{props.item.description}</div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="label_title ">DP</div>
                    <div className="value col-span-2">{props.item.discountPercentage}</div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="label_title ">PRICE</div>
                    <div className="value col-span-2">{props.item.price}</div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="label_title ">Rating</div>
                    <div className="value col-span-2">{props.item.rating}</div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="label_title ">Stock</div>
                    <div className="value col-span-2">{props.item.stock}</div>
                </div>

        </div>
    )
}

export default CardBody;