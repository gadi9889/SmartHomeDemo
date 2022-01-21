import React from 'react'

export default function CreateProducts(props) {
    let product = 'ac';

    const getProduct = (e) => {product = e.target.value}

    const clickHandle = () => {
        props.addDirect()
        props.addProductsFunc(props.roomIndex,product)
    }

    

    return (
        <div>
            <select name="product" id="product-selector" onChange={getProduct}> 
                <option value="ac" id="ac">AC</option>
                <option value="light" id="light">Light</option>
                {props.heater}
                {props.stereo}
            </select>
            <button class='product-add-button' onClick={clickHandle}>Add</button>
        </div>
    )
}
