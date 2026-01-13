import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const productCategories = [
    {
      name: 'Automobile Parts',
      description: 'Selected categories suitable for after-market supply, documented for international trade and consistent quality expectations.',
      path: '/products#automobile-parts',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      name: 'Textiles',
      description: 'Diversified apparel and fabric categories with reliable sourcing and documentation discipline.',
      path: '/products#textiles',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      name: 'Tea & Coffee',
      description: 'Bulk and retail-ready formats with standard quality controls and export documentation.',
      path: '/products#tea-coffee',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      name: 'Pharmaceuticals',
      description: 'General over-the-counter categories from licensed facilities; documentation on request.',
      path: '/products#pharmaceuticals',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      name: 'Fresh Vegetables',
      description: 'Seasonal shipments with appropriate handling documentation; specifications on request.',
      path: '/products#fresh-vegetables',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const regions = [
    { name: 'EU', flag: '🇪🇺' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'South-East Asia', flag: '🇸🇬' },
    { name: 'Asia (ex-China)', flag: '🌏' },
  ];

  const valueProps = [
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality controls ensuring consistent product standards across all categories.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Documentation Discipline',
      description: 'Comprehensive export documentation ensuring smooth international trade compliance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'On-Time Shipments',
      description: 'Reliable logistics and supply chain management ensuring timely delivery.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="RDY Enterprise - Global Trading & Exports"
        description="Trusted sourcing from Asia. Delivering to EU, USA, Australia, SEA, and across Asia. Quality products, documentation discipline, and on-time shipments."
        keywords="global trading, export, import, Asia, EU, USA, Australia, trading company, automobile parts, textiles, tea, coffee, pharmaceuticals, vegetables"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Global Trading & Exports
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              RDY Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Global Trading & Exports
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Trusted sourcing from Asia. Delivering to EU, USA, Australia, SEA, and across Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get in Touch
              </Link>
              <Link to="/products" className="btn-secondary text-lg px-8 py-4">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose RDY Enterprise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building trust through excellence in every aspect of global trade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 card-hover group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We source and export a diverse range of products from Asia to markets worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group bg-white p-8 rounded-xl shadow-md border border-gray-200 card-hover"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <span className="text-blue-600 font-semibold inline-flex items-center group-hover:gap-2 gap-1 transition-all">
                  Learn more
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary text-lg px-8 py-4">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Regions Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Global Markets We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver to key markets across the globe with established trade relationships
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 max-w-5xl mx-auto mb-12">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 lg:p-8 rounded-xl text-center border border-blue-200 card-hover group"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {region.flag}
                </div>
                <p className="text-lg font-bold text-gray-900">{region.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/markets" className="btn-primary text-lg px-8 py-4">
              Learn More About Our Markets
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your sourcing and export needs. Our team is ready to assist you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
