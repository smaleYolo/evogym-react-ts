import React from 'react';
import Logo from '@/assets/Logo.png'


const Footer = () => {
    return (
        <footer className='bg-primary-100 py-16'>
            <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>

                <div className='mt-16 basis-1/2 md:mt-0'>
                    <img src={Logo} alt="logo"/>
                    <p className='my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Adipisci consectetur exercitationem fuga fugiat nisi rem sed tenetur vel, veritatis
                        voluptates.
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>

                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h2 className='font-bold'>Links</h2>
                    <p className='my-5'>Instagram</p>
                    <p className='mb-5'>Facebook</p>
                    <p>Forbes</p>
                </div>

                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h2 className='font-bold'>Contact Us</h2>
                    <p className='my-5'>Make ur body fit, start with a number below.</p>
                    <p>+7 (999) 888 66 77</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;