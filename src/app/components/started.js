"use client"

import React from 'react'
import useReveal from "./useReveal"

const started = () => {
  const contentReveal = useReveal()

  return (
    <div className='bg-[color:var(--color-accent)]/10 flex flex-col items-center justify-center text-[var(--color-text)] py-18 px-10 md:px-0'>
      <div ref={contentReveal.ref} className={`flex flex-col items-center reveal reveal--up ${contentReveal.isVisible ? "is-visible" : ""}`}>
        <h1 className='text-3xl md:text-5xl tracking-wide font-medium text-center py-10 text-[var(--color-accent)]'>
          Begin therapy at your own pace.
        </h1>

        <p className='text-center text-sm md:text-lg pb-2'>
          Reaching out for support can feel like a big step.
        </p>

        <p className='text-center text-sm md:text-lg pb-2'>
          A consultation offers a chance to see whether working together feels like a good fit.
        </p>

        <p className='text-center text-sm md:text-lg pb-10'>
          I offer in-person sessions in Santa Monica and secure telehealth across California.
        </p>

        <button className='bg-transparent mt-5 px-3 py-3 border border-[var(--color-accent-strong)] text-[var(--color-accent-strong)] hover:bg-[color:var(--color-accent-strong)] hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer font-medium'>
          SCHEDULE A CONSULTATION &rarr;
        </button>
      </div>
    </div>
  )
}

export default started
