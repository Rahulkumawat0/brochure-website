import SEO from '../components/SEO';

const Accessibility = () => {
  return (
    <>
      <SEO
        title="Accessibility Statement - RDY Enterprise"
        description="RDY Enterprise Accessibility Statement. Our commitment to making our website accessible to all users."
        keywords="accessibility, WCAG, accessible website, disability access"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Accessibility Statement
            </h1>
            
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Our Commitment
                </h2>
                <p className="text-lg leading-relaxed">
                  RDY Enterprise is committed to ensuring digital accessibility for people with 
                  disabilities. We are continually improving the user experience for everyone 
                  and applying the relevant accessibility standards to achieve these goals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Standards
                </h2>
                <p className="text-lg leading-relaxed">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                  Level AA standards. These guidelines explain how to make web content more 
                  accessible for people with disabilities and user-friendly for everyone.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Measures We've Taken
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  To ensure accessibility, we have implemented the following measures:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Semantic HTML structure with proper heading hierarchy</li>
                  <li>Alternative text for images and visual content</li>
                  <li>Keyboard navigation support throughout the website</li>
                  <li>Sufficient color contrast ratios for text readability</li>
                  <li>Focus indicators for interactive elements</li>
                  <li>ARIA landmarks and labels where appropriate</li>
                  <li>Responsive design that works on various devices and screen sizes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Known Issues
                </h2>
                <p className="text-lg leading-relaxed">
                  We are aware that some parts of our website may not be fully accessible. 
                  We are working to address these issues and improve accessibility. If you 
                  encounter any accessibility barriers, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Feedback
                </h2>
                <p className="text-lg leading-relaxed">
                  We welcome your feedback on the accessibility of our website. If you 
                  encounter accessibility barriers or have suggestions for improvement, 
                  please contact us at{' '}
                  <a href="mailto:inquiries@rdyenterprise.com" className="text-blue-600 hover:underline">
                    inquiries@rdyenterprise.com
                  </a>
                  . We will respond to your inquiry within a reasonable timeframe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Third-Party Content
                </h2>
                <p className="text-lg leading-relaxed">
                  Some content on our website may be provided by third parties. We cannot 
                  guarantee the accessibility of third-party content, but we work with our 
                  partners to ensure accessibility standards are met where possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Ongoing Efforts
                </h2>
                <p className="text-lg leading-relaxed">
                  Accessibility is an ongoing effort. We regularly review and update our 
                  website to improve accessibility and ensure compliance with current 
                  standards. We conduct accessibility audits and user testing to identify 
                  and address issues.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Contact Us
                </h2>
                <p className="text-lg leading-relaxed">
                  If you have questions or concerns about accessibility on our website, 
                  please contact us at{' '}
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

export default Accessibility;

