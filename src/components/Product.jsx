import React from 'react'
import { useState} from 'react';
import { Icon } from '@iconify/react';

export default function Product(props) {
    let logoColorArr = ['black','red']
    let backgroundColorArr = ['white','grey']
    let status = !props.status

    const [logoColor, setLogoColor] = useState(status ? logoColorArr[0]:logoColorArr[1])
    const [backgroundColor, setBackgroundColor] = useState(status ? backgroundColorArr[0]:backgroundColorArr[1]);

    const statusChange = (status) => {
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

    return (
        <div>
            <button className="product" style={{color:logoColor,backgroundColor:backgroundColor}} onClick={() => statusChange(status)}><Icon icon={props.logoName} style={{ fontSize: '36px',position:'absolute'}}/></button>
        </div>
    )
}