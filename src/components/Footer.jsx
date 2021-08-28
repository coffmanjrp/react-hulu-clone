import { footerLinks, socialMedias } from '../utils/footerData';
import unescapeHTML from '../lib/unescapeHTML';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-lists">
          {footerLinks.length > 0 &&
            footerLinks.map((items, index) => (
              <ul key={index}>
                {items.map((item) =>
                  item.isHead ? (
                    <li key={item.id} className="list-head">
                      {unescapeHTML(item.text)}
                    </li>
                  ) : (
                    <li key={item.id}>
                      <a href={item.link}>{unescapeHTML(item.text)}</a>
                    </li>
                  )
                )}
              </ul>
            ))}
        </div>
        <div className="divider"></div>
        <div className="social-icons">
          {socialMedias.length > 0 &&
            socialMedias.map((media) => (
              <a key={media.id} href={media.link}>
                <img src={media.icon} alt={media.alt} />
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
