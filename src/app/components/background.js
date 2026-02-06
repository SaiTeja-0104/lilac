'use client'

import React, { useState } from 'react'
import useReveal from "./useReveal"

const background = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const contentReveal = useReveal()

  const sections = [
  {
    title: 'Education & Training',
    items: [
      'Doctor of Psychology (PsyD)',
      'Advanced clinical training in anxiety, trauma, and stress-related disorders',
      'Ongoing professional development in evidence-based therapy approaches'
    ]
  },
  {
    title: 'Licensure',
    items: [
      'Licensed Clinical Psychologist',
      'Licensed to practice in California'
    ]
  },
  {
    title: 'Clinical Approach',
    items: [
      'Cognitive Behavioral Therapy (CBT)',
      'Eye Movement Desensitization and Reprocessing (EMDR)',
      'Mindfulness-based and body-oriented techniques'
    ]
  }
];


  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='flex flex-col items-center justify-center text-[var(--color-text)] bg-[var(--color-hover)] gap-10 md:gap-15 px-10 md:px-0 py-20'>
        <div ref={contentReveal.ref} className={`w-full flex flex-col items-center gap-10 md:gap-15 reveal reveal--up ${contentReveal.isVisible ? "is-visible" : ""}`}>
          <h1 className="text-4xl text-[var(--color-accent)] font-medium tracking-wide">My Professional Background</h1>
          <div className='w-full md:w-[60%]'>
          {sections.map((section, index) => (
            <div key={index} className={`border-b border-[var(--color-text)] ${index === 0 ? 'border-t' : ''}`}>
              <button
                onClick={() => toggleSection(index)}
                className='w-full flex items-center gap-4 py-4 cursor-pointer transition-colors duration-300 text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]'
              >
                <span className='text-left text-xl md:text-2xl  flex-1'>{section.title}</span>
                <span className='text-3xl font-light shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300'>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className='px-4 pb-4 text-[var(--color-text-muted)]'>
                  <ul className='list-disc list-inside space-y-2'>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
    </section>
  )
}

export default background
