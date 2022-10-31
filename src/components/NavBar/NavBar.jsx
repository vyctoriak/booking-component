import { House } from 'phosphor-react';
import './NavBar.scss';
import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar__container">
      <ul>
        <li>
          <House size={40} />
        </li>
        <li>Book a reservation</li>
        <li>See your bookings</li>
      </ul>
    </nav>
  );
}
