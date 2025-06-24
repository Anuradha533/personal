import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
    
            <a href='https://www.github.com/aruradha533' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/anuradha-lacholla-0095161a0' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
        </div>
    );
};

export default HeaderSocials;
