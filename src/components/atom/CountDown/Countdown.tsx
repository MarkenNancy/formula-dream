'use client'
import { useEffect, useState } from 'react'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
})

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 21,
    minutes: 43,
    seconds: 12,
  })

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        if (seconds > 0) seconds--
        else if (minutes > 0) { minutes--; seconds = 59 }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59 }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59 }
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [])

  return (
    <div className="text-white text-center px-4">
      <h2 className={`${orbitron.className} text-2xl md:text-4xl font-bold uppercase text-[#ff6600] my-6`}>
        PHASE 1 LAUNCH
      </h2>
      <div className="flex flex-nowrap justify-center gap-4 sm:gap-6">
        {['days', 'hours', 'minutes', 'seconds'].map((label) => (
          <div
            key={label}
            className="w-[80px] sm:w-[100px] md:w-[120px] h-auto rounded-md bg-black/30 backdrop-blur flex flex-col justify-center items-center py-4"
          >
            <div className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold leading-none bg-gradient-to-b from-[#FFB561] to-[#000000] bg-clip-text text-transparent">
              {(timeLeft as never)[label]}
            </div>
            <div className="text-sm sm:text-base md:text-lg text-[#FFC187] uppercase mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
