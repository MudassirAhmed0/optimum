import React, { useEffect, useState }  from 'react'
import ServicesHero from '../components/heroes/ServicesHero' 
import { Link } from 'react-router-dom'
import Tagline from '../components/utils/Tagline'
import Heading from '../components/utils/Heading'
import SubHeading from '../components/utils/SubHeading'
import Paragraph from '../components/utils/Paragraph'
import BtnGroups from '../components/utils/BtnGroups'
import bannerImg from '../assets/images/sevices/banner.jpg'  
import mobBannerImg from '../assets/images/sevices/mobBanner.jpg' 
import coin from '../assets/images/sevices/coin.png'
import mobCoinLeft from '../assets/images/sevices/mobCoinLeft.png'
import auditSvg from '../assets/images/sevices/audit.svg'
import mobCoinRight from '../assets/images/sevices/mobCoinRight.png'

const NewPage1 = () => {
    const [isMob,setIsMob] = useState(false)
    useEffect(()=>{
        setIsMob(window.innerWidth < 768)
        const handleResize =()=>{
        setIsMob(window.innerWidth < 768)

        }
        window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize',handleResize)
    },[])
  return ( 
     
      

        <section className='w-full h-[100vh] relative'>
    
    
        <ServicesHero isMob={isMob} bannerImg={isMob ? mobBannerImg: bannerImg}/>
        <div className="content absolute  flex flex-col    w-full  md:w-[unset] text-white h-full md:h-[unset]  md:left-[13.046875vw] md:top-[22.25vh] text-center z-[10]">
            <Tagline title={"WELCOME TO"} classes={"pt-[30.7692307692vw] md:pt-0 "}/>
            <Heading title={"Optimum"}/>
            <SubHeading title="NEW ERA OF STAKING"/>
            <Paragraph classes={"w-[300px] md:w-[23.31015625vw] mx-auto mt-[18.65px] md:mt-[1.68515625vw]"}>
            Join our prize-linked staking program on the <span className='font-[700]'>Algorand blockchain</span> for a chance to win big! 

            </Paragraph>
           
            <Link className='text-[#EDDB0F] md:leading-[1.6875vw] font-[700] text-[18px] leading-[22px] mt-[10px] inline-block md:text-[0.9375vw]'>
            Learn More
            </Link>

          <BtnGroups classes={"mt-auto mx-auto md:mt-[2.34375vw] mb-[115px] md:mb-0"}/>
            
        </div>
        {isMob || <div className='absolute top-[13.59375vw] right-0'>
        <img src={coin} alt="Coin" />
    </div>}
    {isMob ||<div className='w-[5.9375vw] h-[5.9375vw] absolute bottom-[7.265625vw] z-[10] right-[4.21875vw] '>
        <img src={auditSvg} alt="Audit Svg" className='w-full h-full object-cover'/>
    </div>}
    <div className="mobOverlay md:hidden"></div>
    <div className='absolute md:hidden bottom-[255px]'>
        <img src={mobCoinLeft} alt="" />
    </div>
    <div className='absolute md:hidden bottom-[295px] right-0'>
        <img src={mobCoinRight} alt="" />
    </div>

    </section> 
       
     
      

  )
}

export default NewPage1