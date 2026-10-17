import React from 'react';
import { nav } from '../data';

const NavMobile = ({ navMobile, onAuth }) => {
  return (
    <nav className={`${navMobile ? 'min-h-screen opacity-100 pointer-events-auto' : 'min-h-0 opacity-0 pointer-events-none'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all duration-300 h-0`}>
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item) => (
          <li key={item.name}>
            <a onClick={() => {}} className="text-white text-body-md hover:text-primary-200" href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="-mt-44 flex justify-center gap-x-8">
        <button type="button" onClick={() => onAuth('login')} className="btn btn-lg text-white">Log in</button>
        <button type="button" onClick={() => onAuth('signup')} className="btn btn-lg btn-primary">Sign up</button>
      </div>
    </nav>
  );
};

export default NavMobile;