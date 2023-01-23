import React from 'react'
import HomeHeading from '../utils/HomeHeading'
import HomeLink from '../utils/HomeLink'
import HomePara from '../utils/HomePara'
import weeklyPrize from '../../assets/images/home/weeklyPrize.svg'


const Ring = () => {
  return (
    <div className="relative top-[-35vw]">
    <div className='w-[40.9375vw] z-[5] left-[7.1875vw] absolute text-center flex flex-col items-center gap-y-[1.25vw]'>
        <HomeHeading  classes={"w-[35vw]"} title={"Do I have to enter for each weekly prize?"}/>
        <HomePara classes={" text-[#ADADAD] "} title={"Deposits are automatically eligible for weekly prizes until withdrawn. As described in Terms and Conditions, mail in submissions can also be made within the first two weeks of a Governance period. Individuals submitting a mail-in entry will be treated as if depositing 10 ALGO."}/>
        <HomeLink/>
    </div>
    <div className="absolute right-0 top-[-29vw]">
        <img src={weeklyPrize} alt="Weekly Prize" className='w-[69.375vw]'/>
    </div>
</div>
  )
}

export default Ring