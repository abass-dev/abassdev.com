'use client'

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Responsive } from "@/utils"


const faqData = [
  {
    question: "Which operating system do I use?",
    answer: "I primarily use WSL, which stands for Windows Subsystem for Linux, with Kali Linux as my operating system. WSL allows me to run a Linux distribution alongside my Windows environment, providing me with the flexibility and tools of Linux while still using Windows as the host operating system."
  },
  {
    question: "What programming language do I mostly use?",
    answer: "PHP and JavaScript are the programming languages I use most frequently."
  },
  {
    question: "What code editor do I mostly use?",
    answer: "Visual Studio Code (VSCode) is my most used code editor, and here's why: It's free, powerful, customizable, works on multiple platforms, has an integrated terminal, offers intelligent code assistance, and has a thriving community."
  },
  {
    question: "What is my favorite Web browser?",
    answer: "Tor and Chrome are my favorite Web browsers for browsing and development environment."
  },
  {
    question: "What is my current development environment?",
    answer: "BRAND: Dell, PROCESSOR: Intel Core i7, RAM: 16GB, OPERATING SYSTEM: Windows 11, STORAGE CAPACITY: 256GB, STORAGE TYPE: SSD"
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  return (
    <div className="container mx-auto px-8 md:px-10 my-20 lg:px-20 xl:px-32">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-edu-nsw text-primary">
            FAQ&apos;s (Frequently Asked Questions)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8">
            <Responsive />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

