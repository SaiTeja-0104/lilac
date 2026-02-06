'use client'

import Image from 'next/image'
import { useState } from 'react'
import useReveal from "./useReveal"

const faq = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const imageReveal = useReveal()
  const textReveal = useReveal()

  const faqs = [
  {
    question: 'Who do you work with?',
    answer:
      'I work with adults who are experiencing anxiety, panic, trauma, burnout, or ongoing stress. Many of the clients I support are thoughtful, high-achieving professionals or creatives who feel overwhelmed or emotionally exhausted despite appearing “functional” on the outside.'
  },
  {
    question: 'Do you offer in-person or online therapy?',
    answer:
      'Yes. I offer in-person therapy at my Santa Monica office, as well as secure telehealth sessions for adults located anywhere in California.'
  },
  {
    question: 'What is your approach to trauma therapy?',
    answer:
      'Trauma work is approached carefully and collaboratively, with a strong emphasis on safety and pacing. I integrate EMDR and body-oriented techniques to support nervous system regulation and help clients feel more grounded in their daily lives.'
  },
  {
    question: 'What can I expect in a therapy session?',
    answer:
      'Sessions are structured enough to feel supportive while still leaving space for reflection and depth. We’ll work together to understand both the emotional and physical aspects of what you’re experiencing and develop tools that feel practical and sustainable.'
  },
  {
    question: 'How do I know if this is the right fit?',
    answer:
      'It’s normal to feel unsure. A consultation can help you get a sense of whether my approach aligns with what you’re looking for and whether working together feels like a good fit.'
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center justify-center text-[var(--color-text)] max-w-[90%] mx-auto  gap-10 md:gap-15 px-10 md:px-0 py-20'>
        <div ref={imageReveal.ref} className={`reveal reveal--left ${imageReveal.isVisible ? "is-visible" : ""}`}>
            <Image src="/desk.jpg" alt="FAQ Image" width={450} height={500} className='object-cover rounded-t-full' />
        </div>
        <div ref={textReveal.ref} className={`w-full md:w-[50%] reveal reveal--right ${textReveal.isVisible ? "is-visible" : ""}`}>
            <h1 className="text-5xl font-medium tracking-wide mb-10 text-[var(--color-accent)]">FAQs</h1>
            <div>
                {faqs.map((faq, index) => (
                  <div key={index} className={`${index === 0 ? 'border-t' : ''} border-b border-[var(--color-text)]`}>
                    <button
                      onClick={() => toggleFAQ(index)}
                      className='w-full flex items-center gap-4 py-4 cursor-pointer transition-colors duration-300 text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]'
                    >
                      <span className='text-3xl font-light shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300'>
                        {openIndex === index ? '−' : '+'}
                      </span>
                      <span className='text-left text-xl md:text-3xl font-medium'>{faq.question}</span>
                    </button>
                    {openIndex === index && (
                      <div className='px-4 pb-4 text-[var(--color-text-muted)]'>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default faq
