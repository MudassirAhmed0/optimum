import React from 'react'
import HomeHeading from '../utils/HomeHeading'
import HomeLink from '../utils/HomeLink'
import HomePara from '../utils/HomePara'

const PrizeMoney = () => {
  return (
    <section className='bg-[#11031A] relative   py-[5.3125vw]'>
    <div className='w-[87.5vw] mx-auto flex justify-between' >
  
    <HomeHeading title={"Where does the prize money come from?"} classes={" text-white w-[32.65625vw] "}/>
    <div> 
         <HomePara classes={'text-[#ADADAD] mb-[1.25vw] w-[50vw] '} title={"The Optimum app generates prizes from interest on deposited funds in non-custodial Algorand Governance accounts, with automated voting and registration in line with Algorand's recommendations. A portion of rewards goes to the prize pool, but remaining rewards are distributed among Optimum participants."}/> 
            <HomeLink/>
        </div>
    </div>
</section>
  )
}

export default PrizeMoney