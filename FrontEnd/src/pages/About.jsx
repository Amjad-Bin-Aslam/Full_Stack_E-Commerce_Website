import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox'

function About() {
  return (
    <div>
      
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatum tempore officia quaerat optio voluptate nam earum fugiat accusamus a aspernatur tempora quidem itaque rerum architecto doloribus iure suscipit deleniti vero, ex blanditiis in maiores! Officia dolores est fuga atque?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum debitis itaque dignissimos, aperiam doloribus quaerat nihil dolore ad nobis ipsam placeat laboriosam officiis. Eveniet magni, ab facilis odio minima rem laboriosam nobis voluptatibus sequi impedit ex expedita hic perspiciatis.</p>
          <b className='text-gray-800 '>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur ut quis necessitatibus quisquam nobis animi laboriosam maxime, at harum nihil nisi dolorum libero. Ducimus eum, sint dolores quaerat harum reiciendis adipisci ipsum odio velit facere ab corporis saepe corrupti dolorem.</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={"CHOOSE US"}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita voluptas eligendi modi facilis asperiores veritatis perferendis doloribus fugit, id aut commodi necessitatibus voluptatum iusto odio aspernatur assumenda ullam? Animi vel dolore deserunt.</p>
      </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita voluptas eligendi modi facilis asperiores veritatis perferendis doloribus fugit, id aut commodi necessitatibus voluptatum iusto odio aspernatur assumenda ullam? Animi vel dolore deserunt.</p>
      </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita voluptas eligendi modi facilis asperiores veritatis perferendis doloribus fugit, id aut commodi necessitatibus voluptatum iusto odio aspernatur assumenda ullam? Animi vel dolore deserunt.</p>
      </div>
    </div>
  
      <NewsLetterBox />

    </div>
  )
}

export default About
