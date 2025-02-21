'use client'

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Responsive } from "@/utils"

export default function FAQ() {
  const t = useTranslations("faq") // Get the translations for the FAQ section
  const faqData = [
    {
      question: t("items.0.question"),
      answer: t("items.0.answer"),
    },
    {
      question: t("items.1.question"),
      answer: t("items.1.answer"),
    },
    {
      question: t("items.2.question"),
      answer: t("items.2.answer"),
    },
    {
      question: t("items.3.question"),
      answer: t("items.3.answer"),
    },
    {
      question: t("items.4.question"),
      answer: t("items.4.answer"),
    }
  ]

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
            {t("title")}
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
