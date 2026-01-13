import SEO from '../components/SEO';

const TermsOfUse = () => {
  return (
    <>
      <SEO
        title="Terms of Use - RDY Enterprise"
        description="RDY Enterprise Terms of Use. Read our terms and conditions for using our website and services."
        keywords="terms of use, terms and conditions, legal terms"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Terms of Use
            </h1>
            
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-lg leading-relaxed">
                  By accessing and using the RDY Enterprise website, you accept and agree to 
                  be bound by these Terms of Use. If you do not agree to these terms, please 
                  do not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  2. Use of Website
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  You agree to use our website only for lawful purposes and in a way that does 
                  not infringe the rights of others or restrict their use of the website. You 
                  agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                  <li>Use automated systems to access the website without permission</li>
                  <li>Copy, modify, or distribute website content without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  3. Intellectual Property
                </h2>
                <p className="text-lg leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is 
                  the property of RDY Enterprise or its content suppliers and is protected by 
                  copyright and other intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  4. Disclaimer of Warranties
                </h2>
                <p className="text-lg leading-relaxed">
                  The information on this website is provided "as is" without warranties of any 
                  kind, either express or implied. We do not warrant that the website will be 
                  uninterrupted, error-free, or free from viruses or other harmful components.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  5. Limitation of Liability
                </h2>
                <p className="text-lg leading-relaxed">
                  To the fullest extent permitted by law, RDY Enterprise shall not be liable for 
                  any indirect, incidental, special, consequential, or punitive damages arising 
                  from your use of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  6. Links to Third-Party Websites
                </h2>
                <p className="text-lg leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible 
                  for the content or practices of these external sites. Your use of third-party 
                  websites is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  7. Privacy
                </h2>
                <p className="text-lg leading-relaxed">
                  Your use of our website is also governed by our{' '}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  . Please review it to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  8. Changes to Terms
                </h2>
                <p className="text-lg leading-relaxed">
                  We reserve the right to modify these Terms of Use at any time. Changes will 
                  be effective immediately upon posting. Your continued use of the website 
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  9. Governing Law
                </h2>
                <p className="text-lg leading-relaxed">
                  These Terms of Use shall be governed by and construed in accordance with 
                  applicable laws, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  10. Contact Us
                </h2>
                <p className="text-lg leading-relaxed">
                  If you have questions about these Terms of Use, please contact us at{' '}
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

export default TermsOfUse;

