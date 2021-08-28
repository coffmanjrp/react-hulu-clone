import { logo } from '../img';

const Header = () => {
  return (
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
        <p className="header-text-1">Watch thousands of TV shows and movies.</p>
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
  );
};

export default Header;
