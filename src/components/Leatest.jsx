import React from 'react';
import Container from './Container';
import chair001 from "../assets/chair001.png";
import chair002 from "../assets/chair002.png";
import chair003 from "../assets/chair003.png";
import chair004 from "../assets/chair004.png";
import chair005 from "../assets/chair005.png";
import chair006 from "../assets/chair006.png";

const products = [
  { id: 1, image: chair001, title: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
  { id: 2, image: chair002, title: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
  { id: 3, image: chair003, title: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
  { id: 4, image: chair004, title: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
  { id: 5, image: chair005, title: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
  { id: 6, image: chair006, title: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" }
];

const Leatest = () => {
  return (
    <section className='py-16 bg-white'>
      <Container>
        <div className="text-center mb-12">
          <h3 className='font-Sans font-bold text-4xl text-[#0D0E43]'>Latest Products</h3>
        </div>
        
        <div className="text-center mb-12">
          <ul className='flex justify-center gap-6'>
            {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((item, index) => (
              <li
                key={index}
                className='relative cursor-pointer text-lg font-semibold text-[#0D0E43] transition-colors duration-300 ease-in-out hover:text-[#FB2E86]'
              >
                {item}
                <span className='absolute bottom-0 left-0 h-1 w-full bg-[#FB2E86] transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100'></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 px-4">
          {products.map(product => (
            <div key={product.id} className="bg-[#F6F7FB] p-4 rounded-lg shadow-lg">
              <img className='mx-auto mb-4' src={product.image} alt={product.title} />
              <div className="flex justify-between items-center">
                <h2 className='font-Sans font-bold text-lg text-[#0D0E43]'>{product.title}</h2>
                <div className="flex gap-2">
                  <h3 className='font-Sans font-semibold text-lg text-[#0D0E43]'>{product.price}</h3>
                  <h4 className='font-Sans font-semibold text-lg line-through text-[#FB2448]'>{product.oldPrice}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Leatest;
