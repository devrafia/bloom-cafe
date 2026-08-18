import '../../styles/footer.css';

const SOCIALS = [
  { label: 'Instagram', href: '#', icon: '📷' },
  { label: 'Facebook', href: '#', icon: '📘' },
  { label: 'TikTok', href: '#', icon: '🎵' },
  { label: 'Pinterest', href: '#', icon: '📌' },
];

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 6:00 PM' },
];

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <h3 className="footer__logo">🌸 Bloom Café</h3>
          <p className="footer__tagline">Freshly brewed happiness in every cup.</p>

          <div className="footer__socials">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="footer__social-icon"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__hours">
          <h4>Opening Hours</h4>
          <ul>
            {HOURS.map((entry) => (
              <li key={entry.day}>
                <span>{entry.day}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Visit Us</h4>
          <p>12 Petal Lane, Rawalpindi</p>
          <p>hello@bloomcafe.com</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Bloom Café. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
