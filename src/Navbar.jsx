import { useState } from 'react';
import logo from './assets/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";


function Nav() {
    const [toggle, setToggle] = useState(false);


    return (

        <nav className='max-w-[1240px] shadow-xl  mx-auto flex justify-between p-1 fixed bg-[#b3aea8] w-full z-10 '>
            <a href="main.jsx"> <img src={logo} alt="this is a logo" className='w-[3rem] h-[3rem] rounded-full cursor-pointer object-fill ' /></a>  
            {
                toggle ?
                    < FiAlignJustify className='md:hidden cursor-pointer block mr-5 item-center my-auto' onClick={() => setToggle(!toggle)} />
                    : <ImCross className='md:hidden block cursor-pointer mr-5 my-auto' onClick={() => setToggle(!toggle)} />
            }


            <div className='md:flex hidden gap-2 justify-around  text-white  w-auto'>
                <button className='bg-[#231f20] hover:bg-[#ff5001] rounded-full w-[5rem] '>Login</button>
                <button className='hover:bg-[#ff5001] bg-[#231f20] rounded-full w-[7rem] '>sign up </button>

            </div>

            {/* responcive  */}
            <div className={`duration-500 py-5 md:hidden fixed  top-16  w-full text-center items-center h-screen bg-gray-200 
            ${toggle ? 'left-[-100%]' : 'left-[0%]'} `}>
                <button className='bg-yellow-300 rounded-full w-[5rem] mb-5'>Login</button><br />
                <button className='bg-yellow-300 rounded-full w-[7rem] '>Try free </button>

            </div>
        </nav>
    );
}
export default Nav