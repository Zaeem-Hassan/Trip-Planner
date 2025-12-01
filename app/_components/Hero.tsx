"use client"

import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { ArrowBigDown, Globe2, Landmark, Plane, Send } from 'lucide-react'
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const suggestions = [
  {
    title: "Create a New Trip",
    Icon: <Globe2 className='text-blue-400 h-5 w-5' />,
  },
  {
    title: "Inspire me where to go",
    Icon: <Plane className='text-green-400 h-5 w-5' />,
  },
  {
    title: "Discover Hidden Gems",
    Icon: <Landmark className='text-orange-400 h-5 w-5' />,
  },
  {
    title: "Adventure Destinations",
    Icon: <Globe2 className='text-yellow-400 h-5 w-5' />,
  }
]

function Hero() {

  const { user } = useUser()
  const router = useRouter()

  const onSend = () => {
    if (!user) {
      router.push('/sign-in')
      return
    }

    console.log("User is logged in, send message…")
  }

  return (
    <div className='mt-24 w-full flex justify-center'>
      <div className='max-w-4xl w-full text-center space-y-6'>

        {/* Title */}
        <h1 className='text-xl md:text-5xl font-bold'>
          Hey there! I'm your personal{" "}
          <span className='text-primary whitespace-nowrap'>Trip Planner</span>
        </h1>

        {/* Description */}
        <p className='text-lg'>
          Tell me what you want, and I'll create the perfect itinerary for your next adventure!
        </p>

        {/* Chat Input */}
        <div className='border rounded-2xl p-4 relative'>
          <Textarea
            placeholder="Type your message here..."
            className='w-full h-28 bg-transparent border-none focus-visible:ring-0 resize-none pr-14'
          />
          <Button size="icon" className='absolute bottom-4 right-4' onClick={onSend}>
            <Send className='h-4 w-4' />
          </Button>
        </div>

        {/* Suggestions */}
        <div className='flex gap-4 pt-4 overflow-x-auto whitespace-nowrap justify-center scrollbar-hide'>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className='flex items-center gap-2 px-4 py-2 border rounded-xl cursor-pointer hover:bg-muted transition shrink-0'
            >
              {suggestion.Icon}
              <h2 className='text-sm font-medium'>{suggestion.title}</h2>
            </div>
          ))}
        </div>

        {/* Centered Video Text */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <h2 className='flex items-center gap-2 text-lg font-medium'>
            Not sure where to start?
            <span className="text-primary font-semibold">See how it works</span>
            <ArrowBigDown className="animate-bounce" />
          </h2>
        </div>

        {/* Video Preview */}
        <HeroVideoDialog
          className="block"
          animationStyle="from-center"
          videoSrc="https://www.example.com/dummy-video"
          thumbnailSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrB9nsWi9kAuRQfOS3aPjxzwP4skvnn_PGw&s"
          thumbnailAlt="Demo Video"
        />

      </div>
    </div>
  )
}

export default Hero
