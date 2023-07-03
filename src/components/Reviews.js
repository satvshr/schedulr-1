import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CustomCard from './Card';

function Reviews() {
    return (
        <div id="Reviews" className='h-screen'>
            <div className='absolute text-5xl leading-relaxed justify-content mt-36'>
                <AnimationOnScroll animateIn='animate__slideInUp'>
                    <div>
                        WHAT
                        <div className="float-right w-10 h-10 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                        PEOPLE&nbsp;SAY
                    </div>
                </AnimationOnScroll>
            </div>
            <div className='flex p-4'>
                <CustomCard src="https://xsgames.co/randomusers/assets/images/favicon.png" name="TEst2422" profession="Tsest" review="Test reTest reviewTest reviewTest reviewview" />
                <CustomCard src="https://xsgames.co/randomusers/assets/images/favicon.png" name="BiscuitBobby" profession="Lemon" review="I mean, it's not bad I guess." />
            </div>
        </div>
    )
}

export default Reviews