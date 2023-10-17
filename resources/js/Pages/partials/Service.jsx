import Container from '@/Components/Container';
import React from 'react';

const Service = () => {
    return (
        <Container>
            <div className="grid grid-cols-2 h-[100vh]">
                <div className='flex justify-center items-center bg-blue-400 hover:bg-primary rounded-tl-lg transition duration-500'>
                    Wordpress Website                </div>
                <div className='flex  justify-center items-center bg-gray-600 hover:bg-primary rounded-tr-lg  transition duration-500'>
                    Laravel Website                </div>
                <div className='flex justify-center items-center  bg-blue-700 hover:bg-primary rounded-bl-lg  transition duration-500'>
                    Web Application                 </div>
                <div className='flex justify-center items-center bg-red-300 hover:bg-primary rounded-br-lg  transition duration-500'>
                    HTML Templete                </div>
            </div>
        </Container>
    );
};

export default Service;