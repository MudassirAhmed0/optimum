import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    const openLoginModal =()=>{
     
        document.getElementById('loginModal').classList.add('active')
    }
  return (
    <header className='absolute top-[2.734375vw] w-full z-[15]'>
    <div className=' w-[94vw] mx-auto relative z-[5] flex justify-between items-center'>
    <Link to={"./"}>
        <img src={logo} alt="Logo" className='w-[224px] md:w-[18.046875vw]' />
    </Link>
    <ul className='hidden md:flex font-[700] absolute left-[50%] top-[50%] transform translate-y-[-50%] translate-x-[-50%]  text-white text-[1.40625vw] flex gap-x-[3.984375vw] items-center'>
        <li>
            <Link>
                About
            </Link>
        </li>
        <li>
            <Link>
                Contacts
            </Link>
        </li>
    </ul>
    <Link onClick={openLoginModal}  className='hidden md:flex w-[15vw] h-[3.75vw] font-[700] text-[#11031A] clipPathButton flex justify-center bg-[#EDDB0F] text-[1.3876328125vw] items-center'> 
    Connect Wallet
    </Link>
        <button className='md:hidden w-[64px] h-[50px] bg-[#EDDB0F] flex flex-col justify-center items-center gap-y-[4.3px] clipPathButtonMob'>
            <div className='h-[3px] w-[27.75px] bg-[#14041B] ml-[5.06px] block'></div>
            <div className='h-[3px] w-[27.75px] bg-[#14041B] ml-[2.53px] block'></div>
            <div className='h-[3px] w-[27.75px] bg-[#14041B] block'></div>
        </button>
    </div> 
</header>
  )
}

export default Header