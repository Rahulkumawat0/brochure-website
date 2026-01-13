import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Compliance = () => {
  const complianceAreas = [
    {
      title: 'Export Compliance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'We adhere to all applicable international trade regulations, customs requirements, and export control laws in the countries where we operate.',
    },
    {
      title: 'Privacy & Security',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      description: 'We implement appropriate technical and organizational measures to protect personal information and ensure secure data transmission.',
    },
    {
      title: 'Ethical Trading',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      description: 'We work with suppliers who share our commitment to quality, compliance, and ethical business conduct.',
    },
  ];

  return (
    <>
      <SEO
        title="Compliance - RDY Enterprise"
        description="Learn about RDY Enterprise's commitment to export compliance, privacy, security, and ethical trading practices."
        keywords="compliance, export compliance, privacy, security, ethical trading, regulations"
      />
      
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Compliance & Ethics
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our commitment to maintaining the highest standards in global trade
              </p>
            </div>

            <div className="space-y-8 mb-12">
              {complianceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-200 card-hover"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {area.title}
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 rounded-xl border border-blue-200 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Export Compliance Details
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                RDY Enterprise is committed to maintaining the highest standards of export 
                compliance. We adhere to all applicable international trade regulations, 
                customs requirements, and export control laws in the countries where we 
                operate. Our documentation processes are designed to ensure full compliance 
                with import/export regulations across all our target markets.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We work diligently to ensure that all shipments are properly documented, 
                classified, and declared in accordance with relevant trade agreements and 
                regulatory frameworks. Our team stays updated on regulatory changes and 
                maintains compliance protocols that meet or exceed industry standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy & Security
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We take data privacy and security seriously. All data collection and 
                processing activities are conducted in accordance with applicable privacy 
                laws and regulations. We implement appropriate technical and organizational 
                measures to protect personal information and ensure secure data transmission.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our website uses encryption (SSL/TLS) to protect data in transit, and we 
                maintain strict access controls to protect sensitive information. We collect 
                only the minimum necessary data required for business operations and inquiry 
                processing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ethical Trading
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                RDY Enterprise is committed to ethical trading practices. We work with 
                suppliers who share our commitment to quality, compliance, and ethical 
                business conduct. We do not engage in or support any form of illegal trade, 
                and we maintain transparency in our business relationships while respecting 
                confidentiality requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:p-10 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Legal Documentation
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                For detailed information about our policies and practices, please review our 
                legal pages:
              </p>
              <ul className="space-y-3">
                {[
                  { path: '/privacy-policy', label: 'Privacy Policy' },
                  { path: '/cookie-policy', label: 'Cookie Policy' },
                  { path: '/terms-of-use', label: 'Terms of Use' },
                  { path: '/accessibility', label: 'Accessibility Statement' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white hover:text-blue-100 transition-colors inline-flex items-center gap-2 text-lg font-medium"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-md text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Questions About Compliance?
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                If you have questions about our compliance practices or need specific 
                documentation, please contact us through our inquiry form.
              </p>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Compliance;
