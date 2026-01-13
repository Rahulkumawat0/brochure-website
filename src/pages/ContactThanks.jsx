import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const ContactThanks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state || {};

  // Redirect to contact page if accessed directly without form submission
  useEffect(() => {
    if (!name && !email) {
      navigate('/contact');
    }
  }, [name, email, navigate]);

  return (
    <>
      <SEO
        title="Thank You - RDY Enterprise"
        description="Thank you for contacting RDY Enterprise. We'll get back to you soon."
        keywords="thank you, contact confirmation"
      />
      
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Thank You!
            </h1>
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                {name ? (
                  <>
                    Thank you, <span className="font-semibold text-gray-900">{name}</span>, for contacting RDY Enterprise.
                  </>
                ) : (
                  'Thank you for contacting RDY Enterprise.'
                )}
              </p>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We've successfully received your inquiry and our team will review it shortly.
              </p>

              {email && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Confirmation sent to:</span>
                  </p>
                  <p className="text-blue-600 font-medium">{email}</p>
                </div>
              )}

              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Our team will review your inquiry within 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>We'll respond to your email with detailed information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>If urgent, you can reach us at inquiries@rdyenterprise.com</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary text-lg px-8 py-4">
                Return to Home
              </Link>
              <Link to="/products" className="btn-secondary text-lg px-8 py-4">
                Explore Products
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Need immediate assistance?
              </p>
              <a
                href="mailto:inquiries@rdyenterprise.com"
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                inquiries@rdyenterprise.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactThanks;

