import React from 'react'
import Header from '../maincomponents/header';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className='p-4'>
        <div className='flex justify-center flex-col'>
          <h1 className='text-3xl font-semibold p-4 text-center'>About Us</h1>
          <p className='text-base p-4'>
            Welcome to Model Merge, the ultimate platform for accessing multiple language models in one place. Our mission is to streamline your workflow by allowing you to send requests to various models seamlessly from a single interface.
          </p>
        </div>
        <div>
          <h1 className='text-xl font-semibold p-4 text-left'>Our Story</h1>
          <p className='text-base p-4'>
            The idea for Model Merge was born out of necessity. As an avid user of language models, I often found myself jumping from one model to another, each excelling in its own unique way. The inefficiency of this process inspired me to create a solution that consolidates the strengths of various models into one cohesive platform.
          </p>
          <p className='text-base p-4'>
            With just an internet connection and a computer, I leveraged my programming skills to bring Model Merge to life. This project is a testament to the power of technology and the endless possibilities it offers to those who dare to innovate.
          </p>
        </div>
        <div>
          <h1 className='text-xl font-semibold p-4 text-left'>Our Vision</h1>
          <p className='text-base p-4'>
            At Model Merge, we believe in the power of choice and convenience. Our platform is designed to give you easy access to a diverse array of language models, ensuring that you can find the perfect fit for your specific needs. Whether you're looking for creative writing assistance, technical problem-solving, or anything in between, Model Merge has got you covered.
          </p>
          <p className='text-base p-4'>
            Thank you for choosing Model Merge. We are excited to be a part of your journey and look forward to helping you achieve your goals with the best language models at your fingertips.
          </p>
        </div>
        <div>
          <h1 className='text-xl font-semibold p-4 text-left'>Contribute</h1>
          <p className='text-base p-4'>
            Model Merge is an open-source project, and we welcome contributions from the community. If you're interested in contributing, please visit our GitHub repository for more information on how to get started.
          </p>
          <p className='text-base p-4 text-center'>
            <a href='https://github.com/vverma022/model-merge' className='text-red-500 underline' target='_blank' rel='noopener noreferrer'>
              Contribute on GitHub
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs;