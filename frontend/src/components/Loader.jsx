export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-6 animate-fade-in">
      <picture>
        <source srcSet="/logo.webp" type="image/webp" />
        <img
          src="/logo-sm.jpg"
          alt="SkyTouch"
          className="h-48 w-auto animate-scale-in"
        />
      </picture>
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
      </div>
      <span className="text-[11px] tracking-[0.2em] text-outline font-semibold animate-fade-in-delay">
        INVESTMENT & CONSULTANT PVT. LTD.
      </span>
    </div>
  )
}
