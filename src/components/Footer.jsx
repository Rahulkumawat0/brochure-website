import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { path: '/privacy-policy', label: 'Privacy Policy' },
    { path: '/cookie-policy', label: 'Cookie Policy' },
    { path: '/terms-of-use', label: 'Terms of Use' },
    { path: '/accessibility', label: 'Accessibility' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-semibold mb-4 tracking-[0.02em]">
              RDY Enterprise
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Global Trading & Exports. Trusted sourcing from Asia. Delivering to EU, USA, Australia, SEA, and across Asia.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:inquiries@rdyenterprise.com" className="hover:text-white transition-colors">
                inquiries@rdyenterprise.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/markets" className="hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  Markets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-white transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} RDY Enterprise. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with trust and transparency
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
