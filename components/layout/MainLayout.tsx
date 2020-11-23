import * as React from "react";
import { Navbar } from "../nav/Navbar";

export const MainLayout: React.FC = ({ children }) => (
  <div className="main-layout">
    <Navbar />
    <main>{children}</main>
  </div>
);
