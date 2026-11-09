import React, { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Flower2, Phone, Sun, Moon, Menu, X, MapPin, Clock } from "lucide-react"
import { QuickCallBar } from "./QuickCallBar"
import { Footer } from "./Footer"
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const THEME_KEY = "petal-and-stem-theme"

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#bouquets", label: "Seasonal Bouquets" },
  { href: "#pricing", label: "Price List" },
  { href: "#hours", label: "Hours" },
  { href: "#contact", label: "Contact & Visit" },
]

export default function Layout() {
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ["hero", "bouquets", "pricing", "hours", "contact"]
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      localStorage.setItem(THEME_KEY, "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem(THEME_KEY, "light")
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Top Banner Notice */}
      <div className="bg-primary/10 border-b border-primary/15 text-primary text-xs py-1.5 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="hidden sm:inline">🌸 Hand-tied with seasonal California blooms.</span>
          <span>Order before 1:00 PM for guaranteed same-day Mill Valley delivery.</span>
          <a href="tel:5552347890" className="underline font-semibold hover:opacity-80 ml-1">
            (555) 234-7890
          </a>
        </div>
      </div>

      {/* Sticky Main Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-card/90 backdrop-blur-md border-border shadow-xs"
            : "bg-card/70 backdrop-blur-sm border-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md py-1"
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Flower2 className="h-5 w-5 stroke-[1.8]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-xl sm:text-2xl tracking-tight text-foreground leading-none">
                Petal &amp; Stem
              </span>
              <span className="text-[11px] font-sans text-muted-foreground tracking-wider uppercase mt-0.5">
                Neighbourhood Florist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone quick link (desktop) */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-medium border-border/80 hover:border-primary/40 text-foreground"
              asChild
            >
              <a href="tel:5552347890">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>(555) 234-7890</span>
              </a>
            </Button>

            {/* Quick Order button */}
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs sm:text-sm px-3.5 sm:px-4 shadow-sm"
              onClick={() => {
                const el = document.getElementById("contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Order Bouquets
            </Button>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Navigation Sheet */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-md border-border">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[360px] p-6 flex flex-col justify-between">
                  <div>
                    <SheetHeader className="text-left mb-6">
                      <SheetTitle className="flex items-center gap-2.5 font-heading text-2xl text-foreground">
                        <Flower2 className="h-5 w-5 text-primary" />
                        <span>Petal &amp; Stem</span>
                      </SheetTitle>
                      <p className="text-xs text-muted-foreground">
                        Fresh botanical arrangements in Mill Valley, CA
                      </p>
                    </SheetHeader>

                    <div className="flex flex-col gap-1.5 py-4">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <a
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors"
                          >
                            <span>{link.label}</span>
                          </a>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-border pt-6">
                    <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      <span>Tue–Sat 8:30 AM – 6 PM • Sun 10–3</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span>428 Blossom Lane, Mill Valley, CA</span>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground gap-2 mt-2" asChild>
                      <a href="tel:5552347890">
                        <Phone className="h-4 w-4" />
                        <span>Call (555) 234-7890</span>
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area owning the Page Frame */}
      <main className="max-w-7xl mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex-1">
        <Outlet />
        <Footer />
      </main>

      {/* Mobile Sticky Quick Action Bar */}
      <QuickCallBar />
    </div>
  )
}
