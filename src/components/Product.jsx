import React from 'react'
import { useState} from 'react';
import { Icon } from '@iconify/react';

export default function Product(props) {
    const [color, setColor] = useState(props.color)
    const [backgroundColor, setBackgroundColor] = useState('white');

    let status = !props.status

    const statusChange = (status) => {
        props.power(props.index)
        setColor(colorSet(status))
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
            <button class="product" style={{color:color,backgroundColor:backgroundColor}} onClick={() => statusChange(status)}><Icon icon={props.logoName} style={{ fontSize: '36px' }}/></button>
        </div>
    )
}