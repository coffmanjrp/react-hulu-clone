import {
  liveSportsLogo1,
  liveSportsLogo2,
  liveSportsLogo3,
  liveSportsLogo4,
  breakingNewsLogo1,
  breakingNewsLogo2,
  breakingNewsLogo3,
  breakingNewsLogo4,
  biggestEventsLogo1,
  biggestEventsLogo2,
  biggestEventsLogo3,
  biggestEventsLogo4,
} from '../img';

const WelcomeTab = () => {
  return (
    <section className="welcome-tab">
      <div className="welcome-tab-bg">
        <div className="welcome-tab-container">
          <div className="welcome-tab-controllers">
            <a href="#!" id="tab-1" className="welcome-tab-controller active">
              Live Sports
            </a>
            <a href="#!" id="tab-2" className="welcome-tab-controller">
              Breaking News
            </a>
            <a href="#!" id="tab-3" className="welcome-tab-controller">
              Biggest Events
            </a>
          </div>
          <div className="active-bar"></div>

          <div id="tab-1-content" className="welcome-tab-content active">
            <p className="text-xl">Live Sports</p>
            <p className="sub-text">
              Catch your games at home or on the go. Stream live games from
              major college and pro leagues including the NCAA&reg;, NBA, NHL,
              NFL, and more.
            </p>
            <div className="welcome-tab-logos">
              <div>
                <img src={liveSportsLogo1} alt="CBS" />
              </div>
              <div>
                <img src={liveSportsLogo2} alt="ESPN" />
              </div>
              <div>
                <img src={liveSportsLogo3} alt="NBCSN" />
              </div>
              <div>
                <img src={liveSportsLogo4} alt="NBC Golf" />
              </div>
            </div>
            <p className="legal-text">
              Live TV plan required. Regional restrictions, blackouts and
              additional terms apply. See details
            </p>
          </div>
          <div id="tab-2-content" className="welcome-tab-content">
            <p className="text-xl">Breaking News</p>
            <p className="sub-text">
              Keep pace with what's going on locally and globally with trusted
              opinions from all the top news networks.
            </p>
            <div className="welcome-tab-logos">
              <div>
                <img src={breakingNewsLogo1} alt="ABC News" />
              </div>
              <div>
                <img src={breakingNewsLogo2} alt="CNN" />
              </div>
              <div>
                <img src={breakingNewsLogo3} alt="MSNBC" />
              </div>
              <div>
                <img src={breakingNewsLogo4} alt="FOX News" />
              </div>
            </div>
            <p className="legal-text">
              Live TV plan required. Regional restrictions, blackouts and
              additional terms apply. See details
            </p>
          </div>
          <div id="tab-3-content" className="welcome-tab-content">
            <p className="text-xl">Biggest Events</p>
            <p className="sub-text">
              Spectacular, can't-miss moments like the Olympics, Grammys&reg;,
              Oscars®, Emmys&reg;, and more.
            </p>
            <div className="welcome-tab-logos">
              <div>
                <img src={biggestEventsLogo1} alt="Emmys" />
              </div>
              <div>
                <img src={biggestEventsLogo2} alt="Golden Globes" />
              </div>
              <div>
                <img src={biggestEventsLogo3} alt="Grammy" />
              </div>
              <div>
                <img src={biggestEventsLogo4} alt="Oscars" />
              </div>
            </div>
            <p className="legal-text">
              Live TV plan required. Regional restrictions, blackouts and
              additional terms apply. See details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeTab;
