import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center p-3">
      &copy; {new Date().getFullYear()} My App. All Rights Reserved.
    </footer>
  );
}

export default Footer;
