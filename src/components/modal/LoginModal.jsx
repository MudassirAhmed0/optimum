import React, { useEffect } from 'react'
import algosigner from "../../assets/images/algosigner.svg"
import myalgo  from "../../assets/images/myalgo.svg"
const LoginModal = () => {
    useEffect(()=>{
        const handleClick =(e)=>{ 
            e.target.id =='loginModal' &&  e.target.classList.remove('active')
        }
        window.addEventListener('click',handleClick)
        return ()=> window.removeEventListener('click',handleClick)
    },[])
  return (
    <div id='loginModal' className='w-[100%]  h-[100vh] fixed top-0 left-0 flex justify-center items-center z-[222]'>
      <div className='bg-[#16041B] absolute opacity-[0.6] pointer-events-none 
      w-[100%] h-[100%]
      '></div>
     
      <div className='pop-up flex w-[320px] h-[320px] flex-col items-center justify-center md:w-[25vw] md:h-[21.484375vw] z-[2] overflow-hidden relative '>
    
      <div className='loginModalOverlays'>
    <div className="loginModalOverlayTop"></div>
    <div className="loginModalOverlayRightBotom"></div>
    <div className="loginModalOverlayRightBotom2"></div>
</div>

      <h4 className='text-[20px] z-[5] leading-[24px] mb-[22px] md:text-[1.5625vw] md:leading-[1.875vw] text-center md:mb-[1.71875vw] font-[colus] text-[#FFFFFF]'>Connect to wallet</h4>
<div className='w-[273px] cursor-pointer z-[5] h-[82px] md:w-[21.328125vw] md:h-[6.40625vw] mx-[auto] bg-[#EDDB0F] rounded-[9px] mb-[16px] md:mb-[1.25vw]
flex justify-start items-center
pl-[16px] md:pl-[1.25vw] 
'>
    <div className='flex items-center gap-x-[12px] md:gap-x-[0.9375vw]'>
        <img src={algosigner} alt="Algosigner " className='w-[50px] h-[50px] md:w-[3.90625vw] md:h-[3.90625vw]' />
        <span className='text-[18px] leading-[21.6px] md:text-[1.40625vw] md:leading-[1.6875] font-[700] text-[#1E131A]'>Algosigner</span>
    </div>
</div>
<div className='w-[273px] cursor-pointer z-[5] h-[82px] md:w-[21.328125vw] md:h-[6.40625vw] mx-[auto] bg-[#EDDB0F] rounded-[9px] flex justify-start items-center
pl-[16px] md:pl-[1.25vw]'>
    <div className='flex items-center gap-x-[12px] md:gap-x-[0.9375vw]'>
        <img src={myalgo} alt="Myalgo Walltet " className='w-[50px] h-[50px] md:w-[3.90625vw] md:h-[3.90625vw]' />
        <span className='text-[18px] leading-[21.6px] md:text-[1.40625vw] md:leading-[1.6875] font-[700] text-[#1E131A]'>Myalgo Walltet</span>
    </div>
</div>

      </div>
    </div>
  )
}

export default LoginModal