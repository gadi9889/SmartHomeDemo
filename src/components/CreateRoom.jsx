import React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import ErrorMessage from './ErrorMessage';

const createRoomVariants = {
    hidden: {
        opacity:0,
        y:'10vh',
        x:'-5vh'
    },
    visible: {
        scale:1,
        opacity:1,
        y:0,
        x:0,
        transition: {
            duration:0.5,
            ease:"easeIn",
            type:'spring',
            stiffness:80
        }
    },
    exit: {
        opacity:0,
        x:"5vh",
        y:'5vh',
        originY:0,
        transition: {
            duration:0.5,
            ease:"easeInOut"
        }
    }
}

export default function CreateRoom(props) {
    const [name, setName] = useState()
    const [type, setType] = useState('livingRoom')
    const [color, setColor] = useState('#000000')
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    let message = ['a room name must be below 5 letters','you cant have a nameless room.can you?']

    const getName = (e) => setName((e.target.value))
    const getType = (e) => setType(e.target.value)
    const getColor = (e) => setColor(e.target.value)

    const messagePicker = () => {
        if (name != null) {
            return message[0]
        }
        return message[1]
    }

    const createRoom = (name,type,color) => {
        if (name == null || name.length > 5 || name.length == 0) {
            setIsErrorVisible(true)
        }
        else{
            props.createRoomFunc(name,type,color)
            console.log(type+" "+color+" "+name)
        }
    }
    return (
        <div>
        <motion.div
            variants={createRoomVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <input type="text" onChange={getName} placeholder='Room name'/> <br/>
            <select name="type" id="type" onChange={getType}> 
                <option value="livingRoom">Living Room</option>
                <option value="kitchen">Kitchen</option>
                <option value="bedroom">Bedroom</option>
                <option value="bathroom">Bathroom</option>
            </select>
            <br/>
            <div id="cp-wrap">
                <input type="color" name="roomColor" id="roomColor" onChange={getColor}/>
            </div>
            <h3>Room Color</h3>
            <br/>
            <button className={'product-add-button'} onClick={() => createRoom(name,type,color)}>
                <Icon className='icon' style={{fontSize:'28px',position:'absolute'}} icon="akar-icons:circle-plus-fill" />
            </button>
        </motion.div>
        <ErrorMessage message={messagePicker()} showError={isErrorVisible} onClick={setIsErrorVisible}/>
        </div>
    )
}
