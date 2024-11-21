import { Bell, Check } from 'lucide-react'
import React from 'react'

const TimestampFeature = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 bg-zinc-900 border border-border border-r-0 rounded-xl mt-14">
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Image */}
          <div className="min-h-[530px] overflow-hidden rounded-md bg-gray-100"></div>
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            {/* Title */}
            <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:mb-6">
              Detailed Timestamps – Key Benefits
            </h1>
            {/* Divider */}
            <div className="mb-3 h-px w-full bg-black"></div>
            <div className="mb-0 flex flex-col gap-2 text-sm text-gray-400 sm:text-base lg:mb-8">
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Enhanced Content Navigation: </strong>Automatically generated timestamps make it easy for users to jump to the exact moments they care about, improving user experience.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'>Boosted Video Engagement: </strong>Viewers stay longer when they can find relevant sections quickly, increasing watch time and audience retention.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Professional Presentation: </strong>Adds a polished, structured look to your content, making it ideal for webinars, tutorials, interviews, or educational videos.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Time-Saving Automation: </strong>No manual effort required—Quick Rank AI analyzes the video and creates precise timestamps in seconds.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Improved SEO Rankings: </strong>Search engines prioritize content with structured timestamps, making it easier for users to discover your video or blog.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Perfect for Diverse Platforms: </strong>Tailored for YouTube chapters, blogs, and even podcasts, ensuring maximum compatibility and impact across media types.
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
          
        </div>
      </div>
    </section>
  )
}

export default TimestampFeature