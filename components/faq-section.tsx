"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is SursaKit and who is it for?",
    answer:
      "SursaKit is an AI-powered cloud editor, designed to help developers and teams accelerate their coding workflow with intelligent assistance. It's perfect for early adopters and developers interested in cutting-edge cloud-based editing and AI integration.",
  },
  {
    question: "How does SursaKit's AI-powered editing work?",
    answer:
      "SursaKit leverages AI to provide real-time code suggestions, error detection, and smart refactoring, all integrated directly into the cloud editor. The AI adapts to your coding style and project needs to boost productivity and code quality.",
  },
  {
    question: "Can I get access to SursaKit now?",
    answer:
      "Users can join the waitlist to get early access and updates. Joining the waitlist is the best way to be among the one to experience the platform first.",
  },
  {
    question: "Will SursaKit integrate with existing development tools?",
    answer:
      "Yes, integration with popular tools and platforms is planned, allowing seamless workflows with Git repositories, CI/CD pipelines, and collaboration tools to enhance your development experience.",
  },
  {
    question: "Is my code secure on SursaKit?",
    answer:
      "Security is a top priority. SursaKit will use strong encryption, secure authentication, and best practices to ensure your code and data are safe within the cloud environment.",
  },
];


interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-4 sm:px-5 py-4 sm:py-[18px] pr-3 sm:pr-4 flex justify-between items-center gap-3 sm:gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-sm sm:text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-4 sm:px-5 transition-all duration-500 ease-out ${isOpen ? "pb-4 sm:pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-12 sm:pt-20 md:pt-[66px] pb-12 sm:pb-24 md:pb-40 px-4 sm:px-8 md:px-5 relative flex flex-col justify-center items-center">
      <div className="w-[200px] sm:w-[350px] md:w-[300px] h-[300px] sm:h-[500px] md:h-[500px] absolute top-[100px] sm:top-[150px] md:top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[60px] sm:blur-[100px] md:blur-[100px] z-0" />
      <div className="self-stretch pt-6 sm:pt-12 md:pt-14 pb-6 sm:pb-12 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-3 sm:gap-6 md:gap-4">
          <h2 className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[500px] text-center text-foreground text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight md:leading-[66px] px-4 sm:px-0 md:px-0">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words max-w-sm sm:max-w-xl md:max-w-lg mx-auto px-4 sm:px-0 md:px-0">
            Everything you need to know about SursaKit and how it can transform your development workflow
          </p>
        </div>
      </div>
      <div className="w-full max-w-[500px] sm:max-w-[700px] md:max-w-[600px] pt-0.5 pb-8 sm:pb-16 md:pb-10 flex flex-col justify-start items-start gap-3 sm:gap-6 md:gap-4 relative z-10 px-4 sm:px-0 md:px-0">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
