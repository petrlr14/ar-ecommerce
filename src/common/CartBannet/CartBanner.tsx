import style from './CartBanner.module.css';

const CartBanner = () => {
  return (
    <section className={style.root}>
      <div className={`${style.item} ${style.options}`}>
        <h5>Your Product</h5>
        <p>
          <span>Select Options</span>
        </p>
      </div>
      <div className={`${style.item} ${style.sku}`}>
        <p>SKU:ODB0043-0B</p>
      </div>
      <div className={style.item} style={{ flex: 3 }}>
        <p className="price" style={{ textAlign: 'end' }}>
          $795
        </p>
        <div className={style.btnContainer}>
          <button className={style.btn} style={{ marginRight: 8 }}>
            Add to cart
          </button>
          <button className={style.btn} style={{ marginLeft: 8 }}>
            Get tearsheet
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartBanner;
