import { Bell, Check } from 'lucide-react'
import React from 'react'

const SocialMediaFeature = () => {
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
                Social Media Masterpieces - Key Benefits
            </h1>
            {/* Divider */}
            <div className="mb-3 h-px w-full bg-black"></div>
            <div className="mb-0 flex flex-col gap-2 text-sm text-gray-400 sm:text-base lg:mb-8">
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Platform-Specific Content: </strong>Quick Rank AI creates posts tailored for Instagram, Facebook, Twitter, LinkedIn, TikTok, and more, ensuring maximum impact on each platform.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Viral-Worthy Captions: </strong>Generates catchy, attention-grabbing captions that spark engagement, boost shares, and grow your audience rapidly.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Time-Saving Automation: </strong>No need to brainstorm—get high-quality, ready-to-post content in seconds, freeing you to focus on other tasks.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Increased Engagement: </strong>Optimized posts designed to drive likes, comments, shares, and clicks, ensuring your brand stands out in crowded social feeds.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Diverse Content Formats: </strong>Create tailored posts for various formats, including carousels, stories, reels, and promotional posts, all optimized for high performance.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> No Experience Needed: </strong>Perfect for beginners or businesses with no prior marketing knowledge—just upload a video, and let the app generate top-performing posts instantly.
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

export default SocialMediaFeature