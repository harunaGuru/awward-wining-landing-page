import React from 'react'
import {clsx} from "clsx";

const Button = ({title, leftIcon, rightIcon, className}) => {
    return (
        <button className={clsx('w-fit px-6 py-2 rounded-full bg-yellow-300 text-blue-200 flex gap-2 items-center text-sm', className )}>
            {leftIcon && <span>{leftIcon}</span>}
            {title}
            {rightIcon && <span>{rightIcon}</span>}
        </button>
    )
}
export default Button
