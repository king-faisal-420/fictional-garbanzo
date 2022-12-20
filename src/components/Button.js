import React from 'react'
function Button({ title, onPress, disabled }) {
    return (
        <div className="py-lg-3 py-sm-0">
            <button onClick={() => { !disabled && onPress() }} className='order  text-white'>{title}</button>
        </div>
    )
}

export default Button