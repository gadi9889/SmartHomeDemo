import React from 'react'
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './Background';

const createProductContainerVariants = {
    hidden: {
        scale:0.5,
        y:"-100vh"
    },
    visible: {
        scale:1,
        y:0,
        transition: {
            type:'spring',
            stiffness:80,
            duration:0.5
        }
    },
    exit: {
        y:"40vh",
        opacity:0,
        scale:0,
        transition: {
            duration:0.1
        }
    }
}

export default function CreateProducts(props) {
    let selectedProduct = 'ac';
    
    const getSelectedProduct = (e) => {selectedProduct = e.target.value}

    const clickHandle = (e) => {
        props.toggleComponent(false)
        props.addProductsFunc(props.roomIndex,selectedProduct)
    }

    return (
        <AnimatePresence >
            {props.isVisible && (
                <Background onClick={props.toggleComponent}>
                    <motion.div className='create-product-container' onClick={(e) => e.stopPropagation()}
                        variants={createProductContainerVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <h4>Select Your Product</h4>
                        <select name="product" onChange={getSelectedProduct}> 
                            <option value="ac" id="ac">AC</option>
                            <option value="light" id="light">Light</option>
                            {props.heater}
                            {props.stereo}
                        </select>
                        <br />
                        <button className='product-add-button' onClick={clickHandle}>
                            <Icon className='icon' style={{fontSize:'28px'}} icon="ic:baseline-done" />
                        </button>
                    </motion.div>
                </Background>
            )}
        </AnimatePresence>

    )
}
