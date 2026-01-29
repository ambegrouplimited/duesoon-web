import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import duesoon from '/src/assets/duesoonlogo.png';
import { IoMenuOutline, IoClose } from "react-icons/io5";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Why Choose Us", to: "/#whychooseus" },
  { label: "How it works", to: "/#howitworks" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Download", to: "/#download" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollToHash = (hash) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (event, hash) => {
    if (!hash || location.pathname !== "/") {
      setOpen(false);
      return;
    }
    event.preventDefault();
    setOpen(false);
    scrollToHash(hash);
    window.history.replaceState(null, "", hash);
  };

  return (
    <header className=" section shadow-md fixed top-0 w-full z-50 inset-x-0 bg-white/45 backdrop-blur-lg px-10">
      <div className="flex items-center justify-between h-24 mx-6">
        {/* Logo */}
        <Link to="/"><img src={duesoon} alt="DueSoon" className="h-8 w-auto relative right-10" /></Link>
        

        {/* Desktop Nav */}
         <div className="hidden lg:flex items-center justify-between gap-10">
            <nav className="hidden lg:flex gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className="cursor-pointer"
                to={item.to}
                onClick={(event) => handleNavClick(event, item.to.startsWith("/#") ? item.to.replace("/", "") : null)}
              >
                {item.label}
              </Link>
            ))}
            </nav>
          
            <Link to="/contact" className="btn-primary hidden md:block cursor-pointer text-center">
              Contact Us
            </Link>
          </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)} className="lg:hidden left-9 relative text-2xl cursor-pointer"  aria-label="Toggle menu"> {open ? <IoClose /> : <IoMenuOutline />}
        </button>
      </div>

      
      {/* Mobile Nav */}
        <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-out
                ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
            `}
            >
            <div className="border-t bg-white/45">
                <nav className="flex flex-col gap-4 px-6 py-6 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={(event) => handleNavClick(event, item.to.startsWith("/#") ? item.to.replace("/", "") : null)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link to="/contact" className="btn-primary mt-4 w-32 h-10 text-center" onClick={() => setOpen(false)}>
                    Contact Us
                </Link>
                </nav>
            </div>
        </div>

    </header>
  )
}
