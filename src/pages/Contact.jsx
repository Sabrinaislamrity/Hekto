import React from 'react';
import Container from '../components/Container';
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <section className='py-16 px-4 bg-[#F6F5FF]'>
      <Container>
        <div className="text-center mb-12">
          <h3 className='font-Sans font-bold text-4xl text-[#0D0E43]'>Contact</h3>
          <div className="flex justify-center mt-4">
            <h4 className='font-Sans font-semibold text-lg text-[#0D0E43]'>Home .</h4>
            <h4 className='font-Sans font-semibold text-lg text-[#0D0E43]'>Pages .</h4>
            <p className='font-Sans font-semibold text-lg text-[#FB2E86]'>Contact</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between bg-white p-8 rounded-lg shadow-lg">
          <div className="lg:w-[48%] mb-8 lg:mb-0">
            <div className="mb-8">
              <h3 className='font-Sans font-bold text-2xl text-[#0D0E43] mb-4 relative'>
                Information About Us
                {/* <span className='absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 bg-[#0D0E43] rounded-full'></span>
                <span className='absolute top-1/2 left-6 transform -translate-y-1/2 w-3 h-3 bg-[#FF27B7] rounded-full'></span>
                <span className='absolute top-1/2 left-12 transform -translate-y-1/2 w-3 h-3 bg-[#37DAF3] rounded-full'></span> */}
              </h3>
              <p className='font-Sans font-medium text-base text-[#0D0E43] leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
            </div>
            <div className="mb-8">
              <h3 className='font-Sans font-bold text-2xl text-[#0D0E43] mb-4'>Get in Touch</h3>
              <p className='font-Sans font-medium text-base text-[#0D0E43] leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
            </div>
            <form>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input className='h-12 w-full border-2 border-[#0D0E43] rounded-lg px-4' type="text" placeholder='Your Name*' />
                <input className='h-12 w-full border-2 border-[#0D0E43] rounded-lg px-4' type="text" placeholder='Your E-mail*' />
              </div>
              <input className='h-12 w-full border-2 border-[#0D0E43] rounded-lg px-4 mb-6' type="text" placeholder='Subject*' />
              <textarea className='w-full border-2 border-[#0D0E43] rounded-lg px-4 py-3 resize-none mb-6' placeholder='Type Your Message'></textarea>
              <button className='py-3 px-6 bg-[#FB2E86] text-white font-Sans font-bold text-base rounded-lg hover:bg-[#d52875] transition-colors'>
                Send Mail
              </button>
            </form>
          </div>

          <div className="lg:w-[48%]">
            <h2 className='font-Sans font-bold text-2xl text-[#0D0E43] mb-6'>Contact Way</h2>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className='w-8 h-8 bg-[#5726DF] rounded-full'></div>
                <div>
                  <h3 className='font-Sans font-semibold text-base text-[#0D0E43]'>Tel: 877-67-88-99</h3>
                  <h4 className='font-Sans font-semibold text-base text-[#0D0E43]'>E-Mail: shop@store.com</h4>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className='w-8 h-8 bg-[#FF27B7] rounded-full'></div>
                <div>
                  <h3 className='font-Sans font-semibold text-base text-[#0D0E43]'>Support Forum</h3>
                  <h4 className='font-Sans font-semibold text-base text-[#0D0E43]'>For over 24hr</h4>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className='w-8 h-8 bg-[#FFB265] rounded-full'></div>
                <div>
                  <h3 className='font-Sans font-semibold text-base text-[#0D0E43]'>20 Margaret St, London</h3>
                  <h4 className='font-Sans font-semibold text-base text-[#0D0E43]'>Great Britain, 3NM98-LK</h4>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className='w-8 h-8 bg-[#1BE982] rounded-full'></div>
                <div>
                  <h3 className='font-Sans font-semibold text-base text-[#0D0E43]'>Free Standard Shipping</h3>
                  <h4 className='font-Sans font-semibold text-base text-[#0D0E43]'>On all orders.</h4>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <img src={contact} alt="Contact" className='w-full rounded-lg shadow-lg' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
