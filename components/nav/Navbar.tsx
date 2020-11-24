import * as React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => (
  <header>
    <Link href="/">
      <a>
        <strong>Hello, Pokko.</strong>
      </a>
    </Link>
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
      </ul>
    </nav>
  </header>
);
