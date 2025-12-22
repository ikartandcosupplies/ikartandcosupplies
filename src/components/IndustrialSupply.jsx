import React from 'react';
import '../assets/css/IndustrialSupply.css';

import { 
  MdFactory, 
  MdApartment , 
  MdLocalShipping 
} from 'react-icons/md';

const IndustrialSupply = () => {
  
  const industries = [
    {
      title: "Plywood & MDF Manufacturers",
        icon: <MdFactory />,
      desc: "We supply raw wood to top plywood and panel brands.",
      clients: [
        "Century Ply", "Greenply", "Greenpanel", 
        "Archidply", "NCL Industries", "Regional Factories"
      ]
    },
    {
      title: "Paper Mills",
        icon: <MdLocalShipping />,
      desc: "Bulk supply of industrial wood to leading mills.",
      clients: [
        "TNPL", "Andhra Paper", "Kolar Paper Mills", 
        "Delta Paper Mills", "ITC Units", "Medium & Large Mills"
      ]
    },
    {
      title: "Construction Industry",
       icon: <MdApartment  />,
      desc: "Supply of construction wood bars (Shuttering & Scaffolding).",
      clients: [
        "Andhra Pradesh","Telangana","Pune Region", "Mumbai Region", "Delhi NCR", 
        "North India Cities", "Wholesalers", "Contractors"
      ]
    }
  ];

  const woodTypes = [
    "Eucalyptus",
    "Subabul",
    "Casuarina",
    "Firewood",
    "Construction Wood Bars",
    "Custom Mixes"
  ];

  const logisticsFeatures = [
    { title: "Multi-State Network", desc: "Transport across South, West & North India." },
    { title: "Reliable Truck Hiring", desc: "Fleet availability for any volume size." },
    { title: "Smart Coordination", desc: "Smooth loading, unloading & route planning." },
    { title: "Compliance Ready", desc: "Full documentation & legal compliance." }
  ];

  return (
    <div className="industrial-page">
      
      {/* Header */}
      <header className="ind-header">
        <div className="ind-header-overlay"></div>
        <div className="ind-header-content">
          <span className="ind-tag">ikartandco</span>
          <h1 className="ind-title">Industrial Supply & Logistics</h1>
          <p className="ind-subtitle">
            ikartandco supplies bulk wood to major industries across India. 
            Reliable sourcing, consistent quality, and end-to-end logistics.
          </p>
        </div>
      </header>

      <div className="ind-container">
        
        {/* SECTION 1: Industries We Serve */}
        <section className="industries-section">
          <div className="section-head">
            <h2>Industries We Serve</h2>
            <div className="underline"></div>
          </div>
          
          <div className="industries-grid">
            {industries.map((ind, index) => (
              <div key={index} className="ind-card">
                <div className="ind-icon-box">{ind.icon}</div>
                <h3 className="ind-card-title">{ind.title}</h3>
                <p className="ind-card-desc">{ind.desc}</p>
                
                <div className="client-list">
                  <span className="client-label">Key Clients & Regions:</span>
                  <div className="client-tags">
                    {ind.clients.map((client, i) => (
                      <span key={i} className="client-badge">{client}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Wood Types Banner */}
        <section className="wood-types-banner">
          <div className="wood-types-content">
            <h3>Types of Wood We Supply</h3>
            <p>Each load is checked, measured, and handled professionally.</p>
            <div className="wood-type-grid">
              {woodTypes.map((type, index) => (
                <div key={index} className="wood-type-item">
                  <span className="check">✔</span> {type}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Logistics */}
        <section className="logistics-section">
          <div className="logistics-grid">
            {/* Left: Text Info */}
            <div className="logistics-info">
              <span className="section-badge">Logistics Support</span>
              <h2>End-to-End Transportation</h2>
              <p className="logistics-intro">
                We ensure every shipment reaches the destination safe, accurate, and on time. 
                Our team handles high-volume supply management with precision.
              </p>
              
              <div className="logistics-features">
                {logisticsFeatures.map((feat, index) => (
                  <div key={index} className="feat-item">
                    <div className="feat-dot"></div>
                    <div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Map/Truck Concept */}
            <div className="logistics-visual">
              <div className="truck-card">
                <div className="truck-icon truck-move"><MdLocalShipping />
                </div>
                <div className="truck-text">
                  <h5>Dispatch Ready</h5>
                  <p>Route: South ➝ North India</p>
                </div>
              </div>
              <div className="map-bg"></div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Why Choose Us (Dark Footer style) */}
        <section className="why-ind-section">
          <h2>Why Industries Choose ikartandco</h2>
          <div className="why-ind-grid">
            <div className="why-box">
              <h3>📦 Large Volume</h3>
              <p>Handling capacity for massive industrial requirements.</p>
            </div>
            <div className="why-box">
              <h3>⚡ Fast Delivery</h3>
              <p>Optimized for long-distance routes & tight deadlines.</p>
            </div>
            <div className="why-box">
              <h3>🔄 Consistent Supply</h3>
              <p>Year-round availability for factories & mills.</p>
            </div>
            <div className="why-box">
              <h3>✅ Quality Assurance</h3>
              <p>Transparent pricing and verified measurements.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default IndustrialSupply;