"use client"

import Image from 'next/image'
import useReveal from "./useReveal"


const connect = () => {
  const imageReveal = useReveal()
  const textReveal = useReveal()

  return (
    <div className='flex flex-col md:flex-row w-full bg-[var(--color-surface)] text-[var(--color-text)]'>
        <div ref={imageReveal.ref} className={`order-first md:order-last w-full md:w-1/2 relative h-65 md:h-162.5 lg:h-200 md:mb-0 reveal reveal--right ${imageReveal.isVisible ? "is-visible" : ""}`}>
            <Image src="/office1.jpeg" alt="Connect Image" fill className='object-cover' />
        </div>
        <div ref={textReveal.ref} className={`order-last md:order-first w-full md:w-1/2 relative flex flex-col justify-center px-6 md:px-20 py-12 min-h-[260px] md:min-h-0 reveal reveal--left ${textReveal.isVisible ? "is-visible" : ""}`}>
            <h1 className='text-3xl md:text-5xl pb-6 md:pb-10 scale-x-[1.05] font-medium tracking-tight text-[var(--color-accent)] mb-4'>
            Therapy that meets you where you are.
            </h1>

            <p className='text-lg mb-4'>
            Many adults I work with are capable and driven, yet feel overwhelmed by anxiety, stress, or constant internal pressure.
            </p>

            <p className='pt-2 md:pt-5 text-lg mb-8'>
            Therapy can offer a grounded space to slow down, understand what’s happening beneath the surface, and develop more sustainable ways of coping.
            </p>

            <button className='absolute bottom-0 left-0 right-0 w-full bg-transparent border-t border-[var(--color-accent-strong)] text-[var(--color-accent-strong)] text-center py-5 hover:bg-[color:var(--color-accent-strong)] hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out'>
            <span className='font-medium'>SCHEDULE A CONSULTATION &rarr;</span>
            </button>

        </div>
    </div>
  )
}

export default connect
