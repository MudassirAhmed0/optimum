import React from 'react'

const HomeHeading = ({classes,title}) => {
  return (
    <h2 className={`text-white colus    text-[2.5vw] leading-[2.96875vw] ${classes}`}> 
    {title}
    </h2>
    )
}

export default HomeHeading