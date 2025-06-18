import React from 'react'

const Button = ({className,text,type,onClick}) => {
  return (
    <button type={type} onClick={onClick} className={className}>{text}</button>
  )
}

export default Button