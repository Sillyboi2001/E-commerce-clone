/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import InputField from '../TextInputField/InputField';
import Button from '../Button/Button';

const Body = () => (
  <div className="row">
    <div className="column">
      <p><b>Create an account</b></p>
      <p>Enter your email address to create an account:</p>
      <form>
        <InputField
          type="email"
          label="Email"
        />
        <br />
        <Button
          value="Create An Account"
        />
      </form>
    </div>
    <div className="column">
      <p><b>Already registered?</b></p>
      <form>
        <InputField
          type="email"
          label="Email"
        />
        <br />
        <InputField
          type="password"
          label="Password"
        />
        <p><a href="#home">Forgot your password?</a></p>
        <Button
          value="Sign In"
        />
      </form>
    </div>
  </div>
);

export default Body;
