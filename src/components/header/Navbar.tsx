"use client";
import { careSupportLinks, navbarLinks } from "@/libs/navbarLinks";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "../common/Button";

function Navbar({ isDark }: { isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstHovered, setIsFirstHovered] = useState(false);

  return (
    <div className="relative">
      <nav
        className={`flex items-center justify-between px-6 md:px-8 py-6 lg:px-4 relative z-20 transition-colors duration-300 ${
          isOpen || isFirstHovered ? "bg-white" : "bg-transparent"
        } ${isDark ? "text-black bg-white" : "text-white"}`}
      >
        <div className="flex items-center">
          <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ul className="hidden md:flex items-center space-x-8">
            {navbarLinks.map((link, index) => (
              <li
                key={index}
                className={`${
                  index === 0 ? "relative group/navitem" : ""
                }`}
                onMouseEnter={
                  index === 0 ? () => setIsFirstHovered(true) : undefined
                }
                onMouseLeave={
                  index === 0 ? () => setIsFirstHovered(false) : undefined
                }
              >
                <a className={`${!isOpen && isFirstHovered ? "invert" : ""}`} href={link.href}>{link.label}</a>
                {index === 0 && (
                  <div className="absolute left-0 top-full w-screen bg-white shadow-lg opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-200">
                    <div className="max-w-screen mx-auto px-6 py-6 grid grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <h4 className="font-bold text-gray-800">Category 1</h4>
                        <a href="#" className="text-gray-600 hover:text-black">
                          Option 1
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black">
                          Option 2
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black">
                          Option 3
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/images/logo.svg"
          alt="Blunt Logo"
          width={100}
          height={50}
          className={`${isDark ? "" : "invert"}`}
        />
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-3 relative group">
            <div className={`${!isOpen && isFirstHovered ? "invert" : ""} cursor-pointer`}>Care & Support</div>
            <div className="absolute top-full left-0 mt-8 w-96 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
              <div className="p-4 flex flex-col space-y-2">
                {careSupportLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-secondary hover:underline-offset-1px"
                  >
                    {item.label}
                  </Link>
                ))}
                <div>
                  <div className="text-secondary font-bold my-5">
                    Join B Hub
                  </div>
                  <div className="grid lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-1">
                      <Image
                        src="/images/extended-warranty.svg"
                        alt="Join B Hub"
                        width={20}
                        height={20}
                      />
                      <p className="text-secondary font-extralight text-xs">
                        Extended Warranty
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <Image
                        src="/images/rapairs-and-live-tracking.svg"
                        alt="Join B Hub"
                        width={20}
                        height={20}
                      />
                      <p className="text-secondary font-extralight text-xs">
                        Repairs and Live Tracking
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <Image
                        src="/images/exclusive-offers.svg"
                        alt="Join B Hub"
                        width={20}
                        height={20}
                      />
                      <p className="text-secondary font-extralight text-xs">
                        Exclusive Offers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-2">
                  <Button buttonText={"Learn More"} />
                </div>
              </div>
            </div>
          </div>

          <div className={`flex space-x-6 ${isDark ? "" : "invert"}`}>
            <Image
              src="/images/search.svg"
              alt="Search"
              width={20}
              height={20}
            />
            <Image
              src="/images/profile.svg"
              alt="Profile"
              width={20}
              height={20}
            />
            <Image
              src="/images/cart.svg"
              alt="Cart"
              width={20}
              height={20}
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-50% bg-primary bg-opacity-95 text-secondary flex flex-col items-start px-6 py-8 space-y-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 left-6 z-20"
          >
            <X size={28} />
          </button>

          <ul className="flex flex-col items-start space-y-1 mt-12">
            {navbarLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="block text-lg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center space-y-2 w-full text-center">
            <span>Care & Support</span>
            <span>Ship to</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
