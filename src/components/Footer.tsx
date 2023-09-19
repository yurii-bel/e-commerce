import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-white text-xs pb-1">
      &copy; {currentYear} YB. All rights reserved.
    </footer>
  );
};

export default Footer;
