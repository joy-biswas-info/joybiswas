import GuestNavigation from '@/Layouts/GuestNavigation';
import { Link, Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import About from './Home/About';
import Container from '@/Components/Container';
import Portfolio from './Home/Portfolio';
import Skills from './Home/Skills';
import Service from './Home/Service';
import Faq from './Home/Faq';
import Feedbck from './Home/Feedbck';
import Contact from './Home/Contact';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [counter, setCounter] = useState(1);
    const cursorRounded = document.querySelector('.rounded');
    const cursorPointed = document.querySelector('.pointed');
    const moveCursor = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        if (cursorRounded && cursorPointed) {
            cursorRounded.style.transform =
                `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            cursorPointed.style.transform =
                `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
    }
    window.addEventListener('mousemove', moveCursor);
    const count = () => {
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => {
                setCounter(i);
            }, i * 100);

        }
    }
    useEffect(() => {
        count()
    }, []);
    return (
        <>
            <Head title="Home" />
            <div className='container mx-auto md:px-28 lg:block hidden'>
                <GuestNavigation />
            </div>

            <div className=' bg-blue-700 mt-[-85px] lg:h-[100vh]' style={{ backgroundImage: "url('./uploads/images/banner/1.jpg')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <Container className="">
                    <div className="flex flex-col-reverse gap-10 lg:flex-row py-48 items-center align-middle">
                        <div className="left">
                            <div className='text  w-3/5'>
                                <h3 className='text-2xl font-extrabold'>Hello I'm</h3>
                                <h2 className='md:text-6xl font-extrabold'>Joy Biswas</h2>
                                <h3 className='text-xl font-bold text-white my-4'>Web Developer from Bangladesh</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ducimus dignissimos rerum veritatis mollitia temporibus ipsa eius, facere numquam modi!</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className='relative'>
                                <img className='w-100 rounded-lg md:rounded-[50px] md:w-[320px] lg:w-[550px]' src="./uploads/images/banner/2.jpg" alt="" />
                                <div className="number-year absolute top-8 md:top-20 md:left-[-60px] bg-white px-2 rounded-md" >
                                    <div className="wraper flex gap-1 md:gap-1 lg:gap-2 items-center align-middle">
                                        <h3 className='text-xl md:text-4xl lg:text-6xl font-bold text-blue-600'>{counter}</h3>
                                        <span className='text-lg text-black font-bold w-24'>years of  success</span>
                                    </div>
                                </div>
                                <div className="number-project absolute md:bottom-5 md:right-[-50px] bg-white px-2 rounded-md">
                                    <div className="wraper flex gap-1 md:gap-3 lg:gap-4 items-center align-middle">
                                        <h3 className='text-xl md:text-2xl lg:text-6xl font-bold text-primary'>{counter}</h3>
                                        <span className='text-lg text-black font-bold w-24'>project completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </div >

            <About />
            <Portfolio />
            <Skills />
            <Service />
            <Faq />
            <Feedbck/>
            <Contact/>
        </>
    );
}
