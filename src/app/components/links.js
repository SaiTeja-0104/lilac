import React from 'react'

const links = () => {
  return (
    <div className='px-5 text-center md:text-left md:px-0 md:max-w-[90%] md:mx-auto flex flex-col md:items-baseline items-center justify-center md:grid md:grid-cols-5 gap-10 py-20 text-[var(--color-text)]'>
      
      {/* Practice Info */}
      <div className='col-span-3'>
        <h1 className='text-4xl md:text-5xl font-medium tracking-wide mb-10 text-[var(--color-accent)]'>
          Dr. Maya Reynolds, PsyD
        </h1>

        <div>
          <p className='text-lg'>
            123th Street 45 W
          </p>
          <p className='text-lg'>
            Santa Monica, CA 90401
          </p>
        </div>

        <div className='pt-10 font-light'>
          <p className='text-lg text-[var(--color-text-muted)]'>
            In-person sessions in Santa Monica
          </p>
          <p className='text-lg text-[var(--color-text-muted)]'>
            Secure telehealth available across California
          </p>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h1 className='text-4xl md:text-5xl font-medium tracking-wide mb-10 text-[var(--color-accent)]'>
          Availability
        </h1>
        <div>
          <p className='text-lg'>
            By appointment
          </p>
          <p className='text-lg'>
            Monday – Friday
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className='md:text-right'>
        <h1 className='text-4xl md:text-5xl font-medium tracking-wide mb-10 text-[var(--color-accent)]'>
          Explore
        </h1>
        <div className='font-light'>
          <p className='text-lg underline cursor-pointer text-[var(--color-accent)]'>
            Home
          </p>
          <p className='text-lg underline cursor-pointer text-[var(--color-accent)]'>
            Services
          </p>
          <p className='text-lg underline cursor-pointer text-[var(--color-accent)]'>
            Contact
          </p>
        </div>
      </div>

    </div>
  )
}

export default links
