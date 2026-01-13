import SEO from '../components/SEO';

const CookiePolicy = () => {
  return (
    <>
      <SEO
        title="Cookie Policy - RDY Enterprise"
        description="RDY Enterprise Cookie Policy. Learn about how we use cookies and similar technologies on our website."
        keywords="cookie policy, cookies, tracking, analytics"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Cookie Policy
            </h1>
            
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  1. What Are Cookies?
                </h2>
                <p className="text-lg leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit 
                  a website. They are widely used to make websites work more efficiently and 
                  provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li><strong>Necessary Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver personalized advertisements and track campaign effectiveness.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  3. Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Necessary Cookies</h3>
                    <p className="text-gray-700">
                      These cookies are essential for the website to function. They enable core 
                      functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700">
                      These cookies help us understand how visitors use our website by collecting 
                      information anonymously. This helps us improve our website and user experience.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Marketing Cookies</h3>
                    <p className="text-gray-700">
                      These cookies are used to deliver relevant advertisements and track the 
                      effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  4. Managing Cookies
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Use our cookie consent banner to manage your preferences</li>
                  <li>Adjust your browser settings to refuse or delete cookies</li>
                  <li>Use browser extensions that block cookies</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  Please note that disabling certain cookies may affect the functionality of 
                  our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  5. Third-Party Cookies
                </h2>
                <p className="text-lg leading-relaxed">
                  We may use third-party services that set cookies on your device. These 
                  services help us analyze website usage and improve our services. We do not 
                  control these third-party cookies, and you should review their privacy 
                  policies for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  6. Changes to This Policy
                </h2>
                <p className="text-lg leading-relaxed">
                  We may update this Cookie Policy from time to time. We will notify you of 
                  any changes by posting the new policy on this page and updating the "Last 
                  updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  7. Contact Us
                </h2>
                <p className="text-lg leading-relaxed">
                  If you have questions about our use of cookies, please contact us at{' '}
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

export default CookiePolicy;

