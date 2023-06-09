"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

export default function NavigationBar({ toggle }: { toggle: Function }) {
  const pathname = usePathname();

  return (
    <div
      id="navigation-bar"
      className="bg-navy text-offwhite mx-4 my-4 p-2 rounded"
    >
      <div className="flex flex-wrap align-text-bottom">
        <button className="md:hidden mr-2" onClick={() => toggle()}>
          <FaBars />
        </button>
        <h2 className="text-offwhite">Jeff Rossi</h2>
        <span className="text-bluegreen mx-2 font-bold">&nbsp;|&nbsp;</span>
        <h3 className="text-teal font-light">Software Developer</h3>
      </div>
      <nav className="hidden md:flex md:flex-wrap md:justify-between mt-2">
        <Link href="/" className={pathname == "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/employment"
          className={pathname == "/employment" ? "active" : ""}
        >
          Employment
        </Link>
        <Link
          href="/education"
          className={pathname == "/education" ? "active" : ""}
        >
          Education
        </Link>
        <Link
          href="/contact"
          className={pathname == "/contact" ? "active" : ""}
        >
          Contact
        </Link>
        <Link
          href="/references"
          className={pathname == "/references" ? "active" : ""}
        >
          References
        </Link>
        <Link
          href="/testimonials"
          className={pathname == "/testimonials" ? "active" : ""}
        >
          Testimonials
        </Link>
        <Link href="/resume" className={pathname == "/resume" ? "active" : ""}>
          Resume
        </Link>
        <Link href="/links" className={pathname == "/links" ? "active" : ""}>
          Links
        </Link>
      </nav>
    </div>
  );
}
