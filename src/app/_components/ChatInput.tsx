"use client"

import { useState } from "react"
import Image from "next/image"



// Interface for all the props
interface ChatInputProps {
  placeholder?: string
  onSubmit?: (message: string) => void
  submitIcon?: string
}

// ChatInput component
export default function ChatInput({ 
  placeholder = "Type your questions here...", 
  onSubmit, 
  submitIcon = "/symbols/right-arrow.svg",
}: ChatInputProps) {
  // State for the message



  const [message, setMessage] = useState("")

  
  // Handle the submit
  const handleSubmit = () => {
    if (message.trim() && onSubmit) { // Check if the message is not empty and onSubmit is defined
      onSubmit(message.trim()) // Call the onSubmit function
      setMessage("") // Clear the message
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className=" w-full bg-ui border-2 border-text border-opacity-10 rounded-xl py-2 px-4 text-white placeholder:text-sm md:placeholder:text-base placeholder-gray-400 focus:outline-none focus:border-opacity-30 transition-all"
      />
      <button
        onClick={handleSubmit}
        disabled={!message.trim()}
        className=" flex items-center gap-2 py-1 px-4 md:py-2 md:px-8 bg-ui border-2 placeholder:text-sm md:placeholder:text-base border-text border-opacity-10 rounded-xl p-2 hover:border-opacity-30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit
        <Image 
          src={submitIcon} 
          alt="Submit" 
          width={20} 
          height={20} 
          className="w-5 h-5"
        />
      </button>
    </div>
  )
}
