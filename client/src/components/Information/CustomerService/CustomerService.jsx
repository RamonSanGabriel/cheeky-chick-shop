import css from './CustomerService.module.css';

const CustomerService = () => {
  return (
    <div className={css.serviceWrapper}>
      <h6> Services</h6>
      <ul>
        <div className={css.serviceContainer}>
          <li className={css.service}>
            <span className={css.serviceSpan}>
              <p>Help centre</p>
            </span>
          </li>
          <li className={css.service}>
            <span className={css.serviceSpan}>
              <p>Return & Refund</p>
            </span>
          </li>
          <li className={css.service}>
            <span className={css.serviceSpan}>
              <p>Contact Us</p>
            </span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default CustomerService;
