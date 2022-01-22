import React from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import {BrowserRouter as Router,useLocation, Routes, Route, Link} from 'react-router-dom';

const headerVariants = {
    hidden: {
        y:"-10vh"
    },
    visible: {
        y:0,
        trasition: {
            duration:0.2
        }
    },
    exit: {
        y:"-10vh",
        trasition: {
            duration:0.2
        }
    }
}

export default function Header({rooms, isVisible}) {

    const hex2rgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16)
        const g = parseInt(hex.slice(3, 5), 16)
        const b = parseInt(hex.slice(5, 7), 16)
        return textColorSet([ r, g, b ])
    }

    const textColorSet = (roomColor) => {
        const brightness = ((roomColor[0] * 299) + (roomColor[1] * 587) + (roomColor[2] * 114)) / 1000;
        return (brightness > 155) ? 'black':'white';
    }

    return (
        <AnimatePresence>
        {isVisible &&  (<motion.div
            variants={headerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h1 >Smart Home</h1>
            {rooms.map((room) => {
            return <Link to={'/'+room.type+'/'+room.name+'-'+room.index}><button style={{backgroundColor: room.color, color:hex2rgb(room.color)}}>{room.name}</button></Link>
            })}
            <Link to='/CreateRoom'><button>+</button></Link>
        </motion.div>)}
        </AnimatePresence>
    )
}
