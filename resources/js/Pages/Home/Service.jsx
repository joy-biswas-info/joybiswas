import Container from '@/Components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@inertiajs/react';
import React from 'react';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

const Service = () => {
    return (
        <Container>
            <div className="grid grid-cols-2 h-[100vh]">
                <Link className='flex justify-center items-center bg-blue-400 hover:bg-primary rounded-tl-lg transition duration-500'>
                    <div className='p-4 md:p-8'>
                        <FontAwesomeIcon icon={faReact} className='text-4xl' />
                        <h2 className='text-2xl md:text-4xl font-bold'>React Applications </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui enim inventore veritatis voluptates id doloremque nesciunt laborum ex a quisquam.</p>
                    </div>
                </Link>
                <Link className='flex justify-center items-center bg-gray-400 hover:bg-primary rounded-tr-lg transition duration-500'>
                    <div className='p-4 md:p-8'>
                        <FontAwesomeIcon icon={faLaravel} className='text-4xl' />
                        <h2 className='text-2xl md:text-4xl font-bold'>Laravel Applications </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, incidunt cumque ratione nobis sequi quibusdam quaerat. Laudantium quam error hic.</p>
                    </div>
                </Link>
                <Link className='flex justify-center items-center bg-green-400 hover:bg-primary rounded-bl-lg transition duration-500'>
                    <div className='p-4 md:p-8'>
                        <FontAwesomeIcon icon={faWordpress} className='text-4xl' />

                        <h2 className='text-2xl md:text-4xl font-bold'>Wordpress Website </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed pariatur nam inventore itaque maiores nobis facilis minus excepturi quas iusto.</p>
                    </div>
                </Link>
                <Link className='flex justify-center items-center bg-red-400 hover:bg-primary rounded-br-lg transition duration-500'>
                    <div className='p-4 md:p-8'>
                        <FontAwesomeIcon icon={faFolder} className='text-4xl' />

                        <h2 className='text-2xl md:text-4xl font-bold'>Website Templete </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatem deleniti! Adipisci impedit et at tenetur praesentium eligendi unde distinctio?</p>
                    </div>
                </Link>

            </div>
        </Container>
    );
};

export default Service;


