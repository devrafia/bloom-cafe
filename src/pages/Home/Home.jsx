import Hero from '../../components/Hero/Hero';
import FeaturedDrinks from '../../components/FeaturedDrinks/FeaturedDrinks';
import Footer from '../../components/Footer/Footer';
import '../../styles/home.css';

function Home() {
  return (
    <div className="page-enter">
      <Hero />
      <FeaturedDrinks />

      <section className="about" id="about">
        <div className="container about__inner">
          <div className="about__art" aria-hidden="true">
            <span className="about__blob" />
            <span className="about__leaf">🍃</span>
          </div>

          <div className="about__copy fade-in">
            <span className="eyebrow">Our Story</span>
            <h2>A little bloom of calm in your day</h2>
            <p>
              Bloom Café started as a tiny tea cart with one wish: to make
              people's days a little softer. Today we still steep every leaf
              by hand, source our beans and blends from small growers, and
              keep our corner of the city cozy, quiet, and warm. Whether
              you're here for a slow Sunday chai or a quick match latte
              between errands, we hope you leave a little lighter than you
              came.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
