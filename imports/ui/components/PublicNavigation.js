import React from 'react';
import { Link } from 'react-router';

const PublicNavigation = () => (
  <div className="text-right">
    <Link to="signup"><i></i>Sign Up</Link>
    <Link to="login">Seller Login</Link>
  </div>
);

export default PublicNavigation;
