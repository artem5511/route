import React from 'react';
import {NavLink} from 'react-router-dom';

export const Notfoundpage = () => {

  return (
    <div>
        This page doesn't exist. Go <NavLink to="/">Home</NavLink>
    </div>
  );
}

