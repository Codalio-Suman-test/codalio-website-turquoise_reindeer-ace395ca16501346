import React from "react"
import { Phone, Clock, MessageSquare, ArrowRight } from "lucide-react"
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function QuickCallBar() {
  const handleInquiryClick = () => {
  const el = document.getElementById("contact")
  if (el) {
  el.scrollIntoView({ behavior: "smooth" })
  }
  }
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-2.5 shadow-lg">
    <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
    <div className="flex flex-col min-w-0">
    <div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
    <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
    </span>
    <span className="truncate">Open Today • until 6 PM</span>
    </div>
    <p className="text-[11px] text-muted-foreground truncate">Same-day pickup & delivery</p>
    </div>
    <div className="flex items-center gap-2 shrink-0">
    <Button
    size="sm"
    variant="outline"
    className="h-9 px-3 gap-1.5 text-xs font-medium border-primary/30"
    onClick={handleInquiryClick}
    >
    <MessageSquare className="h-3.5 w-3.5" />
    <span>Inquire</span>
    </Button>
    <Button
    size="sm"
    className="h-9 px-3.5 gap-1.5 text-xs font-medium shadow-sm bg-primary text-primary-foreground hover:bg-primary/90"
    asChild
    >
    <a href="tel:5552347890">
    <Phone className="h-3.5 w-3.5" />
    <span>Call Shop</span>
    </a>
    </Button>
    </div>
    </div>
    </div>
  );
}

export { QuickCallBar };
