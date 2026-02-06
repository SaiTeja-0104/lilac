"use client"

import Box from "./box"
import useReveal from "./useReveal"

const speciality = () => {
  const headingReveal = useReveal()
  const gridReveal = useReveal()

  return (
    <section className="py-22 max-w-[90%] mx-auto">
        <h1 ref={headingReveal.ref} className={`text-center text-5xl scale-x-[1.05] font-medium tracking-tight text-[var(--color-accent)] reveal reveal--up ${headingReveal.isVisible ? "is-visible" : ""}`}>My Specialities</h1>
        <div ref={gridReveal.ref} className={`pt-20 grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal--up ${gridReveal.isVisible ? "is-visible" : ""}`}>
            <Box num={0} />
            <Box num={1} />
            <Box num={2} />            
        </div>
    </section>
  )
}

export default speciality
