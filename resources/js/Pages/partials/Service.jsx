import Container from '@/Components/Container';
import { Link } from '@inertiajs/react';
import React from 'react';

const Service = () => {
    return (
        <Container>
            <div className="grid grid-cols-2 h-[100vh]">
                <Link className='flex justify-center items-center bg-blue-400 hover:bg-primary rounded-tl-lg transition duration-500'>
                    <div>
                        <h2 className='text-2xl md:text-4xl font-bold'>Wordpress Website </h2>
                    </div>
                </Link>
                <Link className='flex justify-center items-center bg-gray-400 hover:bg-primary rounded-tr-lg transition duration-500'>
                    <div>
                        <h2 className='text-2xl md:text-4xl font-bold'>Wordpress Website </h2>
                    </div>
                </Link>
                <Link className='flex justify-center items-center bg-green-400 hover:bg-primary rounded-bl-lg transition duration-500'>
                    <div>
                        <h2 className='text-2xl md:text-4xl font-bold'>Wordpress Website </h2>
                    </div>
                </Link>
                <Link className='flex justify-center items-center bg-red-400 hover:bg-primary rounded-br-lg transition duration-500'>
                    <div>
                        <h2 className='text-2xl md:text-4xl font-bold'>Wordpress Website </h2>
                    </div>
                </Link>

            </div>
        </Container>
    );
};

export default Service;