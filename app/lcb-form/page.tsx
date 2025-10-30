'use client';

import { useState } from 'react';

export default function LCBFormPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Current Process
    timeSpentWeekly: '',
    biggestPainPoint: '',

    // Clients & Usage
    numberOfClients: '',
    clientTypes: [] as string[],
    howClientsUse: '',
    clientFeedback: '',

    // Desired Features
    interactiveDashboard: '',
    mobileAccess: '',
    clientPortal: '',
    aiInsights: '',
    customReports: '',
    realTimeUpdates: '',

    // Priorities
    topPriority: '',
    mustHaveFeatures: '',
    niceToHaveFeatures: '',

    // Technical
    updateFrequency: '',
    exportFormats: [] as string[],

    // Additional
    additionalThoughts: '',
  });

  const handleCheckboxChange = (field: 'clientTypes' | 'exportFormats', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/lcb-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          submittedBy: 'Harry Bennett'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-orange-900/30 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-4 border-orange-500/20">
          <div className="text-6xl mb-4">🌋</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Thank You, Harry!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Your responses have been submitted successfully.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold">
            ⚡ Powered by Cold Lava
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Oliver will review your requirements and get back to you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-orange-900/30 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Cold Lava Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg shadow-lg mb-4">
            <span className="text-2xl">🌋</span>
            <span>Cold Lava</span>
          </div>
          <p className="text-white/80 text-sm">AI Automation & Business Intelligence</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-orange-500/20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
              Liverpool Cotton Brokers
            </h1>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              Cotton Analysis Dashboard - Requirements
            </h2>
            <p className="text-gray-600">
              Hi Harry! We're building a modern web dashboard for your cotton analysis. Please answer these questions so we can create exactly what you need. This should take about 5-10 minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Current Process */}
            <section className="border-t-2 border-orange-500/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">📊 Current Process</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  1. How much time do you spend weekly creating the PDF reports?
                </label>
                <select
                  required
                  value={formData.timeSpentWeekly}
                  onChange={(e) => setFormData({...formData, timeSpentWeekly: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                >
                  <option value="">Select...</option>
                  <option value="<1 hour">Less than 1 hour</option>
                  <option value="1-2 hours">1-2 hours</option>
                  <option value="2-4 hours">2-4 hours</option>
                  <option value="4-8 hours">4-8 hours</option>
                  <option value=">8 hours">More than 8 hours</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  2. What's the biggest pain point with your current PDF process?
                </label>
                <textarea
                  required
                  value={formData.biggestPainPoint}
                  onChange={(e) => setFormData({...formData, biggestPainPoint: e.target.value})}
                  rows={3}
                  placeholder="e.g., Takes too long, hard to update, clients want more detail..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>
            </section>

            {/* Clients & Usage */}
            <section className="border-t-2 border-orange-500/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">👥 Your Clients</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  3. How many clients receive your weekly analysis?
                </label>
                <select
                  required
                  value={formData.numberOfClients}
                  onChange={(e) => setFormData({...formData, numberOfClients: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                >
                  <option value="">Select...</option>
                  <option value="1-5">1-5 clients</option>
                  <option value="6-10">6-10 clients</option>
                  <option value="11-20">11-20 clients</option>
                  <option value="21-50">21-50 clients</option>
                  <option value=">50">More than 50 clients</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  4. What types of clients do you serve? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {['Textile manufacturers', 'Cotton traders', 'Spinning mills', 'Retailers/brands', 'Financial institutions', 'Other'].map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.clientTypes.includes(type)}
                        onChange={() => handleCheckboxChange('clientTypes', type)}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  5. How do clients typically use your reports?
                </label>
                <textarea
                  required
                  value={formData.howClientsUse}
                  onChange={(e) => setFormData({...formData, howClientsUse: e.target.value})}
                  rows={3}
                  placeholder="e.g., Making purchase decisions, risk management, sharing with their teams..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  6. What feedback have clients given about the current reports?
                </label>
                <textarea
                  value={formData.clientFeedback}
                  onChange={(e) => setFormData({...formData, clientFeedback: e.target.value})}
                  rows={3}
                  placeholder="Any requests, complaints, or compliments..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>
            </section>

            {/* Desired Features */}
            <section className="border-t-2 border-orange-500/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">✨ Feature Priorities</h3>
              <p className="text-sm text-gray-600 mb-4">Rate each feature: Essential, Nice to have, or Not needed</p>

              {[
                { key: 'interactiveDashboard', label: '7. Interactive charts that clients can zoom/filter themselves' },
                { key: 'mobileAccess', label: '8. Mobile-friendly access for viewing on phones/tablets' },
                { key: 'clientPortal', label: '9. Password-protected client portal with login access' },
                { key: 'aiInsights', label: '10. AI-generated insights and commentary based on data' },
                { key: 'customReports', label: '11. Ability to create custom reports per client' },
                { key: 'realTimeUpdates', label: '12. Real-time data updates (vs weekly)' },
              ].map(({ key, label }) => (
                <div key={key} className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
                  <div className="flex gap-4">
                    {['Essential', 'Nice to have', 'Not needed'].map(option => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          required
                          name={key}
                          value={option}
                          checked={formData[key as keyof typeof formData] === option}
                          onChange={(e) => setFormData({...formData, [key]: e.target.value})}
                          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Top Priorities */}
            <section className="border-t-2 border-orange-500/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">🎯 Overall Priorities</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  13. What's your #1 priority for this new system?
                </label>
                <textarea
                  required
                  value={formData.topPriority}
                  onChange={(e) => setFormData({...formData, topPriority: e.target.value})}
                  rows={2}
                  placeholder="The single most important thing this needs to do..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  14. What features are absolute "must-haves" for launch?
                </label>
                <textarea
                  required
                  value={formData.mustHaveFeatures}
                  onChange={(e) => setFormData({...formData, mustHaveFeatures: e.target.value})}
                  rows={3}
                  placeholder="List the features you can't launch without..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  15. What features would be great for Phase 2 (can wait)?
                </label>
                <textarea
                  value={formData.niceToHaveFeatures}
                  onChange={(e) => setFormData({...formData, niceToHaveFeatures: e.target.value})}
                  rows={3}
                  placeholder="Nice-to-have features for future updates..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>
            </section>

            {/* Technical Details */}
            <section className="border-t-2 border-orange-500/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">⚙️ Technical Details</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  16. How often do you update your data?
                </label>
                <select
                  required
                  value={formData.updateFrequency}
                  onChange={(e) => setFormData({...formData, updateFrequency: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                >
                  <option value="">Select...</option>
                  <option value="Real-time">Real-time/Continuous</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Bi-weekly">Bi-weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  17. What export formats do clients need? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {['PDF', 'Excel/CSV', 'PowerPoint', 'Email summary', 'None - web only'].map(format => (
                    <label key={format} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.exportFormats.includes(format)}
                        onChange={() => handleCheckboxChange('exportFormats', format)}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="ml-2 text-gray-700">{format}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Additional Thoughts */}
            <section className="border-t-2 border-orange-500/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">💭 Final Thoughts</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  18. Anything else we should know?
                </label>
                <textarea
                  value={formData.additionalThoughts}
                  onChange={(e) => setFormData({...formData, additionalThoughts: e.target.value})}
                  rows={4}
                  placeholder="Any other requirements, concerns, ideas, or context that would be helpful..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                />
              </div>
            </section>

            <div className="border-t-2 border-orange-500/20 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {loading ? '⚡ Submitting...' : '🚀 Submit Requirements'}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center text-white/80 text-sm">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-lg">🌋</span>
            <p>Built by <span className="font-bold">Cold Lava</span> • Oliver Tatler • {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
