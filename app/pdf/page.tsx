'use client';

import Image from 'next/image';

export default function PDFVersion() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-before: always;
          }
        }
        @media screen {
          .print-container {
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
        }
      `}</style>

      {/* Print/Download Button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-[#D4AF37] text-[#1A2332] font-semibold rounded-lg shadow-lg hover:bg-[#B8941F] transition-all"
        >
          Download PDF
        </button>
      </div>

      <div className="print-container">
        {/* Header */}
        <header className="border-b-4 border-[#D4AF37] pb-6 mb-6">
          <h1 className="text-4xl font-bold text-[#1A2332] mb-2">Harry Bennett</h1>
          <div className="text-xl text-[#2C7A7B] font-semibold mb-3">
            Partner — Liverpool Cotton Brokers | Commodity Consultant — Earlam & Partners
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <div>📧 hwbconsultingltd@outlook.com</div>
            <div>📱 +44 7380 949 6591</div>
            <div>📍 Heswall, UK (Extensive Overseas Engagement)</div>
          </div>
        </header>

        {/* Profile Summary */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#1A2332] border-b-2 border-[#D4AF37] pb-2 mb-3">
            Profile Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-800">
            Cotton industry professional with eight years' experience spanning physical procurement, origination, trading strategy,
            mill/merchant relationship management, and execution. Partner in Liverpool Cotton Brokers (LCB), jointly managing market
            intelligence, origination trade mapping, direct mill relationships, and strategic advisory functions. Core responsibility
            includes ongoing procurement, hedge/position management, and supply chain advisory for Saiham Group (Bangladesh), covering
            20–35k MT p.a., including contracting, shipment execution, quality flow, and structured market/trade guidance. Maintains
            multi-origin sourcing network (US, Brazil, Australia, Greece, West Africa) working with mills and merchants to structure
            supply channels aligning commercial, sustainability, and trade objectives.
          </p>
        </section>

        {/* Key Metrics */}
        <section className="mb-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <div className="text-2xl font-bold text-[#D4AF37]">$50M</div>
              <div className="text-xs text-gray-600">Annual Value</div>
            </div>
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <div className="text-2xl font-bold text-[#D4AF37]">30k MT</div>
              <div className="text-xs text-gray-600">Annual Volume</div>
            </div>
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <div className="text-2xl font-bold text-[#D4AF37]">10+</div>
              <div className="text-xs text-gray-600">Countries</div>
            </div>
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <div className="text-2xl font-bold text-[#D4AF37]">8 Years</div>
              <div className="text-xs text-gray-600">Experience</div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#1A2332] border-b-2 border-[#D4AF37] pb-2 mb-3">
            Professional Experience
          </h2>

          {/* LCB */}
          <div className="mb-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-[#1A2332]">Partner</h3>
                <div className="text-[#2C7A7B] font-semibold">Liverpool Cotton Brokers Ltd (LCB)</div>
              </div>
              <div className="text-right text-sm">
                <div className="font-semibold">January 2024 — Present</div>
                <div className="text-gray-600">Hoylake (Global Coverage)</div>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-800 ml-2">
              <li>Co-owner managing market intelligence, origination, and direct sales strategy</li>
              <li>Lead strategic advisory for futures, options, and hedge strategy for mill clients and merchant partners</li>
              <li>Responsible for 20-35k MT annual procurement program with Saiham Group (Bangladesh) - $30-50M value</li>
              <li>Developing structured supply chains from Brazil, Australia, Greece to Asia & Europe</li>
              <li>Drive traceability and sustainability alignment (FiberTrace, TextileGenesis)</li>
              <li>Daily management of hedge/positioning strategy, on-call fixations, market advisory</li>
              <li>Oversee shipment timelines, LC handling, logistics, execution pipeline</li>
            </ul>
          </div>

          {/* EAP */}
          <div className="mb-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-[#1A2332]">Commodity Consultant</h3>
                <div className="text-[#2C7A7B] font-semibold">Earlam & Partners / EH&W Ltd</div>
              </div>
              <div className="text-right text-sm">
                <div className="font-semibold">November 2017 — Present</div>
                <div className="text-gray-600">Hoylake (Overseas & Remote)</div>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-800 ml-2">
              <li>Developed agency sales network with key spinning groups in Bangladesh, Pakistan, Vietnam, Portugal</li>
              <li>Managed logistics and execution for U.S., Brazilian, Australian, and Greek growth cottons</li>
              <li>Designed shipment & position sheet systems to streamline execution and risk visibility</li>
              <li>Lead training and mentoring of execution staff</li>
              <li>Produced regular market analysis covering fundamentals, macro positioning, technical drivers</li>
            </ul>
          </div>

          {/* Gate Capital */}
          <div className="mb-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-[#1A2332]">Consultant</h3>
                <div className="text-[#2C7A7B] font-semibold">Gate Capital Group</div>
              </div>
              <div className="text-right text-sm">
                <div className="font-semibold">November 2017 — April 2020</div>
                <div className="text-gray-600">London</div>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-800 ml-2">
              <li>Worked within specialist investment firm structuring options-based investment and hedge strategies</li>
              <li>Gained practical experience in derivatives, portfolio exposure management, P/L reporting</li>
              <li>Bloomberg-led research and analysis</li>
            </ul>
          </div>

          {/* ORB */}
          <div className="mb-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-[#1A2332]">Business Development Manager</h3>
                <div className="text-[#2C7A7B] font-semibold">ORB Global Wealth Management</div>
              </div>
              <div className="text-right text-sm">
                <div className="font-semibold">August 2016 — December 2016</div>
                <div className="text-gray-600">Hong Kong</div>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-800 ml-2">
              <li>Implemented CRM adoption and sales workflow optimisation, increasing lead conversion by 40%</li>
              <li>Built and maintained relationships with international private clients and advisory groups</li>
            </ul>
          </div>
        </section>

        <div className="page-break"></div>

        {/* Business Vision */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#1A2332] border-b-2 border-[#D4AF37] pb-2 mb-3">
            Business Vision
          </h2>
          <p className="text-sm text-gray-800 mb-4 italic">
            Building a Cotton Trading Desk leveraging existing grain trading infrastructure and LCB's commercial network
            to create scalable, high-integrity physical cotton flows. Cotton trade flows mirror grain trading behaviours
            (hedging, freight, contract structures) - enabling seamless integration into established agricultural commodity operations.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-bold text-sm text-[#1A2332] mb-2">Trading Flow</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• <strong>Procurement:</strong> Brazil, US, Greece, Spain, West Africa, Turkey, Australia</li>
                <li>• <strong>Sales:</strong> Bangladesh, Pakistan, Vietnam, Turkey, India</li>
                <li>• <strong>Trade Basis:</strong> FOB/FCA purchase → CFR/CIF sale</li>
                <li>• <strong>Pilot:</strong> 500-1,000 MT</li>
                <li>• <strong>Year 1:</strong> 5,000-10,000 MT</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#1A2332] mb-2">Capital Framework</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• <strong>Pilot Capital:</strong> $850k (500 MT @ 70c/lb)</li>
                <li>• <strong>Working Capital:</strong> $5-10M revolving</li>
                <li>• <strong>Turnover:</strong> 3-5 capital rotations annually</li>
                <li>• <strong>Gross Margin:</strong> 1.0-2.0 c/lb</li>
                <li>• <strong>Risk Management:</strong> ICE futures, FX forwards, verified counterparties</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#1A2332] border-b-2 border-[#D4AF37] pb-2 mb-3">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold text-sm text-[#1A2332] mb-2">Trading & Procurement</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• Physical Cotton Trading</li>
                <li>• Multi-Origin Sourcing</li>
                <li>• Contract Negotiation</li>
                <li>• Price Discovery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#1A2332] mb-2">Risk Management</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• Futures & Options</li>
                <li>• Hedge Strategy</li>
                <li>• Position Management</li>
                <li>• Market Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#1A2332] mb-2">Operations</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• Shipment Execution</li>
                <li>• LC Documentation</li>
                <li>• Quality Control</li>
                <li>• Supply Chain Management</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-bold text-sm text-[#1A2332] mb-2">Geographic Coverage</h4>
            <div className="grid grid-cols-5 gap-2 text-xs text-gray-700">
              <div>• US</div>
              <div>• Brazil</div>
              <div>• Australia</div>
              <div>• Greece</div>
              <div>• West Africa</div>
              <div>• Bangladesh</div>
              <div>• Pakistan</div>
              <div>• Vietnam</div>
              <div>• Turkey</div>
              <div>• Portugal</div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-bold text-sm text-[#1A2332] mb-2">Platforms & Tools</h4>
            <div className="text-xs text-gray-700">
              ICE Futures • Bloomberg Terminal • TradeFlow Systems • FiberTrace • TextileGenesis
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#1A2332] border-b-2 border-[#D4AF37] pb-2 mb-3">
            Education
          </h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-[#1A2332]">BEng Civil Engineering (2:1)</h3>
              <div className="text-[#2C7A7B] font-semibold">Liverpool John Moores University</div>
              <ul className="text-xs text-gray-700 mt-2 space-y-1">
                <li>• Advanced Structural Engineering</li>
                <li>• Risk Management & Economic Analysis</li>
                <li>• Offshore/Coastal Design</li>
                <li>• Year Three Industry Placement in Malaysia</li>
              </ul>
            </div>
            <div className="text-right text-sm font-semibold">
              2011 — 2015
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-gray-300 text-xs text-gray-600 text-center">
          <p>Interactive CV available at: harrybennett-cv.vercel.app</p>
          <p className="mt-1">© 2025 Harry Bennett • Cotton Trading Specialist</p>
        </footer>
      </div>
    </div>
  );
}
