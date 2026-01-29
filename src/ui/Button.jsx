export default function Button({ children, className = "", type = "button", ...props}) {
  return (
    <button type={type} className={`bg-[#1e1e1e] text-white px-4 py-3 rounded-xl font-medium transition hover:opacity-90 active:scale-[0.98] ${className}`} {...props}>
      {children}
    </button>
  )
}
