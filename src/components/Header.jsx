import React from "react";
import Logo from '../assets/images/Logo.svg'
const Header = () => {
    return (
      <>
        <div className="font-serif text-lg flex flex-col justify-between md:flex-row">
            <div className="py-5 md:py-0 md:basis-1/4 flex flex-row justify-center md:pl-10">
                <a href="/" className="m-auto w-full">
                    <img src={Logo} className="m-auto w-1/2 md:w-full"/>
                </a>
            </div>
            <div className="basis-1/2 content-center">
                <nav className="">
                    <ul className="flex flex-row justify-around py-10">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/reservation">Book a Table</a>
                        </li>
                        <li>
                            <a href="/reservation">Menu</a>
                        </li>
                        <li>
                            <a href="/reservation">Order Delivery</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </>
    );
};

export default Header;
