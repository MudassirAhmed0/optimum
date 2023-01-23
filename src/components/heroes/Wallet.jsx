import React from 'react'
import HomeHeading from '../utils/HomeHeading'
import HomeLink from '../utils/HomeLink'
import HomePara from '../utils/HomePara'
import wallet from '../../assets/images/home/wallet.svg'


const Wallet = () => {
  return (
    <div className="relative">
    <div className='w-[35vw] top-[16vw] right-[8.28125vw] absolute text-center flex flex-col items-center gap-y-[1.25vw]'>
                <HomeHeading title={"How are prizes distributed?"}/>
                <HomePara classes={" text-[#ADADAD] w-[29.13515625vw] "} title={"Prizes are awarded in OPT and distributed automatically to the winning wallet address. These winners are posted to a public list, accessible through the web-based application."}/>
                <HomeLink/>
    </div>
    <div className='relative top-[-35vw]'>
        <img src={wallet} alt="Wallet"  className='w-[85vw]'/>
    </div>
</div>
  )
}

export default Wallet