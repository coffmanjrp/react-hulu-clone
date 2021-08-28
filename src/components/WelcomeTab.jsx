import { useState } from 'react';
import tabData from '../utils/tabData';
import unescapeHTML from '../lib/unescapeHTML';

const WelcomeTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [barWidth, setBarWidth] = useState(78);
  const [barOffset, setBarOffset] = useState(0);

  const handleTab = (id, e) => {
    setActiveTab(id);

    setBarWidth(e.target.clientWidth);
    setBarOffset(e.target.offsetLeft);
  };

  return (
    <section className="welcome-tab">
      <div
        className="welcome-tab-bg"
        style={{
          backgroundImage:
            window.screen.width <= 768
              ? `linear-gradient(
                rgba(0, 0, 0, 0.8) -39.59%,
                rgba(0, 0, 0, 0) 117.14%
              ), url(${tabData[activeTab - 1].backgroundSmall})`
              : `linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.8) -57.5%,
                rgba(0, 0, 0, 0) 98.72%
              ), url(${tabData[activeTab - 1].background})`,
        }}
      >
        <div className="welcome-tab-container">
          <div className="welcome-tab-controllers">
            {tabData.length > 0 &&
              tabData.map((tab) => (
                <a
                  key={tab.id}
                  href="#!"
                  className={`welcome-tab-controller${
                    activeTab === tab.id ? ' active' : ''
                  }`}
                  onClick={(e) => handleTab(tab.id, e)}
                >
                  {tab.title}
                </a>
              ))}
          </div>
          <div
            className="active-bar"
            style={{
              width: `${barWidth}px`,
              transform: `translateX(${barOffset}px)`,
            }}
          />

          {tabData.length > 0 &&
            tabData.map((tab) => (
              <div
                key={tab.id}
                id={`tab-${tab.id}-content`}
                className={`welcome-tab-content${
                  activeTab === tab.id ? ' active' : ''
                }`}
              >
                <p className="text-xl">{tab.header}</p>
                <p className="sub-text">{unescapeHTML(tab.text)}</p>
                <div className="welcome-tab-logos">
                  {tab.logos.length > 0 &&
                    tab.logos.map((logo) => (
                      <div key={logo.id}>
                        <img src={logo.image} alt={logo.alt} />
                      </div>
                    ))}
                </div>
                <p className="legal-text">{tab.legalText}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeTab;
