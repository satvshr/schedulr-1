import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


function Landing() {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

    const [darkMode, setDarkMode] = useState(false);
    const handleMode = () => {
        console.log(darkMode)
        setDarkMode(!darkMode)
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
            <div class="fixed left-0 top-0 w-full z-10 border-black border-b-4 bg-white">
                <div class="flex order-1 items-center justify-between p-4 text-black">
                    <Link href="/"><h1 class="font-bold text-4xl"> Schedulr </h1></Link>
                    <ul class="hidden order-2 sm:flex">
                        <li class="p-4">
                            <button onClick={() => { smoothScroll("#Features"); handleMode();}} class="p-1 border-transparent border-b-4 hover:border-black transition duration:500 ease-in">Features</button>
                        </li>
                        <li class="p-4">
                            <button onClick={() => smoothScroll("#FAQs")} class="p-1 border-transparent border-b-4 hover:border-black transition duration:500 ease-in" href='/'>FAQs</button>
                        </li>
                        <li class="p-4">
                            <button onClick={() => smoothScroll("#ContactUs")} class="p-1 border-transparent border-b-4 hover:border-black transition duration:500 ease-in" href='/'>Contact Us</button>
                        </li>
                    </ul>
                    <div class="hidden sm:block order-3 border-transparent border-4 hover:border-black transition duration:500 ease-in p-2">
                        <button class="font-bold text-2xl">Log In</button>
                    </div>

                    {/* Mobile */}
                    <div onClick={handleNav} class="block sm:hidden z-10">
                        {nav ? <AiOutlineClose size={20} color='white' /> : <AiOutlineMenu size={20} />}
                    </div>
                    <div class={nav
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center \
            items-center w-full h-screen text-center bg-black ease-in duration-300 text-white'
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center \
            items-center w-full h-screen text-center bg-black ease-in duration-300'}>
                        <ul>
                            <li class="p-4 text-4xl">
                                <Link href='/'>Features</Link>
                            </li>
                            <li class="p-4 text-4xl hover:text-gray-500">
                                <Link href='/'>FAQs</Link>
                            </li>
                            <li class="p-4 text-4xl hover:text-gray-500">
                                <Link href='/'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="Top" class="flex h-screen">
                <div class="m-auto text-center">
                    <h1 class="text-7xl p-5 md:text-9xl">Excellence starts here.</h1>
                    <button class="border-black border-4 p-5 hover:bg-black hover:text-white"
                        onClick={() => smoothScroll("#Features")}>
                        GET STARTED
                    </button>
                </div>
            </div>
            <div id="Features" class="flex h-screen">
                <div class="m-auto text-center">
                    <h1 class="text-7xl p-5 md:text-9xl">Excellence starts here.</h1>
                    <button class="border-black border-4 p-5 hover:bg-black hover:text-white"
                        onClick={() => smoothScroll("#FAQs")}>GET STARTED
                    </button>
                </div>
            </div>
            <div id="FAQs" class="flex h-screen">
                <div class="m-auto text-center">
                    <h1 class="text-7xl p-5 md:text-9xl">Excellence starts here.</h1>
                    <button class="border-black border-4 p-5 hover:bg-black hover:text-white"
                        onClick={() => smoothScroll("#ContactUs")}>GET STARTED
                    </button>
                </div>
            </div>
            <div id="ContactUs" class="flex h-screen">
                <div class="m-auto text-center">
                    <h1 class="text-7xl p-5 md:text-9xl">Excellence starts here.</h1>
                    <button class="border-black border-4 p-5 hover:bg-black hover:text-white"
                        onClick={() => smoothScroll("#Top")}>GET STARTED
                    </button>
                </div>
            </div>
        </>
    )
}

export default Landing