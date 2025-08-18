"use client"

import Image from "next/image"
import * as motion from "framer-motion/client"
import ChatInput from "./ChatInput"
import avatarAI from "../../../public/avatar/ai.jpg"
import rightArrow from "../../../public/symbols/right-arrow.svg"
import { useState, useRef, useEffect } from "react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatSectionProps {
  onSubmit?: (message: string) => void
}

export default function ChatSection({ onSubmit }: ChatSectionProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    if (isTyping) {
      scrollToBottom()
    }
  }, [typingText, isTyping])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const typeMessage = (text: string) => {
    setIsTyping(true)
    setTypingText("")
    let index = 0
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypingText(text.substring(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        const aiMessage: Message = {
          id: Date.now().toString(),
          text: text,
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
        setTimeout(() => {
          setIsTyping(false)
          setTypingText("")
        }, 100)
      }
         }, 20)
  }

  const handleSubmit = async (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })
      
      const data = await res.json()
      if (data.error) {
        console.error('API Error:', data.error)
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Sorry, there was an error processing your request.',
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorMessage])
      } else {
        typeMessage(data.response)
      }
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, there was an error connecting to the server.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className="card border-b-0.5 max-w-7xl grid grid-cols-1 md:grid-cols-3 md:h-96 gap-y-10 md:gap-y-0"
      whileInView={{ opacity: 1 }}
      initial={{ y: "100vw", opacity: 0 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, ease: "linear", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center md:justify-start">

      <div className="relative overflow-hidden flex justify-center flex-none w-56 md:w-48 lg:w-72 col-span-1 md:h-48 lg:h-72">
        <Image
          src={avatarAI}
          alt="AI Avatar"
          className="relative z-20 rounded-3xl "
          />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-100 z-30 pointer-events-none rounded-b-xl"></div>
      </div>
          </div>

      
      
      <div className="flex flex-col  justify-center  col-span-2">
            {messages.length === 0 && (

              <>
              <p className="heading lg:text-5xl text-center ">
          Chat with Angel&apos;s AI 
        </p>
        <p className="md:my-4 md:text-lg lg:text-2xl text-center">
        Ask me anything. I built this AI to share my work, experience, and story with you.
        </p>
        </>
        )}

 

        <div ref={chatContainerRef} className="md:my-4 max-h-56 overflow-y-auto" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4B5563 transparent'
        }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${message.isUser ? 'place-self-end ' : 'text-white'}`}
            >
              <div
                className={` px-10 py-4 `}
              >
                <p className="text-xl">{message.text}</p>
              </div>
            </div>
          ))}
          
                     {isTyping && (
             <div className="flex justify-start mb-4">
               <div className="px-10 py-4">
                 <p className="text-xl text-white">
                   {typingText}
                   <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse"></span>
                 </p>
               </div>
             </div>
           )}
          
          {isLoading && (
            <motion.div 
              className="flex justify-start mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-ui text-white px-4 py-2 rounded-xl">
                <div className="flex items-center gap-2">
                  <p className="text-xl">Angel&apos;s AI is thinking</p>
                                     <div className="flex gap-1">
                     <motion.div
                       className="w-2 h-2 bg-white rounded-full"
                       animate={{ scale: [1, 1.5, 1] }}
                       transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                     />
                     <motion.div
                       className="w-2 h-2 bg-white rounded-full"
                       animate={{ scale: [1, 1.5, 1] }}
                       transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                     />
                     <motion.div
                       className="w-2 h-2 bg-white rounded-full"
                       animate={{ scale: [1, 1.5, 1] }}
                       transition={{ duration: 0.8, repeat: Infinity, delay: 0.6 }}
                     />
                   </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
               <div className="w-full my-4">
          <ChatInput
            placeholder="Type your questions here..."
            onSubmit={handleSubmit}
            submitIcon={rightArrow}
          />
        </div>
      </div>
    </motion.div>
  )
}
