import { motion,AnimatePresence } from 'framer-motion';
import React from 'react';
import Background from './Background'

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
            duration:0.5
        }
    }
}

export default function ErrorMessage({showError,message, onClick}) {
  return (
    <AnimatePresence>
        {showError && (
        <Background onClick={onClick}>
            <motion.div id='error-container'
                variants={createProductContainerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <h2 style={{color:'purple'}}>Error!</h2>
                <h4>{message}</h4>
            </motion.div>
        </Background>
        )} 
    </AnimatePresence>
  );
}
