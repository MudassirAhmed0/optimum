import React from 'react'
import bg from '../../assets/images/home/bg.jpg'
import mobbg from '../../assets/images/home/mobbg.svg'
import backgroundVideo from '../../assets/videos/homeVideo.mp4'
import frame from '../../assets/images/home/frame.svg'
import mobframe from '../../assets/images/home/mobframe.svg'
import BtnGroups from '../utils/BtnGroups'
import HomePara from '../utils/HomePara'


const Hero = () => {
  return (
    <section className='bg-[#11031A] relative min-h-[110vh] overflow-hidden md:pb-[10.3125vw]'>
        <img src={bg} alt="Background Image" className='w-full object-cover top-[93.25px] md:top-0 fixed md:left-0 hidden md:block' />
        <img src={mobbg} alt="Background Image" className='w-full object-cover top-[93.25px] h-[706.52px] relative md:left-0 md:hidden block' />
       
        <video src={backgroundVideo} autoPlay loop muted className='w-full h-[429.5px] object-cover left-[50%] md:w-[70.546875vw] top-[247.56px] md:h-[unset] md:left-[-1vw] md:top-[20vw] absolute 
        md:fixed mix-blend-lighten transform translate-x-[-50%] skew-x-[22deg] skew-y-[2deg] md:translate-x-[unset] md:skew-y-[10deg] md:skew-x-[10deg]'/>

        <div className='w-[18.671875vw] h-[33.984375vw] absolute right-[-13.046875vw] top-[22.5vw] border border-red-400  homeAboutGradient hidden md:block'>
            <span className='homeAboutGradient1'></span>
            <span className='homeAboutGradient2'></span>
        </div>
        <div className='h-[736px] md:w-[31.25vw] md:h-[57.5vw] md:top-[10.3125vw] relative md:left-[62.8125vw] flex flex-col items-center'>
        <img src={frame} alt="Frame" className='absolute top-0 left-0 w-full h-full object-contain hidden md:block' />
        <img src={mobframe} alt="Frame" className='absolute top-0   w-[380.61px] h-[unset] object-cover md:hidden block' />
          
    <h2 className={`text-[#EDDB0F] text-[20.9px] leading-[25.08px]  
    tracking-[21px] mb-[28px] mt-[72.4px]
    colus md:text-[1.6328125vw] md:leading-[1.959375vw]  md:tracking-[1.640625vw] md:mb-[2.1875vw] md:mt-[5.9375vw]`}>About</h2>
           
            <div className='w-[305px] md:w-[23.828125vw] md:mb-[1.875vw] flex text-center flex-col gap-y-[12px] mb-[32.2px] md:gap-y-[0.9375vw] text-[#8C7998]'>
               <HomePara classes={"text-[#8C7998]"} title={"The Algorand blockchain is reintroducing prize-linked staking, which combines low-yield staking with a weekly prize game, and is utilizing the Algorand Foundation Governance program to do so."}/>
               <HomePara classes={"text-[#8C7998]"} title={"Prize-linked savings options, where savings accounts are linked to a prize draw, have become more popular in traditional financial systems in recent years. Research suggests that these options increase the use of savings accounts and displace higher-risk behaviors like gambling. "}/> 
           
            </div>
            <BtnGroups white/>
        </div>

     </section>
  )
}

export default Hero