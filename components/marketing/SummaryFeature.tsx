import { Bell, Check } from 'lucide-react'
import React from 'react'

const SummaryFeature = () => {
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
                Summaries and Reviews - Key Benefits
            </h1>
            {/* Divider */}
            <div className="mb-3 h-px w-full bg-black"></div>
            <div className="mb-0 flex flex-col gap-2 text-sm text-gray-400 sm:text-base lg:mb-8">
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                  <strong className='text-gray-300 ml-1'> Crystal-Clear Summaries: </strong>Create concise, easy-to-read overviews that capture the key points of any video, saving your audience time while keeping them informed.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Engaging Reviews: </strong>Generate compelling and detailed reviews that captivate readers and establish your authority on the topic.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Tailored for Your Audience: </strong>Customizable summaries and reviews designed to match the tone and style of your target audience, from casual readers to industry professionals.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Boosted Credibility: </strong>Produce professional-grade content that positions you as an expert, driving trust and loyalty among your readers.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Instant Shareability: </strong>Summaries and reviews are perfect for sharing across platforms like LinkedIn, Instagram, and Facebook, attracting more engagement and followers.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Time and Effort Saver: </strong>Save hours of manual content creation by letting Quick Rank AI do the heavy lifting, delivering polished summaries and reviews in seconds.
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

export default SummaryFeature