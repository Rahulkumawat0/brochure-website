import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Markets = () => {
  const markets = [
    {
      region: 'European Union (EU)',
      description: 'We serve markets across the European Union with established trade relationships and compliance expertise. Our products meet EU standards and regulatory requirements.',
      flag: '🇪🇺',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      region: 'United States (USA)',
      description: 'Our exports to the United States are handled with full compliance to US import regulations. We ensure all documentation and quality standards meet US market requirements.',
      flag: '🇺🇸',
      color: 'from-red-50 to-red-100',
      borderColor: 'border-red-200',
    },
    {
      region: 'Australia',
      description: 'We have a strong presence in the Australian market, delivering quality products with appropriate documentation and compliance with Australian import regulations.',
      flag: '🇦🇺',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
    },
    {
      region: 'South-East Asia (SEA)',
      description: 'Our proximity and understanding of South-East Asian markets enable efficient trade relationships. We serve multiple countries across the region.',
      flag: '🇸🇬',
      color: 'from-yellow-50 to-yellow-100',
      borderColor: 'border-yellow-200',
    },
    {
      region: 'Asia (ex-China)',
      description: 'Beyond China, we serve various Asian markets with our sourcing expertise and established logistics networks across the continent.',
      flag: '🌏',
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <>
      <SEO
        title="Markets We Serve - RDY Enterprise"
        description="RDY Enterprise delivers to EU, USA, Australia, South-East Asia, and wider Asia. Learn about our global market presence."
        keywords="markets, EU, USA, Australia, South-East Asia, Asia, global markets, export markets"
      />
      
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Markets We Serve
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We deliver products from Asia to key markets worldwide, maintaining compliance 
                and quality standards across all regions.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {markets.map((market, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${market.color} p-8 md:p-10 rounded-xl border-2 ${market.borderColor} card-hover group`}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform flex-shrink-0">
                      {market.flag}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {market.region}
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {market.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Reach Visualization */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-xl border-2 border-gray-200 shadow-lg mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Global Reach
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {markets.map((market, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-200 text-center card-hover group"
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform">
                      {market.flag}
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {market.region.split(' ')[0]}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6 text-sm italic">
                [Map visualization placeholder - Generic representation of regions served]
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-xl border border-blue-200 shadow-lg">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Interested in Our Markets?
                </h3>
                <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  If you're looking to source products from Asia for any of these markets, 
                  we can help. Contact us to discuss your specific requirements and how we 
                  can assist with your trading needs.
                </p>
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Markets;
