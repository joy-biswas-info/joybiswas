import Container from '@/Components/Container';
import { faMapLocation, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <Container className='my-24'>
            <div className="contact-wraper flex gap-4 items-start">
                <div className="contact-form w-1/2">
                    <form action="#">
                        <div className='flex flex-col first:mt-0 my-2'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder='Name' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="email">Name</label>
                            <input type="email" name="email" id="email" placeholder='Email' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                        </div>
                        <input type="submit" value="Send Message"  className='bg-primary py-2 px-4 font-bold rounded-lg'/>
                    </form>
                </div>
                <div className="contact-details">
                    <div className="address flex flex-row items-start gap-3">
                        <FontAwesomeIcon icon={faMapMarked} className='text-4xl'/>
                        <div className="address-text">
                            <h2 className='font-bold text-2xl'>Magura</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;