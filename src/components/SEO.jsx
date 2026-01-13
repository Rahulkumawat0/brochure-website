import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonical }) => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title || 'RDY Enterprise - Global Trading & Exports';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || '');

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || currentUrl);

    // Update Open Graph tags
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', title || 'RDY Enterprise - Global Trading & Exports');
    updateOGTag('og:description', description || '');
    updateOGTag('og:url', currentUrl);
    updateOGTag('og:type', 'website');

    // Structured Data - Organization
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'RDY Enterprise',
      url: baseUrl,
      description: 'Global Trading & Exports. Trusted sourcing from Asia.',
    };

    // Remove existing organization schema
    const existingOrgScript = document.querySelector('#organization-schema');
    if (existingOrgScript) {
      existingOrgScript.remove();
    }

    // Add organization schema
    const orgScript = document.createElement('script');
    orgScript.id = 'organization-schema';
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Breadcrumb structured data
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
      ],
    };

    // Add breadcrumb items based on path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    pathSegments.forEach((segment, index) => {
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      const item = `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`;
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name,
        item,
      });
    });

    // Remove existing breadcrumb schema
    const existingBreadcrumbScript = document.querySelector('#breadcrumb-schema');
    if (existingBreadcrumbScript) {
      existingBreadcrumbScript.remove();
    }

    // Add breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = 'breadcrumb-schema';
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);
  }, [title, description, keywords, canonical, location, currentUrl, baseUrl]);

  return null;
};

export default SEO;

