import React, { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between relative px-4">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Blog Logo" h={32} w={32} />
        <span>Blog App</span>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`w-full h-screen flex flex-col gap-10 text-lg items-center justify-center 
          absolute top-16 right-0 bg-white transition-all duration-300 ease-in-out 
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/trending" onClick={() => setOpen(false)}>Trending</Link>
          <Link to="/popular" onClick={() => setOpen(false)}>Most Popular</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>

          <SignedOut>
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Sign In 👋
              </button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/popular">Most Popular</Link>
        <Link to="/about">About</Link>

        <SignedOut>
          <Link to="/loggin">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
