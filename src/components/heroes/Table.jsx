import React from 'react'
import HomeHeading from '../utils/HomeHeading'
import HomeLink from '../utils/HomeLink'
import HomePara from '../utils/HomePara'

const Table = () => {
  return (
    <div className="relative py-[9vw]">
    <div className='w-[35vw] top-[14.078125vw] left-[8.75vw] absolute text-center flex flex-col items-center gap-y-[1.875vw]'>
                <HomeHeading title={"How is a winner selected?"}/>
                <HomePara classes={" text-[#ADADAD]  "} title={"At the time of prize drawing, a snapshot is secured of all current OPT holders and prize-eligible wallets. Utilizing this data, a cumulative probability distribution is generated. In conjunction a random number is generated and this is matched to the closest value within the probability range. "}/>
                <HomePara classes={" text-[#ADADAD]  "} title={"The following table illustrates our mechanism with an example of five wallets participating with ascending OPT balances of 10, 20, 30, 40, and 50:"}/>
                

                <HomeLink/>
    </div>
    <div className='left-[50.9375vw] relative'>
        <div className="tableEllpse"></div>
    <ul className=' w-[42.8125vw] relative z-[2]'>
    <li className='border-[#00F2F8]  pl-[0.625vw] items-center gap-x-[2.734375vw] border-t border-b py-[1.7578125vw] flex text-[#00F2F8] colus text-[1.219515625vw] leading-[1.484375vw]'>
        <span className='w-[3.28125vw]'>User</span> 
        <span className='w-[9.346875vw]'>holding (opt)</span>
        <span  className='w-[8.075vw]'>probability</span>
        <span className='w-[12.890625vw]'>cumulative prob-y</span>
    </li>
    <li className='border-[#718787]  pl-[0.625vw] gap-x-[2.734375vw] items-center  border-b py-[1.7578125vw] flex text-[#fff]  text-[1.40625vw] leading-[1.875vw]'>
        <span className='w-[3.28125vw] flex justify-center items-center text-[1.216640625vw] leading-[1.640625vw] text-[#00F2F8] rounded-full border-[0.865169px] border-[#718787] h-[3.28125vw]'>1</span> 
        <span className='w-[9.346875vw] text-center'>10</span>
        <span  className='w-[8.075vw] text-center'>6.7%</span>
        <span className='w-[12.890625vw] text-center'>0%</span>
    </li>
    <li className='border-[#718787]  pl-[0.625vw] gap-x-[2.734375vw] items-center  border-b py-[1.7578125vw] flex text-[#fff]  text-[1.40625vw] leading-[1.875vw]'>
        <span className='w-[3.28125vw] flex justify-center items-center text-[1.216640625vw] leading-[1.640625vw] text-[#00F2F8] rounded-full border-[0.865169px] border-[#718787] h-[3.28125vw]'>2</span> 
        <span className='w-[9.346875vw] text-center'>20</span>
        <span  className='w-[8.075vw] text-center'>13.3%</span>
        <span className='w-[12.890625vw] text-center'>6.7%</span>
    </li>
    <li className='border-[#718787]  pl-[0.625vw] gap-x-[2.734375vw] items-center  border-b py-[1.7578125vw] flex text-[#fff]  text-[1.40625vw] leading-[1.875vw]'>
        <span className='w-[3.28125vw] flex justify-center items-center text-[1.216640625vw] leading-[1.640625vw] text-[#00F2F8] rounded-full border-[0.865169px] border-[#718787] h-[3.28125vw]'>3</span> 
        <span className='w-[9.346875vw] text-center'>30</span>
        <span  className='w-[8.075vw] text-center'>20%</span>
        <span className='w-[12.890625vw] text-center'>20%</span>
    </li>
    <li className='border-[#718787]  pl-[0.625vw] gap-x-[2.734375vw] items-center  border-b py-[1.7578125vw] flex text-[#fff]  text-[1.40625vw] leading-[1.875vw]'>
        <span className='w-[3.28125vw] flex justify-center items-center text-[1.216640625vw] leading-[1.640625vw] text-[#00F2F8] rounded-full border-[0.865169px] border-[#718787] h-[3.28125vw]'>4</span> 
        <span className='w-[9.346875vw] text-center'>40</span>
        <span  className='w-[8.075vw] text-center'>26.7%</span>
        <span className='w-[12.890625vw] text-center'>40%</span>
    </li>
    <li className='   pl-[0.625vw] gap-x-[2.734375vw] items-center    py-[1.7578125vw] flex text-[#fff]  text-[1.40625vw] leading-[1.875vw]'>
        <span className='w-[3.28125vw] flex justify-center items-center text-[1.216640625vw] leading-[1.640625vw] text-[#00F2F8] rounded-full border-[0.865169px] border-[#718787] h-[3.28125vw]'>5</span> 
        <span className='w-[9.346875vw] text-center'>50</span>
        <span  className='w-[8.075vw] text-center'>33.3%</span>
        <span className='w-[12.890625vw] text-center'>66.7%</span>
    </li>
    <li className='tableBtn flex justify-between items-center px-[3.3984375vw]'>
    <span className="tableBtnOverlay"></span>
    <div className='tableBtnGradients'>
    <div className="tableBtnGradient1"></div>
    <div className="tableBtnGradient2"></div>
    
    </div>
    <div className='flex gap-x-[1.09375vw] items-center relative z-[5]'>
        <span className='colus text-white text-[1.219515625vw] leading-[1.484375vw]'>Random Number</span>
        <span className='text-[#EDDB0F] font-[700] text-[1.40625vw] leading-[1.875vw]'>0.6147556</span>
    </div>
    <div className='flex gap-x-[1.09375vw] items-center relative z-[5]'>
        <span className='colus text-white text-[1.219515625vw] leading-[1.484375vw]'>Winner</span>
        <span className='text-[#EDDB0F] font-[700] text-[1.40625vw] leading-[1.875vw]'>User 4</span>
    </div>
    </li>
    </ul>
    </div>
</div>
  )
}

export default Table