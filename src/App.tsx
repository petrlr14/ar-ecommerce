import style from './App.module.css';
import CartBanner from './common/CartBannet/CartBanner';
import Image from './common/Image/Image';

function App() {
  return (
    <div className={style.root}>
      <main className={style.main}>
        <div className={style.img}>
          <Image />
        </div>
        <div className={style.info}>
          <div className={style.head}>
            <h2>OUTDOOR BEACON TORCH SCONCE</h2>
            <p>ODB0043-0B</p>
            <p>
              <span className="price">$795.00</span>
            </p>
          </div>
          <div>
            <p>
              Reinterpreting old-world lantern silhouettes, Beacon outdoor
              fixtures offer a timeless yet relevant look that suits a wide
              range of architectural styles. Like all our outdoor products,
              Beacon is finished with super durable, high-performance AAMA 2604
              finishes and is guaranteed to last for as long as you own the
              fixture.
            </p>
            <p>
              Please note: The Opal glass color option will no longer be
              available after 6/30/21
            </p>
            <div className={style.view}>
              <a href="www.google.com">View Product Specifications</a>
              <a href="www.google.com">View Vide</a>
            </div>
          </div>
          <div className={style.varianContainer}>
            <div className={style.variant}>
              <img
                src="https://mk0hammertonmuln2rta.kinstacdn.com/wp-content/uploads/sites/3/2019/01/SB-Statuary-Bronze-135x135.jpg"
                alt=""
              />
              <span>Statuary Bronze</span>
            </div>
            <div className={style.variant}>
              <img
                src="https://mk0hammertonmuln2rta.kinstacdn.com/wp-content/uploads/sites/3/2019/01/AG-Argento-Grey-135x135.jpg"
                alt=""
              />
              <span>Argento Grey</span>
            </div>
            <div className={style.variant}>
              <img
                src="https://mk0hammertonmuln2rta.kinstacdn.com/wp-content/uploads/sites/3/2019/01/TB-Textured-Black-135x135.jpg"
                alt=""
              />
              <span>Texture Black</span>
            </div>
          </div>
        </div>
      </main>
      <CartBanner />
    </div>
  );
}

export default App;
