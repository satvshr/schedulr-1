import React from 'react'
import { TypeAnimation } from 'react-type-animation';
function smoothScroll(target) {
    if (typeof window !== 'undefined') {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }
}
function About() {
    return (
        <div className='flex items-center justify-between h-screen p-8 text-5xl font-bold'>
            <div className='flex-shrink-0 max-w-[36rem]'>
                <p>PLAN YOUR <br /></p>
                <TypeAnimation
                    sequence={[
                        'SCHEDULE',
                        1000,
                        'VICTORIES',
                        1000,
                        'SUCCESS.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                />
                <p className='pt-4 text-base'>Scehdulr's unique features allow students to
                    rest easy knowing their life is in great distress over the coming weeks.
                    There's no better time than the present to realize how swamped you are with academic work.
                    Get started with Schedulr today!</p>
                <div className="flex items-center pt-8 drop-shadow hover:drop-shadow-xl">
                    <button onClick={() => { smoothScroll("#Reviews") }} className="flex items-center w-32 h-10 mr-2 bg-white rounded-full justify-evenly animate-bounce">
                        <span className='text-xl'> Reviews </span>
                    </button>
                </div>
            </div>
            <div className='flex-shrink'>
                <img src='./website.png' className='w-full h-auto max-w-4xl' />
            </div>
        </div >
    )
}

export default About