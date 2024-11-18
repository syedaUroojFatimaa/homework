import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-28">
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center">

          <div className="w-full md:w-5/12 text-white space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left">
              Tritir Cushion Foundation - Flawless Coverage All Day
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Achieve smooth, natural-looking skin with Tritir Cushion Foundation. Its lightweight formula offers buildable coverage, a radiant finish, and all-day hydration, making it perfect for every skin type.
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li>Hydrating formula with Hyaluronic Acid</li>
              <li>SPF 30 for broad-spectrum sun protection</li>
              <li>Infused with Vitamin E to nourish and protect</li>
              <li>Botanical extracts for a calming effect on the skin</li>
            </ul>
            <br />
            <Link href="https://global.oliveyoung.com/product/detail?prdtNo=GA240724689" target="_blank">
              <button className="bg-red-200 hover:bg-red-300 text-black py-3 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 focus:outline-none">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="w-full md:w-6/12 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/tirtir.webp"
                alt="Tritir Cushion Foundation"
                layout="responsive"
                width={600}
                height={600}
                className="object-cover transform transition duration-500 ease-in-out hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-28">
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center">

          <div className="w-full md:w-5/12 text-white space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left">
              Anua Niacinamide 10% + TXA 4% Dark Spot Correcting Serum
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Target dark spots and even your skin tone with Anua&apos;s Dark Spot Correcting Serum. With the powerful combination of Niacinamide and TXA, this serum helps brighten dark spots, reduce pigmentation, and enhance skin texture for a radiant complexion.
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li>Niacinamide helps brighten and strengthen the skin barrier</li>
              <li>TXA (Tranexamic Acid) works to fade hyperpigmentation</li>
              <li>Lightweight, fast-absorbing formula ideal for daily use</li>
              <li>Suitable for all skin types, even sensitive skin</li>
            </ul>
            <br />
            <Link href="https://global.oliveyoung.com/product/detail?prdtNo=GA240724766" target="_blank">
              <button className="bg-red-200 hover:bg-red-300 text-black py-3 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 focus:outline-none">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="w-full md:w-6/12 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/serum1.webp"
                alt="Anua Niacinamide 10% + TXA 4% Dark Spot Correcting Serum"
                layout="responsive"
                width={600}
                height={600}
                className="object-cover transform transition duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-28">
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center">

          <div className="w-full md:w-5/12 text-white space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left">
              Mediheal Collagen Ampoule Pad 100 Pads Double Pack Set
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Revitalize your skin with Mediheal&apos;s Collagen Ampoule Pads. These pads are soaked in collagen-rich ampoule that deeply hydrates, firms, and nourishes the skin. Enjoy a rejuvenating experience with every use.
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li>Collagen for enhanced skin elasticity and firmness</li>
              <li>Deep hydration and nourishment for glowing skin</li>
              <li>100 pads per box for long-lasting use</li>
              <li>Convenient double pack offers great value</li>
            </ul>
            <br />
            <Link href="https://global.oliveyoung.com/product/detail?prdtNo=GA221217172" target="_blank">
              <button className="bg-red-200 hover:bg-red-300 text-black py-3 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 focus:outline-none">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="w-full md:w-6/12 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/maskk.jpg"
                alt="Mediheal Collagen Ampoule Pad 100 Pads Double Pack Set"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover transform transition duration-500 ease-in-out hover:scale-105 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
