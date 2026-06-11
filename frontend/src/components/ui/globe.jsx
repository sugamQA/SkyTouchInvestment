import { useState, useEffect } from 'react'

const Globe = ({ className = '' }) => {
  const [nepalTime, setNepalTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const nepal = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }))
      setNepalTime(nepal.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: 400px 0; }
          }
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
        `}
      </style>
      <div className={`relative flex items-center justify-center ${className}`}>
        <div
          className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full overflow-hidden shadow-[0_0_28px_rgba(255,255,255,0.22),-7px_0_10px_#c3f4ff_inset,18px_3px_28px_#000_inset,-28px_-2px_38px_#c3f4ff99_inset,300px_0_48px_#00000066_inset,180px_0_42px_#000000aa_inset]"
          style={{
            backgroundImage: "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            animation: 'earthRotate 30s linear infinite',
          }}
        >
          <div
            className="absolute left-[-20px] w-1 h-1 bg-white rounded-full"
            style={{ animation: 'twinkling 3s infinite' }}
          />
          <div
            className="absolute left-[-40px] top-[30px] w-1 h-1 bg-white rounded-full"
            style={{ animation: 'twinkling-slow 2s infinite' }}
          />
          <div
            className="absolute left-[350px] top-[90px] w-1 h-1 bg-white rounded-full"
            style={{ animation: 'twinkling-long 4s infinite' }}
          />
          <div
            className="absolute left-[200px] top-[290px] w-1 h-1 bg-white rounded-full"
            style={{ animation: 'twinkling 3s infinite' }}
          />
          <div
            className="absolute left-[50px] top-[270px] w-1 h-1 bg-white rounded-full"
            style={{ animation: 'twinkling-fast 1.5s infinite' }}
          />
          <div
            className="absolute left-[250px] top-[-50px] w-1 h-1 bg-white rounded-full"
            style={{ animation: 'twinkling-long 4s infinite' }}
          />
          <div
            className="absolute left-[290px] top-[60px] w-1 h-1 bg-white rounded-full"
            style={{ animation: 'twinkling-slow 2s infinite' }}
          />

          <div className="absolute left-[58%] top-[46%] z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
            </span>
            <span className="mt-1 rounded-full border border-red-400/40 bg-black/60 px-2 py-0.5 text-[9px] font-semibold tracking-[0.18em] text-red-300 backdrop-blur-sm">
              Nepal
            </span>
            {nepalTime && (
              <span className="mt-0.5 rounded-full bg-black/60 px-1.5 py-0.5 text-[9px] font-mono font-semibold tracking-wider text-emerald-400 backdrop-blur-sm">
                {nepalTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Globe