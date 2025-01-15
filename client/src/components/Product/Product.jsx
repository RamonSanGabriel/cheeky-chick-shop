import css from './Product.module.css';

const Product = ({ array }) => {
  return (
    <div>
      {/* <h3>Product Details</h3> */}
      <div className={css.productArrContainer}>
        {array.map((array) => {
          return (
            <div className={css.productContainer} key={array.id}>
              <div className={css.productImageContainer}>
                <img
                  className={css.productImage}
                  src={array.images[0]}
                  alt={array.title}
                />
              </div>

              <div className={css.productListWrapper}>
                <ul className={css.productList}>
                  <div className={css.productImageContent}>
                    <li className={css.productListItem}>
                      <div className={css.productListPrice}>
                        <p>₱ {array.price}</p>
                      </div>
                    </li>
                  </div>

                  <div className={css.productImageContent}>
                    <li className={css.productListItem}>
                      <div className={css.productListTitle}>
                        <h2>{array.title}</h2>
                      </div>
                    </li>
                  </div>

                  <div className={css.productImageContent}>
                    <li className={css.productListItem}>
                      <div className={css.productListStock}>
                        <p>Stock: {array.stock}</p>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
