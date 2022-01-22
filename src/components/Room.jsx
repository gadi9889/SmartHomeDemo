import React from 'react'
import CreateProducts from './CreateProducts';
import Product from './Product';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const roomVariants = {
    hidden: {
        opacity:0,
        y:'40vh'
    },
    visible: {
        scale:1,
        opacity:1,
        y:0,
        transition: {
            duration:1,
            ease:"easeIn"
        }
    },
    exit: {
        opacity:0,
        x:"-5vh",
        transition: {
            duration:1,
            ease:"easeInOut"
        }
    }
}

export default function Room(props) {
    let flag = true;

    const [addProduct, setAddProduct] = useState()
    const [render, setRender] = useState()

    const addDirect = () => {
        let heaterOp = isRoomBathroom(props.roomType)
        let stereoOp = isStereoInRoom(props.stereos,props.roomIndex)
        if (props.roomItems == 5) {
            window.alert("Reached the limit")
        }
        else if (flag == true) {
            setAddProduct(<CreateProducts 
                roomIndex={props.roomIndex} 
                addDirect={addDirect} 
                addProductsFunc={props.addProductsFunc} 
                items={props.roomItems} 
                heater={heaterOp} 
                stereo={stereoOp}
                />
            )
            flag = false;
        }
        else {
            flag = true;
            setAddProduct();
        }
    }

    const isStereoInRoom = (stereos,roomIndex) => {
        let isInRoom = false
        stereos.forEach(stereo => {
            if (stereo != '') {
                if (stereo.roomIndex == roomIndex) {
                    isInRoom = true
                }
            }
        })
        if (isInRoom) {
            return
        }
        return <option value="stereo" id="stereo">Stereo</option>
    }

    const isRoomBathroom = (roomType) => {
        if (roomType == "bathroom") {
            return <option value="heater" id="heater">heater</option>;
        }
        return
    }

    

    const update = (i) => {
        setRender(i)
    }

    const checkProductInRoom = (roomIndex,product,productPower,logoName) => {
        if (product == '') {
            return
        }
        if (roomIndex == product.roomIndex) {
            console.log(props.roomIndex)
            return <Product 
                update={update} 
                status={product.status} 
                index={product.index} 
                logoName={logoName} 
                power={productPower}
                />
        }
    }

    return (
        <motion.div 
            variants={roomVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h3 style={{backgroundColor:props.roomColor,color:props.fontColor}}>{props.roomName}</h3>
            <h4>{props.roomType}</h4>

            <div id="product-grid">
                {props.airCons.map((airCon) => checkProductInRoom(props.roomIndex,airCon,props.airConPower,"mdi:air-conditioner"))}

                {props.heaters.map((heater) => checkProductInRoom(props.roomIndex,heater,props.heaterPower,"fa-solid:hot-tub"))}

                {props.lights.map((light) => checkProductInRoom(props.roomIndex,light,props.lightPower,"bi:lightbulb-fill"))}

                {props.stereos.map((stereo) => checkProductInRoom(props.roomIndex,stereo,props.stereoPower,"bx:bxs-music"))}
            </div>

            <button className={'product-add-button'} onClick={addDirect}><Icon style={{fontSize:'28px'}} icon="akar-icons:circle-plus-fill" /></button>
            {addProduct}
        </motion.div>
    )
}
