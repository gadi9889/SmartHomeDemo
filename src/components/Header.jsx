import React from 'react';
import { motion } from 'framer-motion';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const linkVariants = {
    hidden: {
        opacity:0,
        scale:0
    },
    visible: {
        scale:1,
        opacity:1,
        transition: {
            duration:0.2,
        }
    },
    tap: {
        scale:0.85,
        boxShadow:'0 0 10px rgba(0,0,0,0.8)',
        transition: {
            duration:0.03
        }
    },
    hover: {
        scale:1.05,
        boxShadow:'0 0 20px rgba(255,255,255,0.8)',
        transition: {
            repeat:Infinity,
            duration:3
        }
    }
}

export default function Header({rooms}) {
    const hex2rgb = (hexColor) => {
        const r = parseInt(hexColor.slice(1, 3), 16)
        const g = parseInt(hexColor.slice(3, 5), 16)
        const b = parseInt(hexColor.slice(5, 7), 16)
        return textColorSet([ r, g, b ])
    }

    const textColorSet = (roomColor) => {
        const brightness = ((roomColor[0] * 299) + (roomColor[1] * 587) + (roomColor[2] * 114)) / 1000;
        return (brightness > 155) ? 'black':'white';
    }

    return (
        <div>
            <h1>Smart Home</h1>
            <br />
            <div>
                {rooms.map((room) => {
                return <Link to={'/'+room.type+'/'+room.name+'-'+room.index}>
                    <motion.button style={{backgroundColor: room.color, color:hex2rgb(room.color)}}
                        variants={linkVariants}
                        initial='hidden'
                        animate='visible'
                        whileTap='tap'
                        whileHover='hover'
                    >
                        {room.name}
                    </motion.button>
                    </Link>
                })}
                <Link to='/CreateRoom'>
                    <motion.button
                        variants={linkVariants}
                        initial='hidden'
                        animate='visible'
                        whileTap='tap'
                        whileHover='hover'
                    >
                        +
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}
