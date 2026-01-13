import { useState, useEffect } from 'react';
import { getSubmissions, exportSubmissions, clearSubmissions } from '../lib/contactStorage';
import SEO from '../components/SEO';

const ContactAdmin = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    setLoading(true);
    const data = getSubmissions();
    setSubmissions(data);
    setLoading(false);
  };

  const handleExport = () => {
    if (exportSubmissions()) {
      alert('Submissions exported successfully!');
    } else {
      alert('Error exporting submissions.');
    }
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all submissions? This cannot be undone.')) {
      if (clearSubmissions()) {
        setSubmissions([]);
        alert('All submissions cleared.');
      } else {
        alert('Error clearing submissions.');
      }
    }
  };

  if (loading) {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Contact Submissions - RDY Enterprise"
        description="View contact form submissions"
      />
      
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Contact Submissions
                </h1>
                <p className="text-gray-600">
                  {submissions.length} submission{submissions.length !== 1 ? 's' : ''} stored
                </p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <button
                  onClick={handleExport}
                  disabled={submissions.length === 0}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Export JSON
                </button>
                <button
                  onClick={handleClear}
                  disabled={submissions.length === 0}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Clear All
                </button>
                <button
                  onClick={loadSubmissions}
                  className="btn-secondary"
                >
                  Refresh
                </button>
              </div>
            </div>

            {submissions.length === 0 ? (
              <div className="bg-white p-12 rounded-xl shadow-md border border-gray-200 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No submissions yet</h3>
                <p className="text-gray-600">
                  Contact form submissions will appear here once users start submitting the form.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div
                    key={submission.id}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {submission.name}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                          <div>
                            <span className="font-semibold">Email:</span> {submission.email}
                          </div>
                          <div>
                            <span className="font-semibold">Company:</span> {submission.company}
                          </div>
                          <div>
                            <span className="font-semibold">Country:</span> {submission.country}
                          </div>
                          <div>
                            <span className="font-semibold">Submitted:</span>{' '}
                            {new Date(submission.submitted_at).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        submission.consent
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        Consent: {submission.consent ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAdmin;

