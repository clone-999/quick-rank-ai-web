import { Bell, Check } from 'lucide-react'
import React from 'react'

const QuizeFeature = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 bg-zinc-900 border border-border border-r-0 rounded-xl mt-14" >
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            {/* Title */}
            <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:mb-6">
                Quizzes and Tests That Get Results - Key Benefits
            </h1>
            {/* Divider */}
            <div className="mb-3 h-px w-full bg-black"></div>
            <div className="mb-0 flex flex-col gap-2 text-sm text-gray-400 sm:text-base lg:mb-8">
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                  <strong className='text-gray-300 ml-1'> Personalized for Any Purpose: </strong>Create tailored quizzes and tests for interviews, exam preparation, certifications, or skill assessments in seconds.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Boost Exam Success Rates: </strong>Designed to help students and professionals master key topics, ensuring higher scores and better performance.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Realistic Practice for Interviews: </strong>Generate mock interview questions aligned with specific roles or industries to boost confidence and readiness.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Save Hours of Preparation: </strong>Teachers and trainers can instantly generate accurate, structured quizzes without manual effort, freeing up valuable time.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Engaging and Interactive: </strong>Captivating quizzes keep learners engaged and make studying or practice sessions more effective and enjoyable.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Adaptable Across Topics and Levels: </strong>Suitable for any subject or complexity, from elementary education to advanced professional certifications, ensuring inclusivity and versatility.
                </div>
              </div>
            </div>
            {/* Link */}
            
            {/* Buttons */}
            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
              <a
                href="#"
                className="flex items-center gap-4 rounded-md bg-black px-6 py-3 text-white"
              >
                <Bell />
                <p>Start Generating Your Revenue Now!</p>
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="min-h-[530px] overflow-hidden rounded-md bg-gray-100"></div>
        </div>
      </div>
    </section>
  )
}

export default QuizeFeature