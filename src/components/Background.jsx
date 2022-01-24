import React from 'react';
import { motion } from 'framer-motion';

const backgroundVariants = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity:1
    }
} 

export default function background({children,onClick}) {
  return (
    <motion.div id='dropdown-background' onClick={() => onClick()} className='dropdown-background'
        variants={backgroundVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
    >
        {children}
    </motion.div>
  )
}
