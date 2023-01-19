import React from 'react';
import Mypic from '../Images/image.jpeg';
import './items.css';

const Items = () => (
  <>
    <div className="image-section">
      <div className="image">
        <img src={Mypic} alt="Shopping bag" />
      </div>
      <div className="img-title">
        <p>
          3pcs/Set Handbag Women Composite Bag PU Leather Shoulder
          Bag Large Capacity Handbag Purse Female Crossbody Bag
        </p>
        <p>$30</p>
        <div className="increment">
          <div>Quantity</div>
          <button type="button">-</button>
          <input type="text" value="1" />
          <button type="button">+</button>
        </div>
        <input type="submit" value="Add to Cart" />
      </div>
    </div>
    <div className="product-info">
      <div>
        <h2>Product details</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </>
);

export default Items;
