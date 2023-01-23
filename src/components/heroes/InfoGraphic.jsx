import React from 'react'
import scheme from '../../assets/images/home/scheme.svg'
import schemeBg from '../../assets/images/home/schemeBg.svg'

const InfoGraphic = () => {
  return (
    <div>
        <span className='blurryEllipse'></span>

        <div className='w-[80vw] mx-auto h-[34.453125vw] z-[5] relative' >
                 <img src={schemeBg} alt="" className="absolute w-full h-full " />
                <img src={scheme} alt=""  className='w-full'/>
        </div>
    

</div>
  )
}

export default InfoGraphic