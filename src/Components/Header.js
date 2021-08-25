import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
            <h1>Filine Finder</h1>
        </a>
      </div>
      <div>
        <a href="#/Basket">
          Basket{' '}
          {props.countBasketItems ? (
            <button className="badge">{props.countBasketItems}</button>
          ) : (
            ''
          )}
        </a>
        <a href="#/Login"> LogIn</a>
      </div>
    </header>
  );
}