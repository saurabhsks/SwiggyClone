import React, {useState} from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { LiaSignInAltSolid } from "react-icons/lia";
import { PiShoppingCartFill } from "react-icons/pi";


export default function Header() {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () =>{
        setToggle(true);
    }
    const hideSideMenu = () =>{
        setToggle(false);
    }
    const links =[
        {
            icon:<IoMdSearch />,
            name: "Search"
        } ,
        {
            icon:<CiDiscount1/>,
            name: "Offers",
            sup:"New"
        } ,
        {
            icon:<LiaHandsHelpingSolid />,
            name: "Help"
        } ,
        {
            icon:<LiaSignInAltSolid />,
            name: "SignIn"
        } ,
        {
            icon:<PiShoppingCartFill />,
            name: "Cart"
        }
    ]


  return (
    <>
     <div className='black-overlay bg-white w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity:toggle ? 99999:0,
        visibility:toggle ? "visible" : "hidden"
     }}>
        <div onClick={(e)=>{
            e.stopPropagation(); 
        }} className='w-[400px] bg-white h-full absolute duration-[400ms]'
        style={{
            left:toggle ? '0%': '-100%'
        }}
        >Hello ji </div>
     </div>


    <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
      <div className='max-w-[1200px] mx-auto flex items-center'>
      <div className='w-[100px]'>
        <img src="src/assets/logo.png" className='w-full' alt=""/>
      </div>
      <div className=''>
        <span className='font-bold border-b-[3px] border-[black] mr-3'>Ratanada</span>
         Jodhpur,Rajasthan, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='cursor-pointer font-bold inline text-[#fc8019]'/>
      </div>
      <nav className='hidden md:flex list-none gap-10 ml-auto text-[17px] font-semibold'>
       {
          links.map(
            (link,index)=>{
                return <li key={index} className='flex hover:text-[#fc8019] cursor-pointer items-center gap-2'>
                        {link.icon}
                        {link.name}
                        <sup>{link.sup}</sup>
                </li>
            }
          )
       }
       
      </nav>
      </div>
    </header>
    </>
  )
}
