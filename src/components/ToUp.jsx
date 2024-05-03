import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

export default function ToUp() {
  const [y, setY] = useState(window.pageYOffset);

  const goToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const show = () => {
    const elem = document.getElementById('toUp');
    if (window.pageYOffset > 300) {
      elem.style.display = 'initial';
    } else {
      elem.style.display = 'none';
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', show);
    document.addEventListener('scroll', () => setY(window.pageYOffset));
    return () => {
      document.removeEventListener('scroll', show);
      document.removeEventListener('scroll', () => setY(window.pageYOffset));
    };
  }, [y]);

  return (
    <div className='toUp' id='toUp' onClick={goToUp}>
      <FaArrowUp className='icon' />
    </div>
  );
}
