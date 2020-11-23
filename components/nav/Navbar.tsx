import * as React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => (
  <header>
    <strong>Hello, Pokko.</strong>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
