import './Button.css'
import React from "react"

const button = props => 
    <button type='button' className={props.className} onClick={props.onClick}>
        {props.label}
    </button>

export default button