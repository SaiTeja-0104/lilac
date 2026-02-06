"use client"

import Image from 'next/image'
import useReveal from "./useReveal"

const collaborate = () => {
  const imageReveal = useReveal()
  const textReveal = useReveal()

  return (
    <div className='bg-[var(--color-bg)] flex flex-col md:flex-row md:items-stretch w-full text-[var(--color-text)]'>
         <div ref={imageReveal.ref} className={`order-first w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto md:h-auto self-stretch overflow-hidden reveal reveal--left ${imageReveal.isVisible ? "is-visible" : ""}`}>
            <Image src="/collaborate.jpg" alt="Collaborate Image" fill className='object-cover' />
        </div>
        <div ref={textReveal.ref} className={`order-last md:order-first w-full md:w-1/2  pt-12 min-h-[260px] grid grid-rows-[1fr_auto] reveal reveal--right ${textReveal.isVisible ? "is-visible" : ""}`}>
            <div className='flex flex-col justify-center md:px-20 px-8'>
                <h1 className='pt-4 md:pt-10 text-left pb-4 md:pb-5 text-3xl md:text-5xl scale-x-[1.05] font-medium tracking-wider text-[var(--color-accent)] mb-4'>
                    You may look fine on the outside, but feel overwhelmed inside.
                </h1>

                <p className='text-lg mb-6 md:mb-15'>
                    Many of the adults I work with are thoughtful, capable, and high-achieving, yet quietly struggle with:
                </p>

                <ul className='list-disc px-6 md:px-10'>
                    <li className='pb-2 md:pb-3 text-lg'>Persistent anxiety or overthinking</li>
                    <li className='pb-2 md:pb-3 text-lg'>Feeling constantly tense, on edge, or emotionally exhausted</li>
                    <li className='pb-2 md:pb-3 text-lg'>Difficulty resting, sleeping, or slowing down</li>
                    <li className='pb-2 md:pb-3 text-lg'>Burnout or a sense of always pushing through</li>
                </ul>

                <p className='mt-6 md:mt-20 text-lg'>
                Therapy can be a space to slow down, understand what’s happening beneath the surface, and develop more sustainable ways of living and working.
                </p>
            </div>
            <button className='mt-10 w-full bg-transparent border-t border-[var(--color-accent-strong)] text-[var(--color-accent-strong)] text-center py-5 hover:bg-[color:var(--color-accent-strong)] hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out'>
                <span className='font-medium'>SCHEDULE A CONSULTATION &rarr;</span>
            </button>
        </div>
    </div>
  )
}

export default collaborate
