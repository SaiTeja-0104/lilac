import React from 'react'

const footer = () => {
  return (
    <div className='bg-[var(--color-surface)] px-2 pt-20 pb-10 flex flex-col text-center items-center justify-center text-[var(--color-text)] gap-10 sm:gap-6 text-sm'>
        <div className='flex flex-col sm:flex-row gap-4 text-lg font-medium '>
            <p className='underline text-[var(--color-accent)]'>Privacy & Cookies Policy</p>
            <p className='underline text-[var(--color-accent)]'>Good Faith Estimate</p>
            <p className='underline text-[var(--color-accent)]'>Website Terms & Conditions</p>
            <p className='underline text-[var(--color-accent)]'>Disclaimer</p>
        </div>
        <div className='flex flex-col text-lg sm:flex-row gap-1'>
            <p>Website Template Credits: </p>
            <p className='underline font-medium text-[var(--color-accent)]'>Go Bloom Creative</p>
        </div>
        <div className='font-medium text-lg pt-6'>
            All Rights Reserved © 2026 Your Business Name Here, LLC.
        </div>
    </div>
  )
}

export default footer
