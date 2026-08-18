import { Link } from 'react-router-dom';
import CupIllustration from '../CupIllustration/CupIllustration';
import '../../styles/home.css';

function Hero() {
  return (
    <section className="hero">
      {/* Soft animated background blobs — purely decorative */}
      <div className="hero__blob hero__blob--sage" aria-hidden="true" />
      <div className="hero__blob hero__blob--pink" aria-hidden="true" />
      <div className="hero__blob hero__blob--beige" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy fade-in">
          <span className="eyebrow">Bloom Café · Tea &amp; Drinks</span>
          <h1 className="hero__heading">
            Freshly brewed <em>happiness</em> in every cup
          </h1>
          <p className="hero__subtitle">
            A cozy little corner for slow mornings, warm chai, and quiet
            afternoons — steeped just for you.
          </p>
          <Link to="/drinks" className="btn btn-primary hero__cta">
            Explore Drinks
          </Link>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__cup hero__cup--main">
            <CupIllustration category="spice" temp="hot" />
          </div>
          <div className="hero__cup hero__cup--float-1">
            <CupIllustration category="green" temp="hot" />
          </div>
          <div className="hero__cup hero__cup--float-2">
            <CupIllustration category="fruit" temp="cold" />
          </div>
          <span className="hero__petal hero__petal--1">🌸</span>
          <span className="hero__petal hero__petal--2">🍃</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
