import React, { useEffect, useState }  from 'react'
import ServicesHero from '../components/heroes/ServicesHero'  
import Tagline from '../components/utils/Tagline'
import Heading from '../components/utils/Heading'
import SubHeading from '../components/utils/SubHeading' 
import BtnGroups from '../components/utils/BtnGroups' 
import leftImage from '../assets/images/loggedIn/leftImage.jpg'
import rightImage from '../assets/images/loggedIn/rightImage.jpg'
import bgMob from '../assets/images/loggedIn/bgMob.jpg'
import Tab from '../components/utils/Tab'

const NewPage2 = () => {
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
     
      

        <section className='w-full min-h-[100vh] relative overflow-hidden '>
        <img src={leftImage} alt="Left Image" className='hidden md:block absolute bottom-0 mix-blend-lighten w-[39.375vw]'/>
        <img src={rightImage} alt="Left Image" className='hidden md:block absolute right-0 mix-blend-lighten w-[40.9375vw]'/>

          <span className='heroOverlayLeft2 hidden md:block absolute top-0 left-0 h-full w-[32.8125vw] z-[2] '>

</span>
             <span className='heroOverlayRight hidden md:block absolute top-0 h-full  right-0 w-[9.375vw] z-[3] '>

            </span>
            <span className='heroOverlayBottom1 absolute bottom-0 left-0 w-full h-[280px] md:h-[21.89140625vw] z-[4]'>

            </span>
            <span className='heroOverlayBottom2 absolute bottom-[-9.53125vw]  w-full md:h-[28.3703125vw] h-[240px] z-[5]'>

            </span>
           
            <span className='heroOverlayTop absolute top-0 left-0 w-full md:h-[20.478125vw] z-[5] h-[260px]'>

            </span>
            <img src={bgMob} alt="Bg MOb"  className='block md:hidden absolute left-0 mix-blend-lighten top-[10vh]'/>
        <ServicesHero isMob={isMob} />
        
        <div className="content relative   flex flex-col  pb-[130px] md:pb-[200px]   w-full  md:w-[51.875vw] text-white h-full md:h-[unset]  left-[50%] transform translate-x-[-50%]   md:top-[19.625vh] text-center z-[10]">
            <Tagline title={"WELCOME TO"} classes={"pt-[30.7692307692vw] md:pt-0 "}/>
            <Heading title={"Optimum"}/>
            <SubHeading title="NEW ERA OF STAKING"/>
             <div className='flex justify-between mt-[43.65px] mb-[32px] md:my-[2.5vw] relative
             flex-col md:flex-row gap-y-[16px] items-center
              '>
                
                
                <Tab title={'Weekly prize'} value={"1.26000000"}/>
                <Tab title={'total distributed OPT'} value={"0"} rightTab/>
                
             </div>
             

          <BtnGroups classes={"mx-auto"}
        //   classes={"mt-auto mx-auto md:mt-[2.34375vw] mb-[115px] md:mb-0"}
          />
          <button className='w-[231.82px] h-[35.42px] text-[13.05px]
          mt-[32px]
           md:w-[18.246875vw] md:mt-[2.5vw]  clipPathButton  md:text-[1.015625vw] font-[700] mx-auto md:h-[2.7671875vw] border border-[#EDDB0F]'>
            Check Prize Game Results
          </button>
            
        </div>
        
     
    <div className="mobOverlay md:hidden"></div>
    

    </section> 
       
     
      

  )
}

export default NewPage2