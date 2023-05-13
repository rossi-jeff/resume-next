"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWindowClose } from "react-icons/fa";

export default function LeftPanel({ toggle }: { toggle: Function }) {
  const pathname = usePathname();
  return (
    <div id="left-panel">
      <div className="text-right">
        <button className="py-1 font-bold" onClick={() => toggle()}>
          <FaWindowClose />
        </button>
      </div>
      <nav className="flex flex-col">
        <Link
          href="/"
          className={pathname == "/" ? "active" : ""}
          onClick={() => toggle()}
        >
          Home
        </Link>
        <Link
          href="/employment"
          className={pathname == "/employment" ? "active" : ""}
          onClick={() => toggle()}
        >
          Employment
        </Link>
        <Link
          href="/education"
          className={pathname == "/education" ? "active" : ""}
          onClick={() => toggle()}
        >
          Education
        </Link>
        <Link
          href="/contact"
          className={pathname == "/contact" ? "active" : ""}
          onClick={() => toggle()}
        >
          Contact
        </Link>
        <Link
          href="/references"
          className={pathname == "/references" ? "active" : ""}
          onClick={() => toggle()}
        >
          References
        </Link>
        <Link
          href="/testimonials"
          className={pathname == "/testimonials" ? "active" : ""}
          onClick={() => toggle()}
        >
          Testimonials
        </Link>
        <Link
          href="/resume"
          className={pathname == "/resume" ? "active" : ""}
          onClick={() => toggle()}
        >
          Resume
        </Link>
        <Link
          href="/links"
          className={pathname == "/links" ? "active" : ""}
          onClick={() => toggle()}
        >
          Links
        </Link>
      </nav>
    </div>
  );
}
