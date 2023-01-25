import React from 'react'

const HomePara = ({classes,title}) => {
  return (
    <p className={`
  text-[18px] leading-[24.3px] tracking-[unset]
    md:tracking-[0.36px] md:text-[1.40625vw] md:leading-[1.90625vw] ${classes}`}>{title}</p>
               
  )
}

export default HomePara