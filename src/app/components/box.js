"use client"

import Image from 'next/image'


const box = ({num}) => {
    const titles = ["Anxiety & Panic", "Trauma & EMDR", "Burnout & High-Pressure Professionals"];
    const image = ["/anxiety.jpg", "/trauma.webp", "/burnout.jpg"];
    const descriptions = [
        "Support for chronic anxiety, panic, and overthinking. We’ll focus on understanding both the emotional and physical patterns that keep anxiety active, helping you feel more regulated and grounded in daily life.",
        "Trauma-informed therapy for adults impacted by single-incident or long-standing experiences. Sessions are paced carefully, emphasizing safety, stabilization, and nervous system regulation using EMDR and body-based approaches.",
        "Therapy for professionals, creatives, and high-achieving adults experiencing burnout or constant internal pressure. A space to slow down, reconnect, and develop more sustainable ways of living and working."
    ];

  return (
    <div className="border bg-[var(--color-surface)] w-full mx-auto flex flex-col">
        <h1 className="p-5 text-xl font-medium text-[var(--color-accent)]">{titles[num]}</h1>
        <p className="pl-5 pr-3 text-sm pb-10 pt-5 text-[var(--color-text)]">{descriptions[num]}</p>
        <div className="relative w-75 h-75 mb-3 mx-auto mt-10">
            <Image src={image[num]} alt={image[num]} fill className={`object-center object-cover rounded-full`}/>
        </div>
    </div>
  )
}

export default box
