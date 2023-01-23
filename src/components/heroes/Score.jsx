import React from 'react'
import HomeHeading from '../utils/HomeHeading'
import HomeLink from '../utils/HomeLink'
import HomePara from '../utils/HomePara'
import historicalGovernanceFrame from '../../assets/images/home/historicalGovernanceFrame.svg'
import coinLeft from '../../assets/images/home/coinLeft.png'
import ring from '../../assets/images/home/ring.png'
import coinRight from '../../assets/images/home/coinRight.png'

const Score = () => {
  return (
    <div className='relative top-[-10vw]'>
    <div className='w-[35vw] top-[29.6875vw] right-[10.390625vw] absolute text-center flex flex-col items-center gap-y-[1.25vw]'>
        <HomeHeading title={"What is the prize amount?"}/>
        <HomePara classes={" text-[#ADADAD]  "} title={"The prize pool will be determined at the beginning of every week of a Governance quarter (13 weeks total). This will be determined by evaluating the current Governance period APR, which will be obtained from data posted on the Algorand Foundation Governance website."}/>
        <HomeLink/>
    </div>
    <div className=''>
        <img src={historicalGovernanceFrame} alt="historicalGovernanceFrame" className='w-[59.84375vw]' />
        <div className='absolute w-[24.296875vw] left-[15.859375vw] top-[25.859375vw]  '>
            <span className="yellowEllipse2">  </span>
            <span className="yellowEllipse">  </span>
            <img src={ring} alt="Ring" className='absolute min-w-[41.796875vw] mix-blend-lighten object-contain w-[41.796875vw] bottom-[-18.359375vw] left-[-10.15625vw]' />
            <img src={coinLeft} alt="Coin Left " className='absolute top-[-4.6875vw] left-[-11.015625vw] w-[17.3578125vw] object-contain h-[19.4703125vw]' />
            <img src={coinRight} alt="Coin Right" className='absolute right-[-10.9375vw] bottom-[-17.890625vw] w-[24.296875vw] object-contain h-[27.421875vw]' />
                <h5 className='colus text-center  text-[1.9241953125vw] leading-[2.34375vw] text-[#EDDB0F]'>Historical Governance querterly yields</h5>
                <ul className='colus   mt-[3.515625vw] flex flex-col gap-y-[1.796875vw]'>
                   <li className='flex items-center gap-x-[6.25vw] justify-center'><span className='leading-[2.109375vw] text-[#FF005C] text-[1.752328125vw]'>Q1</span> <span className=' text-[3.22265625vw] text-[#fff] leading-[3.90625vw]'>3.51%</span></li> 
                   <li className='flex items-center gap-x-[6.25vw] justify-center'><span className='leading-[2.109375vw] text-[#FF005C] text-[1.752328125vw]'>Q1</span> <span className=' text-[3.22265625vw] text-[#fff] leading-[3.90625vw]'>2.51%</span></li> 
                   <li className='flex items-center gap-x-[6.25vw] justify-center'><span className='leading-[2.109375vw] text-[#FF005C] text-[1.752328125vw]'>Q1</span> <span className=' text-[3.22265625vw] text-[#fff] leading-[3.90625vw]'>1.91%</span></li> 
                   <li className='flex items-center gap-x-[6.25vw] justify-center'><span className='leading-[2.109375vw] text-[#FF005C] text-[1.752328125vw]'>Q1</span> <span className=' text-[3.22265625vw] text-[#fff] leading-[3.90625vw]'>1.93%</span></li> 
                </ul>
        </div>
    </div>
</div>
  )
}

export default Score