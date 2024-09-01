import React from 'react';
import Container from '../components/Container';
import about from "../assets/about.png";
import client from "../assets/client.png";
import Whatoff from '../components/Whatoff';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className='py-16 px-4 bg-[#F6F5FF]'>
      <Container>
        {/* Breadcrumb Navigation */}
        <div className="text-center mb-12">
          <h3 className='font-Sans font-bold text-4xl text-[#0D0E43] mb-2'>About Us</h3>
          <div className="flex justify-center gap-2 text-sm text-[#0D0E43] mb-4">
            <span>Home</span>
            <span>&gt;</span>
            <span>Pages</span>
            <span>&gt;</span>
            <span className='text-[#FB2E86]'>About Us</span>
          </div>
        </div>

        {/* About Section */}
        <div className="lg:flex lg:justify-between lg:gap-12 mb-16">
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <img src={about} alt="About Us" className="w-full rounded-lg shadow-lg"/>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="mb-8">
              <h3 className='font-Sans font-bold text-3xl text-[#0D0E43] mb-4'>
                Know About Our E-commerce Business & History
              </h3>
              <p className='font-Sans font-normal text-lg text-[#0D0E43]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
            </div>
            <Link to="/contact">
              <button className='py-3 px-6 bg-[#FB2E86] text-white font-Sans font-bold text-lg rounded-lg shadow-md hover:bg-[#e02b6d] transition duration-300 ease-in-out'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Whatoff Component */}
        <div className="mb-16">
          <Whatoff/>
        </div>

        {/* Client Testimonials */}
        <div className="text-center">
          <h3 className='font-Sans font-bold text-3xl text-[#0D0E43] mb-4'>Our Clients Say!</h3>
          <img className='mx-auto mb-4' src={client} alt="Client" />
          <h4 className='font-Sans font-bold text-xl text-[#0D0E43] mb-2'>Selina Gomez</h4>
          <h5 className='font-Sans font-semibold text-lg text-[#0D0E43] mb-4'>CEO at Webecy Digital</h5>
          <p className='font-Sans font-semibold text-lg text-[#0D0E43] mx-auto lg:w-2/3 w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default AboutUs;
