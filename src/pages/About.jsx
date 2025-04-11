import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='bg-white px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-16'>
      <div className='text-center mb-16'>
        <Title text1="ABOUT" text2="US" />
        <p className='mt-4 text-gray-500 text-md md:text-lg max-w-2xl mx-auto'>
          Discover who we are, what we believe in, and why we’re here to bring the best laptops to your hands.
        </p>
      </div>

      <div className='flex flex-col-reverse lg:flex-row items-center gap-12'>
        {/* Text Content */}
        <div className='w-full lg:w-1/2 text-gray-700 text-base md:text-lg leading-relaxed space-y-6'>

          <p>
            At <span className='text-black font-semibold'>ShipX</span>, we believe that the right laptop can transform the way you study, work, and connect with the world. That’s why we’re on a mission to make powerful technology more accessible, affordable, and personal.
          </p>

          <p>
            We started as a small group of tech enthusiasts and have grown into a trusted platform where quality meets care. Whether you're a student, a developer, or a business professional, we’ve got a laptop that fits your journey.
          </p>

          <div>
            <h3 className='font-semibold text-gray-900 text-xl mb-2'>Our Mission</h3>
            <p>
              To empower every individual with technology that helps them grow, create, and succeed — no matter where they are.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 text-xl mb-2'>What Makes Us Stand Out</h3>
            <ul className='list-disc list-inside space-y-1'>
              <li>Handpicked, high-performance laptops</li>
              <li>Fast and secure delivery nationwide</li>
              <li>Honest pricing with no hidden fees</li>
              <li>Friendly, knowledgeable customer support</li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className='w-full lg:w-1/2'>
          <img
            src={assets.laptop}
            alt=''
            className='w-full rounded-xl shadow-lg object-cover'
          />
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
