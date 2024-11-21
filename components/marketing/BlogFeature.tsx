import { Bell, Check } from 'lucide-react'
import React from 'react'

const BlogFeature = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 bg-zinc-900 border border-border border-r-0 rounded-xl">
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            {/* Title */}
            <h1 className="mb-4 text-2xl font-bold md:text-4xl lg:mb-6">
                Blog Posts That Rank #1
            </h1>
            {/* Divider */}
            <div className="mb-3 h-px w-full bg-black"></div>
            <div className="mb-0 flex flex-col gap-2 text-sm text-gray-400 sm:text-base lg:mb-8">
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> SEO-Driven Perfection: </strong>Every blog post is optimized for Google's latest ranking algorithms, ensuring your content ranks higher than competitors.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'>Keyword Magic: </strong>Quick Rank AI automatically identifies and integrates the most effective keywords, boosting search visibility effortlessly.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Platform-Specific Optimization: </strong>Designed for platforms like WordPress, Blogger, Wix, and Medium, each post is crafted to thrive on the specific nuances of these blogging giants.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Captivating Headlines and Subheadings: </strong>Generates attention-grabbing headlines and structured subheadings to keep readers engaged and improve dwell time.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> Fast Monetization: </strong>Whether through ads, affiliate marketing, or sponsored posts, the optimized content makes it easier to earn money immediately.
                </div>
              </div>
              <div className='mb-3 flex'>
                <Check className='w-16' />
                <div>
                    <strong className='text-gray-300 ml-1'> 100% Unique and Plagiarism-Free Content: </strong>Produces fresh, original blog posts every time, ensuring your site remains credible and authentic to readers and search engines alike.
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

export default BlogFeature