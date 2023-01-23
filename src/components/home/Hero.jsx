import React from 'react'
import bg from '../../assets/images/home/bg.jpg'
import backgroundVideo from '../../assets/videos/homeVideo.mp4'
import frame from '../../assets/images/home/frame.svg'
import BtnGroups from '../utils/BtnGroups'
import HomePara from '../utils/HomePara'


const Hero = () => {
  return (
    <section className='bg-[#11031A] relative min-h-[110vh] overflow-hidden pb-[10.3125vw]'>
        <img src={bg} alt="Background Image" className='w-full object-cover top-0 fixed left-0' />
        <video src={backgroundVideo} autoPlay loop muted className='w-[70.546875vw] left-[-1vw] top-[20vw] fixed mix-blend-lighten transform skew-y-[10deg] skew-x-[10deg]'/>
        <div className='w-[239px] h-[435px] absolute right-[-167px] top-[288px] border border-red-400  homeAboutGradient '>
            <span className='homeAboutGradient1'></span>
            <span className='homeAboutGradient2'></span>
        </div>
        <div className='w-[31.25vw] h-[57.5vw] top-[10.3125vw] relative left-[62.8125vw] flex flex-col items-center'>
        <img src={frame} alt="Frame" className='absolute top-0 left-0 w-full h-full object-contain' />
          
    <h2 className={`text-[#EDDB0F]  colus text-[20.9px] leading-[25.08px]  tracking-[21px] mb-[28px] mt-[76px]`}>About</h2>
           
            <div className='w-[23.828125vw] mb-[24px] flex text-center flex-col gap-y-[12px] text-[#8C7998]'>
               <HomePara classes={"text-[#8C7998]"} title={"The Algorand blockchain is reintroducing prize-linked staking, which combines low-yield staking with a weekly prize game, and is utilizing the Algorand Foundation Governance program to do so."}/>
               <HomePara classes={"text-[#8C7998]"} title={"Prize-linked savings options, where savings accounts are linked to a prize draw, have become more popular in traditional financial systems in recent years. Research suggests that these options increase the use of savings accounts and displace higher-risk behaviors like gambling. "}/> 
           
            </div>
            <BtnGroups white/>
        </div>

     </section>
  )
}

export default Hero