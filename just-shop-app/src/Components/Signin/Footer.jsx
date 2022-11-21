/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Footer = () => (
  <div className="footer">
    <div>
      <p className="title">Help</p>
      <p>Contact us</p>
      <p>About us</p>
      <p>Terms and conditions</p>
      <p>Privacy policy</p>
    </div>
    <div>
      <p className="title">Support</p>
      <p>Warranty and return</p>
      <p>Payment information</p>
      <p>Shippng guide</p>
      <p>Custom and tax</p>
    </div>
    <div>
      <p className="title">Follow us on Email</p>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" />
        <br />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  </div>
);
export default Footer;
