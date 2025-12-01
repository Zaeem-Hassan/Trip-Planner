"use client"
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

function ChatBot() {
    const onSend = () => {}
  return (
    <div className='h-[82vh] flex flex-col'>
        <section className='flex-1 overflow-y-auto p-4'>
        <div className='flex justify-end mt-2'>
            <div className='max-w-lg bg-primary text-white px-4 py-2 rounded-lg'>
                user message
            </div>
        </div>
         <div className='flex justify-start mt-2'>
            <div className='max-w-lg bg-primary text-white px-4 py-2 rounded-lg'>
                Ai message
            </div>
        </div>
        </section>

    <section>
     <div className='border rounded-2xl p-4 relative'>
          <Textarea
            placeholder="Type your message here..."
            className='w-full h-28 bg-transparent border-none focus-visible:ring-0 resize-none pr-14'
          />
          <Button size="icon" className='absolute bottom-4 right-4' onClick={onSend}>
            <Send className='h-4 w-4' />
          </Button>
        </div>
    </section>
    </div>
  )
}

export default ChatBot