/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Body = () => (
  <div className="row">
    <div className="column">
      <p><b>Create an account</b></p>
      <p>Enter your email address to create an account:</p>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" />
        <br />
        <input type="submit" value="Create An Account" />
      </form>
    </div>
    <div className="column">
      <p><b>Already registered?</b></p>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" />
        <p><a href="#home">Forgot your password?</a></p>
        <input type="submit" value="Sign In" />
      </form>
    </div>
  </div>
);

export default Body;
