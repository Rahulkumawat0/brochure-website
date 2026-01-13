import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="About Us - RDY Enterprise"
        description="Learn about RDY Enterprise, a global trading and export firm specializing in sourcing from Asia and delivering to markets worldwide."
        keywords="about, trading company, export, global trade, Asia sourcing"
      />
      
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About RDY Enterprise
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-200">
                <p className="text-xl leading-relaxed mb-6">
                  RDY Enterprise is a global trading and export firm with a strong focus on sourcing 
                  high-quality products from India and China. We specialize in connecting Asian 
                  manufacturers with buyers across the European Union, United States, Australia, 
                  South-East Asia, and wider Asia (excluding China).
                </p>
                
                <p className="text-xl leading-relaxed">
                  Our mission is to facilitate international trade by providing reliable sourcing 
                  solutions, maintaining strict quality standards, and ensuring comprehensive 
                  documentation compliance. We work with a diverse range of product categories 
                  including automobile parts, textiles, tea and coffee, pharmaceuticals, and fresh 
                  vegetables, always prioritizing quality, documentation discipline, and on-time 
                  delivery.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 rounded-xl border border-blue-200 shadow-md">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Capabilities
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    With extensive experience in international trade, we have developed robust 
                    capabilities in supply chain management, quality assurance, and export compliance. 
                    Our team understands the complexities of cross-border trade and works diligently 
                    to ensure smooth transactions for our clients.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We maintain strong relationships with suppliers across Asia and have established 
                    logistics networks that enable efficient delivery to our target markets. Our 
                    commitment to excellence and customer satisfaction drives everything we do.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 md:p-10 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-xl md:text-2xl italic leading-relaxed">
                      "Building trust through quality, reliability, and transparency in global trade."
                    </p>
                    <p className="text-blue-100 mt-4 text-sm">— RDY Enterprise Mission</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
