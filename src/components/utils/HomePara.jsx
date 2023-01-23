import React from 'react'

const HomePara = ({classes,title}) => {
  return (
    <p className={`tracking-[0.36px] text-[1.40625vw] leading-[1.90625vw] ${classes}`}>{title}</p>
               
  )
}

export default HomePara