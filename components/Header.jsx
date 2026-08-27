"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ROOM_LINKS = [
  { href: "/the-vanishing-hour.html", label: "The Vanishing Hour" },
  { href: "/blackout-cabin.html", label: "Blackout Cabin" },
  { href: "/dinner-at-eight.html", label: "Dinner at Eight" },
  { href: "/the-gallery-job.html", label: "The Gallery Job" },
  { href: "/last-stand.html", label: "Last Stand" },
];

const ABOUT_LINKS = [
  { href: "/about-us.html", label: "About Us" },
  { href: "/faq.html", label: "FAQ" },
  { href: "/location.html", label: "Location" },
  { href: "/reviews.html", label: "Reviews" },
];

function HeaderNav({ pathname }) {
  const [navOpen, setNavOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);

  useEffect(() => {
    if (!openDrop) return;
    const closeAll = () => setOpenDrop(null);
    document.addEventListener("click", closeAll);
    return () => document.removeEventListener("click", closeAll);
  }, [openDrop]);

  const current = (href) => (pathname === href ? { "aria-current": "page" } : {});

  return (
    <>
      <button
        className="nav-toggle"
        aria-label="Menu"
        aria-expanded={navOpen}
        onClick={() => setNavOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav-links${navOpen ? " open" : ""}`} aria-label="Main">
        <Link href="/" {...current("/")}>
          Home
        </Link>

        <div className={`nav-drop${openDrop === "rooms" ? " open" : ""}`}>
          <button
            aria-expanded={openDrop === "rooms"}
            onClick={(e) => {
              e.stopPropagation();
              setOpenDrop((d) => (d === "rooms" ? null : "rooms"));
            }}
          >
            Rooms
          </button>
          <div className="nav-drop-menu">
            {ROOM_LINKS.map((l) => (
              <Link key={l.href} href={l.href} {...current(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/parties-and-events.html" {...current("/parties-and-events.html")}>
          Parties &amp; Events
        </Link>

        <div className={`nav-drop${openDrop === "about" ? " open" : ""}`}>
          <button
            aria-expanded={openDrop === "about"}
            onClick={(e) => {
              e.stopPropagation();
              setOpenDrop((d) => (d === "about" ? null : "about"));
            }}
          >
            About
          </button>
          <div className="nav-drop-menu">
            {ABOUT_LINKS.map((l) => (
              <Link key={l.href} href={l.href} {...current(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/contact.html" {...current("/contact.html")}>
          Contact
        </Link>
        <a className="nav-phone" href="tel:2175550182">
          (217) 555-0182
        </a>
        <Link className="nav-cta" href="/book-a-game.html" {...current("/book-a-game.html")}>
          Book Now
        </Link>
      </nav>
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${isStuck ? " is-stuck" : ""}`}>
      <div className="bar">
        <Link className="logo" href="/">
          CIPHER <span className="red">& KEY</span>
        </Link>
        <HeaderNav key={pathname} pathname={pathname} />
      </div>
    </header>
  );
}
