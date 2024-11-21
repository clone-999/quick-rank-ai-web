import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import MagicCard from '@/components/ui/magic-card'
import { tips } from '@/utils/constants/tips'
import { Tips } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <MagicCard className="p-0 md:p-0 relative w-full">
          <Link href={`/generate-chapters`} className="w-full h-full absolute -z-1 inset-0"></Link>
          <Card className="group border-0">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-center h-40 lg:h-52 overflow-hidden">
                <Image
                    src={'/assets/blog1.jpg'}
                    alt='Generate Chapters'
                    width={1024}
                    height={1024}
                    unoptimized
                    className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-4">
                <CardTitle className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-all duration-300">
                    Generate Chapters
                </CardTitle>
                <CardDescription className="mt-2">
                    Create timestamps from any youtube videos
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </MagicCard>

        <MagicCard className="p-0 md:p-0 relative">
          <Link href={`/generate-presentations`} className="w-full h-full absolute -z-1 inset-0"></Link>
          <Card className="group border-0">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-center h-40 lg:h-52 overflow-hidden">
                <Image
                    src={'/assets/blog2.jpg'}
                    alt='Generate Presentations'
                    width={1024}
                    height={1024}
                    unoptimized
                    className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-4">
                <CardTitle className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-all duration-300">
                  Generate Presentations
                </CardTitle>
                <CardDescription className="mt-2">
                  Create powerpoints presentations from any youtube videos
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </MagicCard>
        <MagicCard className="p-0 md:p-0 relative">
          <Link href={`#`} className="w-full h-full absolute -z-1 inset-0"></Link>
          <Card className="group border-0">
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-center h-40 lg:h-52 overflow-hidden">
                <Image
                    src={'/assets/blog3.jpg'}
                    alt='Generate Lesson Plans'
                    width={1024}
                    height={1024}
                    unoptimized
                    className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-4">
                <CardTitle className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-all duration-300">
                  Generate Lesson Plans
                </CardTitle>
                <CardDescription className="mt-2">
                  Create lesson plans for your youtube videos
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </MagicCard>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <Card className="mx-auto w-full">
          <CardHeader>
            <CardTitle className="text-left text-2xl font-bold">
              How to use Quick Rank AI Features?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-500">
              Make sure you follow all the tips below before submitting any youtube video
              URL.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tips?.map((tip: Tips) => (
                  <div
                  className="p-4 rounded-lg mt-4 border border-zinc-600 bg-zinc-800"
                  key={tip.icon}
                  >
                  <p className="text-gray-400">{tip.description}</p>
                  <div className="text-2xl mt-2">{tip.icon}</div>
                  </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage