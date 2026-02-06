"use client"

import Image from 'next/image'
import useReveal from "./useReveal"

const hero = () => {
  const imageReveal = useReveal()
  const textReveal = useReveal()

  return (
    <div className=" pt-6 pb-15 md:py-12 lg:pt-16 lg:pb-0 px-4 md:px-6 lg:px-10 md:max-w-[95%] lg:max-w-[90%] md:mx-auto flex flex-col items-center md:flex-row md:justify-start gap-6 md:gap-18 lg:gap-28">
      <div ref={imageReveal.ref} className={`reveal reveal--left ${imageReveal.isVisible ? "is-visible" : ""}`}>
        <Image src="/dr_maya_reynolds.png" alt="Hero Image" width={580} height={330} sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 580px" className='rounded-t-full w-[260px] sm:w-[300px] md:w-[380px] lg:w-[580px] h-auto flex-shrink-0' />
      </div>
      <div ref={textReveal.ref} className={`text-center flex flex-col items-center gap-4 reveal reveal--right ${textReveal.isVisible ? "is-visible" : ""}`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--color-accent)]">Anxiety & Trauma Therapy</h1>
        <h1 className="text-xl sm:text-2xl md:text-4xl  font-medium tracking-tight text-[var(--color-accent)]">in Santa Monica, CA</h1>
        <p className='text-[var(--color-text-muted)] text-xs sm:text-sm md:text-base lg:text-md mt-1 md:mt-4'>Grounded, evidence-based therapy for adults navigating anxiety, trauma, and burnout.</p>
        <div className="w-full flex justify-center">
          <button className="bg-transparent text-[var(--color-accent-strong)] mt-4 md:mt-6 px-5 sm:px-6 py-2 sm:py-3 border cursor-pointer border-[var(--color-accent-strong)] hover:bg-[color:var(--color-accent-strong)] hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out font-medium text-sm sm:text-base">
              SCHEDULE A CONSULTATION &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}

export default hero
