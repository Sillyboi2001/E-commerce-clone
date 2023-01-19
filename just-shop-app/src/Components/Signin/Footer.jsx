import React from 'react';
import Button from '../Button/Button';
import InputField from '../TextInputField/InputField';

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
        <InputField
          type="email"
          label="Email"
        />
        <br />
        <Button
          value="Subscribe"
        />
      </form>
    </div>
  </div>
);

export default Footer;
