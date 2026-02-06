"use client"

import Image from 'next/image'
import useReveal from "./useReveal"

const profile = () => {
  const textReveal = useReveal()
  const imageReveal = useReveal()

  return (
    <section className="bg-[var(--color-surface)] text-[var(--color-text)] min-h-screen flex flex-col md:flex-row items-center md:justify-center py-20">
      
      {/* Text Content */}
      <div ref={textReveal.ref} className={`order-last md:order-first w-full md:w-2/5 px-6 md:px-10 lg:px-16 flex flex-col reveal reveal--left ${textReveal.isVisible ? "is-visible" : ""}`}>
        <h1 className="text-3xl md:text-5xl pt-10 md:pt-0 font-medium tracking-wide text-[var(--color-accent)]">
          Meet Dr. Maya Reynolds, PsyD
        </h1>

        <p className='text-base md:text-lg pt-6 md:pt-10 max-w-prose'>
          I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, trauma, or burnout. Many of the people I work with are thoughtful and high-achieving, yet feel internally exhausted or emotionally on edge.
        </p>

        <p className='text-base md:text-lg pt-4 max-w-prose'>
          My approach is warm, collaborative, and grounded. I integrate evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help clients feel more regulated and connected in their daily lives.
        </p>

        <div className='mt-8 md:mt-10 flex justify-center'>
          <button className="bg-transparent px-6 py-3 mt-4 border border-[var(--color-accent-strong)] text-[var(--color-accent-strong)] hover:bg-[color:var(--color-accent-strong)] hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer font-medium">
            SCHEDULE A CONSULTATION &rarr;
          </button>
        </div>
      </div>

      {/* Images */}
      <div ref={imageReveal.ref} className={`order-first md:order-last w-full md:w-auto max-w-95 px-8 md:px-0 reveal reveal--right ${imageReveal.isVisible ? "is-visible" : ""}`}>
        <div className='relative w-full'>
          <Image
            src="/Dr_Maya_Reynolds.png"
            alt="Dr. Maya Reynolds, Clinical Psychologist"
            width={360}
            height={300}
            sizes="(max-width: 768px) 100vw, 360px"
            className='object-cover rounded-t-full w-full h-auto'
          />

          <div className='absolute -bottom-3 -right-3 md:-bottom-16 md:-right-16 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 z-10'>
            <Image
              src="/office1.jpeg"
              alt="Santa Monica therapy office detail"
              fill
              className='object-cover rounded-full'
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default profile
