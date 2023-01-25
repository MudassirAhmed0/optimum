import React from 'react'
import HomeHeading from '../utils/HomeHeading'
import HomeLink from '../utils/HomeLink'
import HomePara from '../utils/HomePara'

const PrizeMoney = () => {
  return (
    <section className='bg-[#11031A] relative pt-[53.6px] pb-[32px] md:py-[5.3125vw]'>
    <div className='w-[79.93%] gap-y-[16px] md:w-[87.5vw] flex-col items-center md:items-start md:flex-row mx-auto flex justify-between' >
  
    <HomeHeading title={"Where does the prize money come from?"} classes={" text-white md:w-[32.65625vw] w-[unset] "}/>
    <div> 
         <HomePara classes={'text-[#ADADAD] mb-[16px] md:mb-[1.25vw] md:w-[50vw] w-[unset] '} title={"The Optimum app generates prizes from interest on deposited funds in non-custodial Algorand Governance accounts, with automated voting and registration in line with Algorand's recommendations. A portion of rewards goes to the prize pool, but remaining rewards are distributed among Optimum participants."}/> 
            <HomeLink/>
        </div>
    </div>
</section>
  )
}

export default PrizeMoney