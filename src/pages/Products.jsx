import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Products = () => {
  const categories = [
    {
      id: 'automobile-parts',
      name: 'Automobile Parts',
      description: 'Selected categories suitable for after-market supply, documented for international trade and consistent quality expectations.',
      hsCode: 'HS Chapter 8708',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 'textiles',
      name: 'Textiles',
      description: 'Diversified apparel and fabric categories with reliable sourcing and documentation discipline.',
      hsCode: 'HS Chapter 61/62',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: 'tea-coffee',
      name: 'Tea & Coffee',
      description: 'Bulk and retail-ready formats with standard quality controls and export documentation.',
      hsCode: 'HS Chapter 0901/0902',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: 'pharmaceuticals',
      name: 'Pharmaceuticals (OTC/General)',
      description: 'General over-the-counter categories from licensed facilities; documentation on request.',
      hsCode: 'HS Chapter 3004',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 'fresh-vegetables',
      name: 'Fresh Vegetables',
      description: 'Seasonal shipments with appropriate handling documentation; specifications on request.',
      hsCode: 'HS Chapter 07',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Products & Categories - RDY Enterprise"
        description="Explore our product categories: Automobile Parts, Textiles, Tea & Coffee, Pharmaceuticals, and Fresh Vegetables. Contact us for detailed catalogs."
        keywords="products, categories, automobile parts, textiles, tea, coffee, pharmaceuticals, vegetables, export products"
      />
      
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our Products & Categories
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We source and export a diverse range of products from Asia. Contact us for detailed catalogs and specifications.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm card-hover group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
                        {category.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h2>
                        <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-mono text-sm rounded-lg border border-gray-200">
                          {category.hsCode}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-2 gap-1 transition-all"
                      >
                        Contact for catalog
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-xl border border-blue-200 shadow-lg">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Interested in Our Products?
                </h3>
                <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  For detailed product catalogs, specifications, and pricing information, please 
                  contact us through our inquiry form. Our team will respond promptly with the 
                  information you need.
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

export default Products;
