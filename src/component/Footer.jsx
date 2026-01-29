import { Link, useLocation } from 'react-router-dom';
import duesoon from '/src/assets/duesoonlogo.png';

export default function Footer() {
  const location = useLocation();

  const handleAnchor = (event, hash) => {
    if (location.pathname !== "/") {
      return;
    }
    event.preventDefault();
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.history.replaceState(null, "", hash);
  };

  return (
    <footer className="section border-t relative z-20 ">
      <div className="max-w-6xl mx-10 md:mx-auto px-6 py-16 grid grid-cols-2 gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className='max-w-xs'>
          
          <img src={duesoon} alt="" srcset="" className='h-8 w-auto object-contain' />
          
          <p className="mt-4 text-sm text-gray-600">
            Get paid on time, automatically, without chasing clients or sending awkward reminders.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-bold mb-4">PRODUCT</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                to="/#howitworks"
                className="hover:text-gray-900 cursor-pointer"
                onClick={(event) => handleAnchor(event, "#howitworks")}
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                to="/#whychooseus"
                className="hover:text-gray-900 cursor-pointer"
                onClick={(event) => handleAnchor(event, "#whychooseus")}
              >
                Why DueSoon
              </Link>
            </li>
            <li>
              <Link
                to="/#pricing"
                className="hover:text-gray-900 cursor-pointer"
                onClick={(event) => handleAnchor(event, "#pricing")}
              >
                Security
              </Link>
            </li>
            <li>
              <Link
                to="/#pricing"
                className="hover:text-gray-900 cursor-pointer"
                onClick={(event) => handleAnchor(event, "#pricing")}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-4">SUPPORT</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
            <li>
              <Link
                to="/#faqs"
                className="hover:text-gray-900 cursor-pointer"
                onClick={(event) => handleAnchor(event, "#faqs")}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-4">LEGAL</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gray-900">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DueSoon. All rights reserved To DueSoon.
      </div>
    </footer>
  );
}
