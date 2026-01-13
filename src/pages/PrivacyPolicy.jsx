import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - RDY Enterprise"
        description="RDY Enterprise Privacy Policy. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  1. Introduction
                </h2>
                <p className="text-lg leading-relaxed">
                  RDY Enterprise ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Name and contact information (email address, company name)</li>
                  <li>Country/region information</li>
                  <li>Messages and inquiries you submit through our contact form</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  We also automatically collect certain information when you visit our website, 
                  such as IP address, browser type, device information, and usage data through 
                  analytics tools (with your consent).
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our products and services</li>
                  <li>Improve our website and user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-lg leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
                  <li>With service providers who assist us in operating our website and conducting business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  5. Data Security
                </h2>
                <p className="text-lg leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information. We use encryption (SSL/TLS) for data transmission and 
                  maintain strict access controls. However, no method of transmission over the 
                  internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  6. Your Rights
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to processing of your information</li>
                  <li>Data portability</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  To exercise these rights, please contact us at inquiries@rdyenterprise.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  7. Cookies
                </h2>
                <p className="text-lg leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience. 
                  For more information, please see our{' '}
                  <a href="/cookie-policy" className="text-blue-600 hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-lg leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new policy on this page and updating the "Last 
                  updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  9. Contact Us
                </h2>
                <p className="text-lg leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:inquiries@rdyenterprise.com" className="text-blue-600 hover:underline">
                    inquiries@rdyenterprise.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;

