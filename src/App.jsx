import './App.css';
import {
  logo,
  logos,
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
  facebook,
  twitter,
  youtube,
  instagram,
  close,
} from './img';

function App() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <button className="login-btn">Login</button>
            </li>
          </ul>
        </nav>
        <div className="header-content">
          <h4>Try up to one month free</h4>
          <img src={logo} alt="Hulu" className="logo" />
          <p className="header-text-1">
            Watch thousands of TV shows and movies.
          </p>
          <p className="header-text-2">
            HBO Max&trade;, SHOWTIME&reg;, CINEMAX&reg; and STARZ&reg; available
            as add-ons.
          </p>
          <button className="btn btn-cta">Start Your Free Trial</button>
          <p className="legal-text">
            Free trial for new &amp; eligible returning subscribers only.
          </p>
        </div>
      </header>

      <section className="sub-header">
        <img src={logos} alt="logos" />
        <div>
          <h4>Bundle with any Hulu plan &amp; save</h4>
          <h3>Get Hulu, Disney+, and ESPN+.</h3>
          <a href="#!" className="sub-link">
            Details
          </a>
        </div>
        <div>
          <a href="#!" className="btn btn-outline">
            Get Bundle
          </a>
          <a href="#!" className="sub-link">
            Terms apply
          </a>
        </div>
      </section>

      <section className="categories">
        <h4>Included in all plans</h4>
        <p className="text-xl">All The TV You Love</p>
        <p className="sub-text">
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
        </p>
        <div className="covers">
          <div className="cover-1">
            <div className="cover-grad"></div>
            <div className="cover-text">
              <p className="sub-title">Past &amp; Current Seasons</p>
              <h3>TV Shows</h3>
            </div>
          </div>
          <div className="cover-2">
            <div className="cover-grad"></div>
            <div className="cover-text">
              <p className="sub-title">New &amp; Classics</p>
              <h3>Movies</h3>
            </div>
          </div>
          <div className="cover-3">
            <div className="cover-grad"></div>
            <div className="cover-text">
              <p className="sub-title">Groundbreaking</p>
              <h3>Hulu Originals</h3>
            </div>
          </div>
          <div className="cover-4">
            <div className="cover-grad"></div>
            <div className="cover-text">
              <p className="sub-title">Add-On</p>
              <h3>Premiums</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="live">
        <div className="live-border">
          <h4>Hulu + Live TV</h4>
          <p className="text-xl">Live TV Makes It Better</p>
          <p className="sub-text">
            Make the switch from cable. Get 75+ top channels with your favorite
            live sports, news, and events - plus the entire Hulu streaming
            library.
          </p>
          <p className="legal-text">
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. See details
          </p>
          <a href="#!">View Channels in Your Area</a>
        </div>
      </section>

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

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-lists">
            <ul>
              <li className="list-head">BROWSE</li>
              <li>
                <a href="#!">Streaming Library</a>
              </li>
              <li>
                <a href="#!">Live TV</a>
              </li>
              <li>
                <a href="#!">Live News</a>
              </li>
              <li>
                <a href="#!">Live Sports</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#!">TV Shows</a>
              </li>
              <li>
                <a href="#!">Movies</a>
              </li>
              <li>
                <a href="#!">Originals</a>
              </li>
              <li>
                <a href="#!">Networks</a>
              </li>
              <li>
                <a href="#!">Kids</a>
              </li>
              <li>
                <a href="#!">FX on Hulu</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#!">Hulu, Disney+, and ESPN+</a>
              </li>
              <li>
                <a href="#!">Disney Bundle</a>
              </li>
              <li>
                <a href="#!">HBO Max</a>
              </li>
              <li>
                <a href="#!">Cinimax</a>
              </li>
              <li>
                <a href="#!">Showtime</a>
              </li>
              <li>
                <a href="#!">STARZ</a>
              </li>
            </ul>
            <ul>
              <li className="list-head">HELP</li>
              <li>
                <a href="#!">Account &amp; Billing</a>
              </li>
              <li>
                <a href="#!">Plans &amp; Pricing</a>
              </li>
              <li>
                <a href="#!">Supported Devices</a>
              </li>
              <li>
                <a href="#!">Accesibility</a>
              </li>
            </ul>
            <ul>
              <li className="list-head">ABOUT US</li>
              <li>
                <a href="#!">Press</a>
              </li>
              <li>
                <a href="#!">Jobs</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="social-icons">
            <a href="#!">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#!">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#!">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="#!">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>

      <div className="modal">
        <div className="modal-box">
          <div className="modal-body">
            <h3>Log In</h3>
            <form>
              <div className="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
              </div>
              <p>
                <a href="#!">Forgot your email or password?</a>
              </p>
              <button className="btn btn-dark">Log In</button>
            </form>
          </div>
          <div className="modal-footer">
            <p>
              Don't have an account? <a href="#!">Start your free trial</a>
            </p>
          </div>
          <img src={close} alt="Close" className="close" />
        </div>
      </div>
    </>
  );
}

export default App;
