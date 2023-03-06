import React, { useEffect, useRef } from "react";

import '../../styles/5 layer1/Phones4.css'
import Phone1 from '../../images/4-iphone1.png';
import Phone2 from '../../images/4-iphone2.png';
import Phone3 from '../../images/4-iphone3.png';

function Phones4() {
  const phonesContainer = useRef(null);

  useEffect(() => {
    const phonesContainerCurrent = phonesContainer.current;
    const phones = phonesContainerCurrent.querySelectorAll("img");

    const fadeInOnScroll = () => {
      phones.forEach((phone, index) => {
        const phoneOffsetTop = phone.offsetTop;
        const phoneHeight = phone.clientHeight;
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;

        if (scrollTop > phoneOffsetTop - windowHeight + phoneHeight * 0.2) {
          phone.classList.add("fade-in-up");
        }
      });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    return () => window.removeEventListener("scroll", fadeInOnScroll);
  }, []);

  return (
    <div className="phones-wrapper">
      <div className="phones-container" ref={phonesContainer}>
        <img src={Phone1} alt="phone1" className="phone1" />
        <img src={Phone2} alt="phone2" className="phone2" />
        <img src={Phone3} alt="phone3" className="phone3" />
      </div>
    </div>
  );
}
  
export default Phones4;
