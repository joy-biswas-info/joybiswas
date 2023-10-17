import Container from '@/Components/Container';
import React from 'react';

const Portfolio = () => {
    return (
        <Container id="portfolio">
            <div className='pb-24'>
                <h3 className="sub-heading text-primary font-bold text-center">Portfolio</h3>
                <h2 className="sub-heading lg:text-6xl font-bold text-center">Portfolio</h2>
                <p className="text-center">
                    Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate
                </p>

                <div className="portfolios mt-24">
                    <div className="portfolio-item h-[480px] p-24 bg-gray-400 rounded-2xl shadow-sm my-12 bg-[url('/uploads/images/banner/portfolio.jpg')] md:bg-cover bg-no-repeat bg-center">
                        <h3 className='font-bold text-primary text-xl'>Youtube</h3>
                        <div className='my-4 w-[550px]'>

                            <a href='#' className='font-bold lg:text-6xl'>
                                Web Application for
                                Desiverse
                            </a>
                        </div>
                        <button className='btn bg-primary px-4 py-2 my-4 rounded-lg font-bold'><a href="#">View Project</a></button>
                    </div>
                    <div className="portfolio-item h-[480px] p-24 bg-gray-400 rounded-2xl shadow-sm my-12 bg-[url('/uploads/images/banner/portfolio-1.jpeg')]  bg-no-repeat bg-center md:bg-cover">
                        <h3 className='font-bold text-primary text-xl'>Youtube</h3>
                        <div className='my-4 w-[550px]'>

                            <a href='#' className='font-bold lg:text-6xl'>
                                Web Application for
                                Desiverse
                            </a>
                        </div>
                        <button className='btn bg-primary px-4 py-2 my-4 rounded-lg font-bold'><a href="#">View Project</a></button>
                    </div>
                    <div className="portfolio-item h-[480px] p-24 bg-gray-400 rounded-2xl shadow-sm my-12 bg-[url('/uploads/images/banner/portfolio-2.jpeg')] bg-cover bg-no-repeat bg-center">
                        <h3 className='font-bold text-primary text-xl'>Youtube</h3>
                        <div className='my-4 w-[550px]'>

                            <a href='#' className='font-bold lg:text-6xl'>
                                Web Application for
                                Desiverse
                            </a>
                        </div>
                        <button className='btn bg-primary px-4 py-2 my-4 rounded-lg font-bold'><a href="#">View Project</a></button>
                    </div>

                </div>

            </div>
        </Container>
    );
};

export default Portfolio;