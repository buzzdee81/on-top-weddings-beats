
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Start", href: "#home" },
  { title: "Über Uns", href: "#about" },
  { title: "Band", href: "#band-members" },
  { title: "Repertoire", href: "#repertoire" },
  { title: "Media", href: "#media" },
  { title: "Kontakt", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-bold font-serif text-brand-purple-dark">
            On Top
          </span>
          <span className="ml-2 text-sm text-gray-600 hidden sm:block">
            Hochzeits- & Eventband
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-brand-purple font-medium text-sm transition-colors"
            >
              {item.title}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-purple text-white px-5 py-2 rounded-md font-medium hover:bg-brand-purple-dark transition-colors"
          >
            Anfragen
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 transition-transform duration-300 flex flex-col pt-20",
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="container flex flex-col space-y-6 pt-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-800 hover:text-brand-purple text-xl font-medium py-2 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                {item.title}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-purple text-white px-5 py-3 rounded-md font-medium hover:bg-brand-purple-dark transition-colors text-center mt-4"
              onClick={closeMobileMenu}
            >
              Jetzt unverbindlich anfragen!
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
