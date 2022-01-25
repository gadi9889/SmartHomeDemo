import React from 'react'
import Heater from './svgs/Heater';
import Lightbulb from './svgs/Lightbulb';
import AirConditioner from './svgs/AirConditioner';
import Stereo from './svgs/Stereo';
import { useState } from 'react';

export default function Product(props) {
    let backgroundColorArr = ['white','grey']
    let status = !props.status

    const [onAnimation, setOnAnimation] = useState(props.status)
    const [backgroundColor, setBackgroundColor] = useState(status ? backgroundColorArr[0]:backgroundColorArr[1]);

    const statusChange = (status) => {
        setOnAnimation(!onAnimation)
        setBackgroundColor(colorSet(status))
        props.power(props.index)
        props.update(Math.random())
    }

    const colorSet = (status) => {
        if (status) {
            return 'rgba(0,0,0,0.19)'
        }
        return backgroundColorArr[0]
    } 

    return (
        <div>
            <button className="product" style={{backgroundColor:backgroundColor}} onClick={() => statusChange(status)}>
                {(props.logoName == 'heater') &&
                    <Heater onAnimation={onAnimation}/>
                }
                {(props.logoName == 'lightbulb') && 
                    <Lightbulb onAnimation={onAnimation}/>
                }
                {(props.logoName == 'ac') && 
                    <AirConditioner onAnimation={onAnimation}/>
                }
                {(props.logoName == 'stereo') && 
                    <Stereo onAnimation={onAnimation}/>
                }
            </button>
        </div>
    )
}
