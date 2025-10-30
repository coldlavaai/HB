'use client';

import { useState } from 'react';

export default function LCBFormPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Charts & Data
    criticalCharts: '',
    prioritySpreads: [] as string[],
    timeRanges: [] as string[],
    priorityMarkets: [] as string[],
    chartsToSkip: '',

    // Interactivity
    interactiveFeatures: [] as string[],

    // Client Access
    clientAccess: '',
    differentClientViews: '',

    // Technical
    updateFrequency: '',
    exportFormats: [] as string[],
    mobileImportant: '',

    // Additional
    additionalDataSources: '',
    additionalNotes: '',
  });

  const handleCheckboxChange = (field: 'prioritySpreads' | 'timeRanges' | 'priorityMarkets' | 'interactiveFeatures' | 'exportFormats', value: string) => {
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
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a33] via-[#1a1a4a] to-[#2a2a5a] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center border-4 border-[#02bbd4]/20">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] bg-clip-text text-transparent mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Thank You, Harry!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Your responses have been submitted successfully.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] text-white rounded-full font-semibold shadow-lg">
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
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a33] via-[#1a1a4a] to-[#2a2a5a] py-12 px-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="max-w-4xl mx-auto">
        {/* Cold Lava Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] text-white rounded-full font-bold text-lg shadow-lg mb-4">
            <span className="text-2xl">⚡</span>
            <span>Cold Lava</span>
          </div>
          <p className="text-white/80 text-sm">AI Automation & Business Intelligence</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-[#02bbd4]/20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0a0a33] mb-2">
              Liverpool Cotton Brokers
            </h1>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] bg-clip-text text-transparent mb-4">
              Cotton Analysis Dashboard - Technical Configuration
            </h2>
            <p className="text-gray-600">
              Hi Harry! Please answer these technical questions about your dashboard needs. This helps us build exactly what you need without back-and-forth revisions. Takes ~5 minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Charts & Data Priority */}
            <section className="border-t-2 border-[#02bbd4]/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] bg-clip-text text-transparent mb-4">📊 Charts & Data Priority</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  1. From your current 23 Excel charts, which 5 are most critical? (List chart names or descriptions)
                </label>
                <textarea
                  required
                  value={formData.criticalCharts}
                  onChange={(e) => setFormData({...formData, criticalCharts: e.target.value})}
                  rows={3}
                  placeholder="e.g., CZCE-ICE spread, A-Index trends, Pakistan arrivals, Certified stock, PSF-PTA spread"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02bbd4] focus:border-[#02bbd4] transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  2. Which spreads do you analyze most often? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {['CZCE - ICE', 'MCX - ICE', 'PSF - PTA', 'CZCE Cotton - PSF', 'AWP - ICE', 'CC-Index basis CZCE', 'China - International'].map(spread => (
                    <label key={spread} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.prioritySpreads.includes(spread)}
                        onChange={() => handleCheckboxChange('prioritySpreads', spread)}
                        className="w-4 h-4 text-[#02bbd4] border-gray-300 rounded focus:ring-[#02bbd4]"
                      />
                      <span className="ml-2 text-gray-700">{spread}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  3. What time ranges matter most for analysis? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {['Last 7 days', 'Last 30 days', 'Last 90 days', 'Last 6 months', 'Year-to-date', 'Custom date ranges'].map(range => (
                    <label key={range} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.timeRanges.includes(range)}
                        onChange={() => handleCheckboxChange('timeRanges', range)}
                        className="w-4 h-4 text-[#02bbd4] border-gray-300 rounded focus:ring-[#02bbd4]"
                      />
                      <span className="ml-2 text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  4. Which markets are priority for your clients? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {['China (CZCE)', 'India (MCX)', 'US (ICE)', 'Pakistan', 'Australia', 'Brazil (CEPEA)', 'All markets'].map(market => (
                    <label key={market} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.priorityMarkets.includes(market)}
                        onChange={() => handleCheckboxChange('priorityMarkets', market)}
                        className="w-4 h-4 text-[#02bbd4] border-gray-300 rounded focus:ring-[#02bbd4]"
                      />
                      <span className="ml-2 text-gray-700">{market}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  5. Are there any charts/data from your current 23 sheets we can skip or simplify?
                </label>
                <textarea
                  value={formData.chartsToSkip}
                  onChange={(e) => setFormData({...formData, chartsToSkip: e.target.value})}
                  rows={2}
                  placeholder="e.g., Some generic charts, Chart1-6 can be removed, etc."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02bbd4] focus:border-[#02bbd4] transition-all"
                />
              </div>
            </section>

            {/* Interactivity & Features */}
            <section className="border-t-2 border-[#02bbd4]/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] bg-clip-text text-transparent mb-4">🎛️ Interactive Features</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  6. What interactive features do you want? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {['Zoom into charts', 'Compare different time periods side-by-side', 'Overlay multiple spreads on one chart', 'Price alerts/notifications', 'Export custom date ranges', 'Filter by specific markets'].map(feature => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interactiveFeatures.includes(feature)}
                        onChange={() => handleCheckboxChange('interactiveFeatures', feature)}
                        className="w-4 h-4 text-[#02bbd4] border-gray-300 rounded focus:ring-[#02bbd4]"
                      />
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Client Access */}
            <section className="border-t-2 border-[#02bbd4]/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] bg-clip-text text-transparent mb-4">👥 Client Access</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  7. How should clients access the dashboard?
                </label>
                <select
                  required
                  value={formData.clientAccess}
                  onChange={(e) => setFormData({...formData, clientAccess: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02bbd4] focus:border-[#02bbd4] transition-all"
                >
                  <option value="">Select...</option>
                  <option value="login-portal">Password-protected login portal (clients access directly)</option>
                  <option value="email-reports">Email reports only (you send PDFs)</option>
                  <option value="both">Both - portal + email reports</option>
                  <option value="public-link">Public link (no login required)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  8. Do different clients need different chart sets/views?
                </label>
                <select
                  required
                  value={formData.differentClientViews}
                  onChange={(e) => setFormData({...formData, differentClientViews: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02bbd4] focus:border-[#02bbd4] transition-all"
                >
                  <option value="">Select...</option>
                  <option value="yes-custom">Yes - different clients see different charts based on their needs</option>
                  <option value="no-same">No - everyone sees the same dashboard</option>
                  <option value="maybe-future">Not yet, but maybe in the future</option>
                </select>
              </div>
            </section>

            {/* Technical Details */}
            <section className="border-t-2 border-[#02bbd4]/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] bg-clip-text text-transparent mb-4">⚙️ Technical Details</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  9. How often do you update your data?
                </label>
                <select
                  required
                  value={formData.updateFrequency}
                  onChange={(e) => setFormData({...formData, updateFrequency: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02bbd4] focus:border-[#02bbd4] transition-all"
                >
                  <option value="">Select...</option>
                  <option value="realtime">Real-time/Continuous (as market data updates)</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="manual">Manual uploads when needed</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  10. What export formats do clients need? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {['PDF report', 'Excel/CSV data', 'PowerPoint slides', 'Individual chart images (PNG/JPG)', 'None - web dashboard only'].map(format => (
                    <label key={format} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.exportFormats.includes(format)}
                        onChange={() => handleCheckboxChange('exportFormats', format)}
                        className="w-4 h-4 text-[#02bbd4] border-gray-300 rounded focus:ring-[#02bbd4]"
                      />
                      <span className="ml-2 text-gray-700">{format}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  11. Is mobile/tablet access important for you or your clients?
                </label>
                <select
                  required
                  value={formData.mobileImportant}
                  onChange={(e) => setFormData({...formData, mobileImportant: e.target.value})}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02bbd4] focus:border-[#02bbd4] transition-all"
                >
                  <option value="">Select...</option>
                  <option value="critical">Yes - critical, we check data on mobile often</option>
                  <option value="nice">Nice to have, but not essential</option>
                  <option value="no">No - desktop only is fine</option>
                </select>
              </div>
            </section>

            {/* Additional Context */}
            <section className="border-t-2 border-[#02bbd4]/20 pt-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] bg-clip-text text-transparent mb-4">💡 Additional Context</h3>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  12. Are there any additional data sources to integrate beyond your current Excel?
                </label>
                <textarea
                  value={formData.additionalDataSources}
                  onChange={(e) => setFormData({...formData, additionalDataSources: e.target.value})}
                  rows={2}
                  placeholder="e.g., Direct API feeds, weather data, freight costs, etc."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02bbd4] focus:border-[#02bbd4] transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  13. Any other technical requirements, concerns, or ideas?
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                  rows={3}
                  placeholder="Anything else that would help us build the perfect dashboard for you..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02bbd4] focus:border-[#02bbd4] transition-all"
                />
              </div>
            </section>

            <div className="border-t-2 border-[#02bbd4]/20 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#02bbd4] to-[#4a90e2] text-white font-bold py-4 px-6 rounded-xl hover:from-[#029eb8] hover:to-[#3a7bc8] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {loading ? '⚡ Submitting...' : '🚀 Submit Configuration'}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center text-white/80 text-sm">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-lg">⚡</span>
            <p>Built by <span className="font-bold">Cold Lava</span> • Oliver Tatler • {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
