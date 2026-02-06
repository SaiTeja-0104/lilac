"use client"

import Image from 'next/image'
import useReveal from "./useReveal"

const ourOffice = () => {
  const imagesReveal = useReveal()
  const textReveal = useReveal()

  return (
    <section className="min-h-screen flex justify-center bg-[var(--color-bg)] text-[var(--color-text)] py-20 px-6 md:px-0">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Images */}
        <div ref={imagesReveal.ref} className={`grid grid-cols-1 sm:grid-cols-2 gap-6 reveal reveal--left ${imagesReveal.isVisible ? "is-visible" : ""}`}>
          <div className="relative w-full h-72">
            <Image
              src="/office1.jpeg"
              alt="Therapy office with natural light in Santa Monica"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="relative w-full h-72">
            <Image
              src="/office2.jpeg"
              alt="Calm and private counseling space"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div ref={textReveal.ref} className={`reveal reveal--right ${textReveal.isVisible ? "is-visible" : ""}`}>
            <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-3">
                Our Office
            </p>
          <h1 className="text-3xl md:text-5xl font-medium tracking-wide text-[var(--color-accent)] mb-6">
            A Calm, Private Space for Healing
          </h1>

          <p className="text-lg mb-4">
            My Santa Monica office is a quiet, private space designed to feel calm and grounding from the moment you arrive.
          </p>

          <p className="text-lg mb-4">
            Natural light, comfortable seating, and an uncluttered environment help create a sense of ease and safety—allowing sessions to begin without feeling rushed or overstimulated.
          </p>

          <p className="text-lg">
            I offer in-person therapy at my Santa Monica office, as well as secure telehealth sessions for adults located throughout California.
          </p>

          <p className="text-lg mt-6 text-[var(--color-text-muted)]">
            123th Street 45 W, Santa Monica, CA 90401
          </p>
        </div>
      

      </div>
    </section>
  )
}

export default ourOffice
