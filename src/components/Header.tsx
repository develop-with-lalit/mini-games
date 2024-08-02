"use client";

import { Navbar } from "flowbite-react";
// import { Link } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 w-full z-10 mb-2 rounded-lg shadow-sm"
    >
      <Navbar.Brand as={Link} to="/" id="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800 dark:text-white cursor-pointer">
          Mini-Games
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" className="cursor-pointer">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/card-matching" className="cursor-pointer">
          Card Matching
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/stone-paper-scissors"
          className="cursor-pointer"
        >
          Stone Paper Scissors
        </Navbar.Link>
        <Navbar.Link as={Link} to="/word-guess" className="cursor-pointer">
          Word Guess
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
