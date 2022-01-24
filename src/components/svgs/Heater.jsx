import React from "react";
import { motion } from "framer-motion";

const logoVariants = {
    start: {
        opacity:1,
        pathLength: 1,
        fill: "rgba(0, 0, 0, 0)"
    },
    finish: {
        opacity:0,
        pathLength: 0,
        transition: {
            ease:'easeOut',
            repeat:Infinity,
            duration:2,
            fill: "rgba(0, 0, 0, 1)"
        }
    }
}


export default function Heater({onAnimation}) {
  return (
    <svg viewBox="0 0 32 32" className='svg' xmlnsSerif="http://www.serif.com/"  version="1.1" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" >
        <motion.path d="M9.431,18.813c-0.642,-1.594 -1.345,-3.28 -1.169,-4.961c0.074,-0.702 0.534,-1.31 0.981,-1.928c0.548,-0.758 1.087,-1.524 1.219,-2.381c0.197,-1.282 -0.44,-2.593 -1.05,-3.773c-0.127,-0.245 -0.429,-0.341 -0.674,-0.214c-0.245,-0.245z"
            variants={logoVariants}
            initial='start'
            animate={onAnimation? 'finish':'start'}
        />
        <motion.path d="M16.449,21.864c-0.658,-2.331 -1.366,-4.804 -1.185,-7.264c0.077,-1.056 0.55,-1.983 1.02,-2.913c0.527,-1.042 1.054,-2.087 1.181,-3.266c0.19,-1.764 -0.44,-3.558 -1.027,-5.181c-0.094,-0.26 -0.381,-0.394 -0.64,-0.3c-0.26,0.093 -0.394,0.38 -0.301,0.64c0.538,1.485 1.147,0.974z"
            variants={logoVariants}
            initial='start'
            animate={onAnimation? 'finish':'start'}
        />
        <motion.path d="M23.696,18.813c-0.643,-1.594 -1.346,-3.28 -1.169,-4.961c0.074,-0.702 0.533,-1.31 0.98,-1.928c0.548,-0.758 1.087,-1.524 1.219,-2.381c0.198,-1.282 -0.44,-2.593 -1.05,-3.773c-0.127,-0.245 -0.429,-0.341 -0.674,-0.214c-0.245,-0.245z"
            variants={logoVariants}
            initial='start'
            animate={onAnimation? 'finish':'start'}
        />
    </svg>
  );
}
