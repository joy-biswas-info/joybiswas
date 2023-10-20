import Container from "@/Components/Container";
import {  faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Feedbck = () => {
    const [index,setIndex]=useState(0);

    return (
        <Container>
            <div className="heading-text text-center">
                <h3 className="subheading font-bold text-2xl">Testimonial</h3>
                <h2 className="heading font-bold text-6xl">What Clients Say</h2>
                <p>
                    Dliquip ex ea commo do conse namber onequa ute irure dolor
                    in reprehen derit in voluptate
                </p>
            </div>
            <div className="feedbacks my-24">
                <div className="feedback-wraper flex gap-2 ">
                    <div className="feedback w-1/4 bg-gray-500 p-3 rounded-lg">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-primary font-bold text-8xl"/>
                        <p className="font-simibold text-2xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eaque!</p>
                        <div className="flex gap-1 items-start my-4">
                            <img src="./logo.png" alt="" className="w-12 rounded-full"/>
                            <div className="owner-text">
                            <h3 className="font-bold font-lg">Nahum</h3>
                            <h4 className="font-semibold">Degination</h4>
                            </div>
                        </div>
                    </div>
                    <div className="feedback w-1/4 bg-gray-500 p-3 rounded-lg">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-primary font-bold text-8xl"/>
                        <p className="font-simibold text-2xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eaque!</p>
                        <div className="flex gap-1 items-start my-4">
                            <img src="./logo.png" alt="" className="w-12 rounded-full"/>
                            <div className="owner-text">
                            <h3 className="font-bold font-lg">Nahum</h3>
                            <h4 className="font-semibold">Degination</h4>
                            </div>
                        </div>
                    </div>
                    <div className="feedback w-1/4 bg-gray-500 p-3 rounded-lg">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-primary font-bold text-8xl"/>
                        <p className="font-simibold text-2xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eaque!</p>
                        <div className="flex gap-1 items-start my-4">
                            <img src="./logo.png" alt="" className="w-12 rounded-full"/>
                            <div className="owner-text">
                            <h3 className="font-bold font-lg">Nahum</h3>
                            <h4 className="font-semibold">Degination</h4>
                            </div>
                        </div>
                    </div>
                    <div className="feedback w-1/4 bg-gray-500 p-3 rounded-lg">
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-primary font-bold text-8xl text-center"/>
                        <p className="font-simibold text-2xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eaque!</p>
                        <div className="flex gap-1 items-start my-4">
                            <img src="./logo.png" alt="" className="w-12 rounded-full"/>
                            <div className="owner-text">
                            <h3 className="font-bold font-lg">Nahum</h3>
                            <h4 className="font-semibold">Degination</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Feedbck;
