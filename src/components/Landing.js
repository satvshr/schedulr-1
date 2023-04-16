import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';// Grid version 2

function Landing() {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

    function smoothScroll(target) {
        if (typeof window !== 'undefined') {
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    return (
        <>
            <div id="Nav" class="relative left-0 top-0 w-full z-10 border-black border-b-4 bg-white">

                <div class="flex order-1 items-center justify-between p-4 text-black">
                    <Link href="/"><h1 class="font-bold text-4xl"> Schedulr </h1></Link>
                    <ul class="hidden order-2 sm:flex">
                        <li class="p-4">
                            <button onClick={() => smoothScroll("#Nav")} class="p-1 border-transparent border-b-4 hover:border-black transition duration:500 ease-in">Home</button>
                        </li>
                        <li class="p-4">
                            <button onClick={() => smoothScroll("#FAQs")} class="p-1 border-transparent border-b-4 hover:border-black transition duration:500 ease-in" href='/'>Reviews</button>
                        </li>
                        <li class="p-4">
                            <button onClick={() => smoothScroll("#ContactUs")} class="p-1 border-transparent border-b-4 hover:border-black transition duration:500 ease-in" href='/'>Contact Us</button>
                        </li>
                    </ul>
                    <div class="hidden sm:block order-3 border-transparent border-4 hover:border-black transition duration:500 ease-in p-2">
                        <button onClick={event => window.location.href = 'api/auth/login'} class="font-bold text-2xl">Log In</button>
                    </div>

                    {/* Mobile */}
                    <div onClick={handleNav} class="block sm:hidden z-10">
                        {nav ? <AiOutlineClose size={20} color='white' /> : <AiOutlineMenu size={20} />}
                    </div>
                    <div id="MNav" class={nav
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center \
            items-center w-full h-screen text-center bg-black ease-in duration-300 text-white'
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center \
            items-center w-full h-screen text-center bg-black ease-in duration-300'}>
                        <ul>
                            <li class="p-4 text-4xl">
                                <button onClick={() => { smoothScroll("#MNav"), handleNav() }}>Home</button>
                            </li>
                            <li class="p-4 text-4xl hover:text-gray-500">
                                <button onClick={() => { smoothScroll("#FAQs"), handleNav() }}>FAQs</button>
                            </li>
                            <li class="p-4 text-4xl hover:text-gray-500">
                                <button onClick={() => { smoothScroll("#ContactUs"), handleNav() }}>Contact Us</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="Top" class="flex h-screen">
                <div class="m-auto text-center">
                    <h1 class="text-7xl p-5 md:text-9xl">Excellence starts here.</h1>
                    <button class="border-black border-4 p-5 hover:bg-black hover:text-white"
                        onClick={event => window.location.href = 'api/auth/login'}>
                        GET STARTED
                    </button>
                </div>
            </div>
            <div id="FAQs" class="relative h-screen bg-black text-white items-center justify-center">
                <h1 className='absolute w-full top-3 left-0 text-4xl sm:text-5xl lg:text-8xl text-center mt-0 '>Reviews</h1>
                <div className='flex h-full items-center justify-center'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                        <div className='grid1-item border-4 border-white p-4'>
                            <h3 className='text-xl sm:text-3xl'>Merlin</h3>
                            <p className='sm:text-xl'>"Schedulr is pure magic."</p>
                        </div>

                        <div className='grid1-item border-4 border-white p-4'>
                            <h3 className='text-xl sm:text-3xl'>George W.</h3>
                            <p className='sm:text-xl'>"I fear no election when I have Schedulr"</p>
                        </div>

                        <div className='grid1-item border-4 border-white p-4'>
                            <h3 className='text-xl sm:text-3xl'>Satvik M.</h3>
                            <p className='sm:text-xl'>"I got 9.92 CPGA because of Schedulr"</p>
                        </div>

                        <div className='grid1-item border-4 border-white p-4'>
                            <h3 className='text-xl sm:text-3xl'>T. Kettle</h3>
                            <p className='sm:text-xl'>"I owe Schedulr my life. It's the one thing that holds me responsible."</p>
                        </div>

                        <div className='grid1-item border-4 border-white p-4'>
                            <h3 className='text-xl sm:text-3xl'>BiscuitBobby</h3>
                            <p className='sm:text-xl'>"I mean, it's not bad I guess."</p>
                        </div>
                        <div className='hidden md:block grid1-item border-4 border-white p-4'>
                            <h3 className='text-xl sm:text-3xl'>H. Granger</h3>
                            <p className='sm:text-xl'>"Scehdulr was crucial for me to become the MoM."</p>
                        </div>

                    </div>
                </div>
            </div>
            <div id="ContactUs" class="relative h-screen items-center justify-center">
                <h1 className='absolute w-full top-3 left-0 text-6xl sm:text-5xl lg:text-8xl text-center mt-0'>Contact Us</h1>
                <div className='flex h-full items-center justify-center'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        <div className='grid1-item border-4 border-black p-4'>
                            <h3 className='text-xl sm:text-3xl'>Satvik M</h3>
                            <p className='sm:text-xl'>989-992-192<br />satvik.work@gmaik.com</p>
                        </div>
                        <div className='grid1-item border-4 border-black p-4'>
                            <h3 className='text-xl sm:text-3xl'>Ivin Joel</h3>
                            <p className='sm:text-xl'>823-523-123<br />ivinjabraham.work@gmail.com</p>
                        </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Landing