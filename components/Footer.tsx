import React from "react"
import { Flower2, Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <footer className="mt-16 border-t border-border bg-card/60 rounded-2xl p-8 sm:p-10 lg:p-12 mb-16 md:mb-0">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
    {/* Col 1: Brand */}
    <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2 text-primary font-heading font-semibold text-2xl tracking-tight">
    <Flower2 className="h-6 w-6 stroke-[1.75]" />
    <span>Petal & Stem</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">
    Your neighbourhood floral studio in Mill Valley. We craft thoughtful, garden-style arrangements inspired by California’s wild coastal flora.
    </p>
    <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
    <span>100% Foam-Free & Locally Sourced Stems</span>
    </div>
    </div>

    {/* Col 2: Navigation */}
    <div className="flex flex-col gap-3">
    <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Explore</h4>
    <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
    <li>
    <a href="#hero" className="hover:text-primary transition-colors">Welcome</a>
    </li>
    <li>
    <a href="#bouquets" className="hover:text-primary transition-colors">Seasonal Bouquets</a>
    </li>
    <li>
    <a href="#pricing" className="hover:text-primary transition-colors">Arrangements & Pricing</a>
    </li>
    <li>
    <a href="#hours" className="hover:text-primary transition-colors">Store Hours & Delivery</a>
    </li>
    <li>
    <a href="#contact" className="hover:text-primary transition-colors">Directions & Inquiries</a>
    </li>
    </ul>
    </div>

    {/* Col 3: Hours Summary */}
    <div className="flex flex-col gap-3">
    <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Studio Hours</h4>
    <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
    <div className="flex justify-between py-0.5 border-b border-border/50">
    <span>Tuesday – Friday</span>
    <span className="font-medium text-foreground">8:30 AM – 6:00 PM</span>
    </div>
    <div className="flex justify-between py-0.5 border-b border-border/50">
    <span>Saturday</span>
    <span className="font-medium text-foreground">9:00 AM – 5:00 PM</span>
    </div>
    <div className="flex justify-between py-0.5 border-b border-border/50">
    <span>Sunday</span>
    <span className="font-medium text-foreground">10:00 AM – 3:00 PM</span>
    </div>
    <div className="flex justify-between py-0.5 text-muted-foreground/80">
    <span>Monday</span>
    <span className="italic">Flower Market Sourcing (Closed)</span>
    </div>
    </div>
    </div>

    {/* Col 4: Contact & Direct Call */}
    <div className="flex flex-col gap-3">
    <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Find Us</h4>
    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
    <div className="flex items-start gap-2.5">
    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
    <span>428 Blossom Lane, Mill Valley, CA 94941</span>
    </div>
    <div className="flex items-center gap-2.5">
    <Phone className="h-4 w-4 text-primary shrink-0" />
    <a href="tel:5552347890" className="hover:text-primary transition-colors font-medium">
    (555) 234-7890
    </a>
    </div>
    <div className="flex items-center gap-2.5">
    <Mail className="h-4 w-4 text-primary shrink-0" />
    <a href="mailto:hello@petalandstemflowers.com" className="hover:text-primary transition-colors break-all">
    hello@petalandstemflowers.com
    </a>
    </div>
    </div>
    <div className="pt-2">
    <Button
    variant="outline"
    size="sm"
    className="w-full text-xs font-medium justify-between border-primary/25 hover:border-primary/50"
    onClick={scrollToTop}
    >
    <span>Back to Top</span>
    <ArrowUp className="h-3.5 w-3.5" />
    </Button>
    </div>
    </div>
    </div>

    <Separator className="my-8" />

    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
    <p>© {new Date().getFullYear()} Petal & Stem Florals. Crafted with care for our neighbourhood.</p>
    <p className="flex items-center gap-1">
    <span>Grown with patience, arranged with</span>
    <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline" />
    </p>
    </div>
    </footer>
  );
}

export { Footer };
