import React from 'react'
import { useState} from 'react';
import Heater from './svgs/Heater';
import Lightbulb from './svgs/Lightbulb';
import AirConditioner from './svgs/AirConditioner';
import Stereo from './svgs/Stereo';

export default function Product(props) {
    let logoColorArr = ['black','red']
    let backgroundColorArr = ['white','grey']
    let status = !props.status

    const [onAnimation, setOnAnimation] = useState(props.status)
    const [logoColor, setLogoColor] = useState(status ? logoColorArr[0]:logoColorArr[1])
    const [backgroundColor, setBackgroundColor] = useState(status ? backgroundColorArr[0]:backgroundColorArr[1]);

    const statusChange = (status) => {
        setOnAnimation(!onAnimation)
        props.power(props.index)
        setLogoColor(colorSet(status))
        props.update(Math.random());
    }

    const colorSet = (status) => {
        if (status) {
            setBackgroundColor('rgba(0,0,0,0.19)')
            return 'red'
        }
        setBackgroundColor('white')
        return 'black'
    } 
    //style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"

    return (
        <div>
            <button className="product" style={{color:logoColor,backgroundColor:backgroundColor}} onClick={() => statusChange(status)}>
                {/* <Icon icon={props.logoName} style={{ fontSize: '36px',position:'absolute'}}/> */}
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
