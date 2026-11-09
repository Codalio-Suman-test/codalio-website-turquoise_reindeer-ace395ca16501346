import { AlertCircle, ArrowRight, Calendar, Car, Check, CheckCircle, CheckCircle2, Clock, Droplets, Flower2, Heart, HelpCircle, Info, Mail, MapPin, Navigation, Phone, Plus, Send, ShieldCheck, Sparkles, Sun, Truck, Wind } from "lucide-react";
import React, { useMemo, useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";

function LandingSection0() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [consultationSubmitted, setConsultationSubmitted] = useState(false)
  const [consultForm, setConsultForm] = useState({
    name: "",
    phone: "",
    date: "",
    notes: "",
  })

  const handleQuickConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setConsultationSubmitted(true)
  }
  return (
    <section id="hero" className="relative rounded-3xl overflow-hidden border border-border/70 bg-gradient-to-br from-card via-muted/30 to-accent/20 p-6 sm:p-10 lg:p-14 shadow-sm">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Story & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="outline" className="px-3 py-1 bg-card/80 border-primary/30 text-primary text-xs font-medium gap-1.5 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              <span>Spring 2025 Seasonal Collection Now In Bloom</span>
            </Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Same-Day Pickup Available
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Fresh, seasonal blooms for life's quiet and celebratory moments.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hand-tied botanical arrangements crafted daily with locally sourced stems, fragrant garden roses, and wild eucalyptus. Rooted in Mill Valley, designed with gentle care.
            </p>
          </div>

          {/* Action Buttons & Quick Consultation Modal */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm sm:text-base px-6 h-12 shadow-sm gap-2">
                  <span>Order Seasonal Bouquets</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[480px]">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-foreground flex items-center gap-2">
                    <Flower2 className="h-5 w-5 text-primary" />
                    <span>Reserve a Custom Floral Order</span>
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    Tell us your preferred flower style or special occasion. Our florist will prepare it fresh for pickup or delivery.
                  </DialogDescription>
                </DialogHeader>

                {consultationSubmitted ? (
                  <div className="py-8 text-center flex flex-col items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">Inquiry Received!</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      We'll review your bouquet preferences and confirm availability within 30 minutes during shop hours.
                    </p>
                    <Button variant="outline" className="mt-2" onClick={() => { setConsultationSubmitted(false); setIsOrderModalOpen(false) }}>
                      Done
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickConsultationSubmit} className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="cust-name" className="text-xs font-medium">Your Name</Label>
                      <Input id="cust-name" placeholder="e.g. Clara Evans" required value={consultForm.name} onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="cust-phone" className="text-xs font-medium">Phone Number</Label>
                        <Input id="cust-phone" type="tel" placeholder="(555) 000-0000" required value={consultForm.phone} onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="cust-date" className="text-xs font-medium">Target Date</Label>
                        <Input id="cust-date" type="date" value={consultForm.date} onChange={(e) => setConsultForm({ ...consultForm, date: e.target.value })} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="cust-notes" className="text-xs font-medium">Occasion or Floral Preferences</Label>
                      <Textarea id="cust-notes" rows={3} placeholder="e.g. Soft pastel anniversary bouquet, love garden roses and eucalyptus..." value={consultForm.notes} onChange={(e) => setConsultForm({ ...consultForm, notes: e.target.value })} />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">Or call directly at (555) 234-7890</span>
                      <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                        Send Request
                      </Button>
                    </div>
                  </form>
                )}
              </DialogContent>
            </Dialog>

            <Button
              size="lg"
              variant="outline"
              className="h-12 px-5 text-sm sm:text-base border-border bg-card/70 hover:bg-muted font-medium text-foreground gap-2"
              asChild
            >
              <a href="tel:5552347890">
                <Phone className="h-4 w-4 text-primary" />
                <span>Call (555) 234-7890</span>
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/60">
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg text-foreground">100%</span>
              <span className="text-xs text-muted-foreground">Locally Sourced</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg text-foreground">Foam-Free</span>
              <span className="text-xs text-muted-foreground">Eco Botanical Wraps</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg text-foreground">Daily Fresh</span>
              <span className="text-xs text-muted-foreground">Hand-Tied Morning Cuts</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-border/80 group">
            <img
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80"
              alt="Artisanal hand-tied seasonal bouquet with soft garden roses, eucalyptus, and wild field blooms"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            {/* Floating Accent Card at Top */}
            <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-md border border-border/80 rounded-xl px-3.5 py-2 shadow-sm flex items-center gap-2">
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground">Petal &amp; Stem Signature</span>
                <span className="text-[11px] text-muted-foreground">Hand-picked this morning</span>
              </div>
            </div>

            {/* Bottom Scrim Content */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                  Featured Bouquet of the Week
                </span>
                <span className="text-sm font-semibold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white">
                  From $58
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                The Wild Coast Posy
              </h2>
              <p className="text-xs sm:text-sm text-white/90 line-clamp-2">
                Blush David Austin garden roses, dried bunny tails, silver dollar eucalyptus, and sweet peas wrapped in organic linen paper.
              </p>

              <div className="flex items-center gap-3 pt-2 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Mill Valley Studio
                </span>
                <span>•</span>
                <span>Includes glass vase option</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingSection1() {
  type BouquetItem = {
    id: string
    name: string
    category: string
    price: string
    badge?: string
    fragrance: string
    vibe: string
    description: string
    stems: string[]
    image: string
  }

  const bouquetsData: BouquetItem[] = [
    {
      id: "wild-coast",
      name: "The Wild Coast Posy",
      category: "pastels",
      price: "$58",
      badge: "Most Popular",
      fragrance: "High Fragrance",
      vibe: "Soft & Romantic",
      description: "Blush garden roses paired with fluffy sweet peas, ranunculus, and wild coastal eucalyptus wrapped in embossed kraft paper.",
      stems: ["Peach Avalanche Roses", "Butterfly Ranunculus", "Lavender Sweet Peas", "Seeded Eucalyptus", "White Veronica"],
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sonoma-sun",
      name: "Sonoma Meadow Gathering",
      category: "wild",
      price: "$72",
      badge: "Seasonal Pick",
      fragrance: "Earthy Botanical",
      vibe: "Lush Wildflower",
      description: "Sun-drenched yellow chamomile, golden garden spray roses, Queen Anne's lace, and fragrant herbs grown along the Russian River.",
      stems: ["Golden Mustard Roses", "Feverfew Chamomile", "Queen Anne's Lace", "Olive Foliage", "Yellow Craspedia"],
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "blush-peony",
      name: "Mill Valley Garden Peony",
      category: "pastels",
      price: "$88",
      badge: "Spring Harvest",
      fragrance: "Sweet Rose & Citrus",
      vibe: "Opulent & Tender",
      description: "Lush French double-flowering peonies with white astilbe, spray lisianthus, and velvety dusty miller leaves.",
      stems: ["Sarah Bernhardt Peonies", "White Lisianthus", "Pink Astilbe", "Dusty Miller", "Italian Ruscus"],
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "terracotta-sunset",
      name: "Terracotta & Russet Centerpiece",
      category: "wild",
      price: "$95",
      badge: "Artisanal",
      fragrance: "Woody Mint & Cedar",
      vibe: "Warm Earth Tones",
      description: "Toffee garden roses, terracotta carnations, bronze amaranth, and textured hypericum berries in a ceramic pedestal style.",
      stems: ["Toffee Roses", "Antigua Terracotta Carnations", "Trailing Amaranth", "Eucalyptus Willow", "Hypericum Berries"],
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "everlasting-cloud",
      name: "Everlasting Linen Cloud",
      category: "everlasting",
      price: "$65",
      badge: "Lasts 1+ Years",
      fragrance: "Subtle Lavender",
      vibe: "Dried Botanicals",
      description: "Naturally preserved bunny tails, dried French lavender, bleached ruscus, strawflowers, and lunaria honesty pods.",
      stems: ["Preserved Bunny Tails", "Dried French Lavender", "Golden Strawflowers", "Bleached Ruscus", "Lunaria Pods"],
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "botanical-whisper",
      name: "Morning Dew Botanical Posy",
      category: "pastels",
      price: "$48",
      badge: "Desk Size",
      fragrance: "Fresh Mint & Citrus",
      vibe: "Delicate & Crisp",
      description: "Crisp white anemones with dark midnight centers, viburnum green snowball blooms, and wild herbs.",
      stems: ["White Panda Anemones", "Snowball Viburnum", "Mint Leaves", "Green Bell Thlaspi", "Freesia"],
      image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBouquet, setSelectedBouquet] = useState<BouquetItem | null>(null)

  const filteredBouquets = selectedCategory === "all"
    ? bouquetsData
    : bouquetsData.filter((b) => b.category === selectedCategory)

  const handleSelectForInquiry = (bouquetName: string) => {
    const el = document.getElementById("contact")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      window.setTimeout(() => {
        const textarea = document.getElementById("inquiry-message") as HTMLTextAreaElement | null
        if (textarea) {
          textarea.value = `Hi Petal & Stem! I would love to order the "${bouquetName}". Could you let me know pickup/delivery availability?`
          textarea.focus()
        }
      }, 400)
    }
  }
  return (
    <section id="bouquets" className="flex flex-col gap-8 scroll-mt-24 py-12 md:py-16">
      {/* Header & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2 max-w-2xl">
          <Badge variant="outline" className="w-fit text-primary border-primary/30 text-xs px-2.5 py-0.5">
            Fresh Daily Harvest
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            This Week's Seasonal Harvest
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Curated with the best stems from nearby organic flower growers in Marin and Sonoma. Available for same-day neighbourhood pickup or delivery.
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 bg-muted/60 p-1">
            <TabsTrigger value="all" className="text-xs sm:text-sm">All Harvest</TabsTrigger>
            <TabsTrigger value="pastels" className="text-xs sm:text-sm">Romantic</TabsTrigger>
            <TabsTrigger value="wild" className="text-xs sm:text-sm">Wild & Field</TabsTrigger>
            <TabsTrigger value="everlasting" className="text-xs sm:text-sm">Everlasting</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Bouquets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBouquets.map((bouquet) => (
          <Card
            key={bouquet.id}
            className="group overflow-hidden flex flex-col border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-md bg-card"
          >
            {/* Photo Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <img
                src={bouquet.image}
                alt={bouquet.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Badges on Image */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {bouquet.badge && (
                  <Badge className="bg-primary/95 text-primary-foreground text-[11px] font-medium shadow-xs">
                    {bouquet.badge}
                  </Badge>
                )}
                {bouquet.fragrance && (
                  <Badge variant="secondary" className="bg-card/90 text-foreground text-[11px] backdrop-blur-xs font-medium">
                    {bouquet.fragrance}
                  </Badge>
                )}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-xs font-medium drop-shadow-sm">{bouquet.vibe}</span>
                <span className="text-lg font-heading font-semibold drop-shadow-sm">{bouquet.price}</span>
              </div>
            </div>

            {/* Content */}
            <CardHeader className="p-5 pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="font-heading text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {bouquet.name}
                </CardTitle>
              </div>
              <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mt-1">
                {bouquet.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="px-5 py-2 flex-1 flex flex-col justify-end">
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                {bouquet.stems.slice(0, 3).map((stem, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-medium"
                  >
                    {stem}
                  </span>
                ))}
                {bouquet.stems.length > 3 && (
                  <span className="text-[11px] px-1.5 py-0.5 text-muted-foreground">
                    +{bouquet.stems.length - 3} more
                  </span>
                )}
              </div>
            </CardContent>

            <CardFooter className="p-5 pt-3 flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs font-medium border-border/80 hover:bg-muted"
                onClick={() => setSelectedBouquet(bouquet)}
              >
                <Info className="h-3.5 w-3.5 mr-1 text-primary" />
                <span>Details & Stems</span>
              </Button>
              <Button
                size="sm"
                className="w-full text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => handleSelectForInquiry(bouquet.name)}
              >
                <span>Order</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Bouquet Detail Modal */}
      <Dialog open={!!selectedBouquet} onOpenChange={(open) => !open && setSelectedBouquet(null)}>
        {selectedBouquet && (
          <DialogContent className="sm:max-w-[540px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary/30 text-xs">
                  {selectedBouquet.vibe}
                </Badge>
                <span className="text-lg font-heading font-semibold text-primary ml-auto">
                  {selectedBouquet.price}
                </span>
              </div>
              <DialogTitle className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mt-1">
                {selectedBouquet.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {selectedBouquet.description}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 my-2">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <img
                  src={selectedBouquet.image}
                  alt={selectedBouquet.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Stem Ingredients List */}
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  What's in this arrangement
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground bg-muted/40 p-3 rounded-lg border border-border/60">
                  {selectedBouquet.stems.map((stem, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{stem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floral Care Guide */}
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Florist Care Notes (Lasts 7–10 Days)
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg border border-border/70 bg-card flex flex-col items-center gap-1">
                    <Droplets className="h-4 w-4 text-sky-500" />
                    <span className="font-medium text-foreground">Fresh Water</span>
                    <span className="text-[11px] text-muted-foreground">Change every 2 days</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-border/70 bg-card flex flex-col items-center gap-1">
                    <Sun className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-foreground">Indirect Light</span>
                    <span className="text-[11px] text-muted-foreground">Avoid direct heat</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-border/70 bg-card flex flex-col items-center gap-1">
                    <Wind className="h-4 w-4 text-emerald-500" />
                    <span className="font-medium text-foreground">Stem Trim</span>
                    <span className="text-[11px] text-muted-foreground">Angle snip 45°</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
              <Button variant="outline" size="sm" onClick={() => setSelectedBouquet(null)}>
                Close
              </Button>
              <Button
                className="bg-primary text-primary-foreground font-medium text-xs sm:text-sm px-5"
                onClick={() => {
                  const name = selectedBouquet.name
                  setSelectedBouquet(null)
                  handleSelectForInquiry(name)
                }}
              >
                Order This Arrangement
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

function LandingSection2() {
  type PricingTier = {
    id: string
    name: string
    shortName: string
    sizeTag: string
    basePrice: number
    frequency?: string
    description: string
    popular?: boolean
    features: string[]
    stemEstimate: string
  }

  type AddonItem = {
    id: string
    label: string
    price: number
  }

  const pricingTiers: PricingTier[] = [
    {
      id: "posy",
      name: "Morning Market Posy",
      shortName: "Market Posy",
      sizeTag: "Petite Bundle",
      basePrice: 38,
      description: "Ideal for bedside tables, guest baths, or a cheerful thank-you gift.",
      features: [
        "10–12 stems of daily field blooms",
        "Wrapped in recycled natural kraft paper",
        "Complimentary handwritten gift card",
        "Flower food packet & care guide",
      ],
      stemEstimate: "10 – 12 stems",
    },
    {
      id: "classic",
      name: "The Neighbourhood Classic",
      shortName: "Classic Bouquet",
      sizeTag: "Signature Arrangement",
      basePrice: 65,
      popular: true,
      description: "Our beloved daily signature. Generous, fragrant focal stems with lush greenery.",
      features: [
        "18–22 premium seasonal stems",
        "Features garden roses & ranunculus",
        "Botanical linen wrap with raw-edge ribbon",
        "Available for same-day local delivery",
      ],
      stemEstimate: "18 – 22 stems",
    },
    {
      id: "grand",
      name: "Grand Feast Centerpiece",
      shortName: "Grand Feast",
      sizeTag: "Luxe Ceramic Bowl",
      basePrice: 120,
      description: "Showstopping low-profile arrangement designed for dining tables & dinner parties.",
      features: [
        "30+ opulent garden blooms & vines",
        "Handmade local ceramic vessel included",
        "360-degree viewing composition",
        "Foam-free mechanics with floral frog",
      ],
      stemEstimate: "30 – 35 stems",
    },
    {
      id: "subscription",
      name: "Weekly Bloom Club",
      shortName: "Bloom Subscription",
      sizeTag: "Recurring Flower Club",
      basePrice: 52,
      frequency: "/ week",
      description: "Fresh farm-direct stems rotated weekly to bring nature into your home or office.",
      features: [
        "New seasonal palette every Friday",
        "Complimentary initial studio vase",
        "Free neighbourhood doorstep delivery",
        "Pause, gift, or cancel anytime",
      ],
      stemEstimate: "16 – 20 stems weekly",
    },
  ]

  const availableAddons: AddonItem[] = [
    { id: "vase", label: "Artisanal Stoneware Vase", price: 18 },
    { id: "candle", label: "Beeswax Botanical Candle", price: 22 },
    { id: "letterpress", label: "Letterpress Calligraphy Card", price: 6 },
    { id: "snips", label: "Brass Floral Snips", price: 16 },
  ]

  const [selectedTierId, setSelectedTierId] = useState<string>("classic")
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(["vase"])

  const activeTier = pricingTiers.find((t) => t.id === selectedTierId) || pricingTiers[1]
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const match = availableAddons.find((a) => a.id === id)
    return sum + (match ? match.price : 0)
  }, 0)

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleOrderTier = (tierName: string, totalPrice: number) => {
    const el = document.getElementById("contact")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      window.setTimeout(() => {
        const textarea = document.getElementById("inquiry-message") as HTMLTextAreaElement | null
        if (textarea) {
          textarea.value = `Hello! I would like to order "${tierName}" (est. $${totalPrice}). What is the earliest date available?`
          textarea.focus()
        }
      }, 400)
    }
  }
  return (
    <section id="pricing" className="flex flex-col gap-10 scroll-mt-24 rounded-3xl bg-muted/40 border border-border/80 p-6 sm:p-10 lg:p-12 md:py-16">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
        <Badge variant="outline" className="text-primary border-primary/30 text-xs px-3 py-0.5">
          Transparent Floral Menu
        </Badge>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
          Arrangements &amp; Price List
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Honest pricing for hand-tied bouquets, table centerpieces, and recurring floral subscriptions. No hidden studio fees, always arranged foam-free.
        </p>
      </div>

      {/* Main Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {pricingTiers.map((tier) => {
          const isSelected = selectedTierId === tier.id
          return (
            <Card
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              className={`flex flex-col relative transition-all duration-300 cursor-pointer ${
                tier.popular
                  ? "border-primary shadow-md bg-card ring-1 ring-primary/30"
                  : "border-border/80 hover:border-primary/40 bg-card/80"
              } ${isSelected ? "ring-2 ring-primary" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground text-xs px-3 py-0.5 shadow-sm font-medium">
                    Neighbourhood Favourite
                  </Badge>
                </div>
              )}

              <CardHeader className="p-6 pb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {tier.sizeTag}
                </span>
                <CardTitle className="font-heading text-2xl font-semibold text-foreground mt-1">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground mt-1 min-h-[36px]">
                  {tier.description}
                </CardDescription>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                    ${tier.basePrice}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tier.frequency || "/ bouquet"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="px-6 py-2 flex-1 flex flex-col justify-between">
                <Separator className="mb-4" />
                <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug text-foreground/90">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-3 border-t border-border/50 text-[11px] text-muted-foreground/80 flex items-center justify-between">
                  <span>Stem count:</span>
                  <span className="font-medium text-foreground">{tier.stemEstimate}</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-4">
                <Button
                  className={`w-full text-xs font-medium ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleOrderTier(tier.name, tier.basePrice)
                  }}
                >
                  <span>Choose {tier.shortName}</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Custom Add-ons & Live Estimate Box */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="flex items-center gap-2 text-foreground font-heading text-xl font-semibold">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Complement Your Arrangement</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Select artisanal extras crafted by Northern California makers. We wrap everything with organic tissue and satin ribbon.
          </p>

          {/* Interactive Add-on Checkbox Chips */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {availableAddons.map((addon) => {
              const isAdded = selectedAddonIds.includes(addon.id)
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    isAdded
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-muted/50 border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span>{addon.label}</span>
                  <span className="font-semibold text-foreground">
                    {isAdded ? "✓" : `+$${addon.price}`}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Live Summary Calculation Box */}
        <div className="w-full lg:w-72 shrink-0 bg-muted/50 rounded-xl p-4 border border-border/80 flex flex-col gap-2.5">
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Selected tier:</span>
            <span className="font-medium text-foreground">{activeTier?.shortName}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Base price:</span>
            <span className="font-medium text-foreground">${activeTier?.basePrice}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Add-ons ({selectedAddonIds.length}):</span>
            <span className="font-medium text-foreground">+${addonsTotal}</span>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-foreground">Estimated Total</span>
            <span className="text-2xl font-heading font-bold text-primary">
              ${(activeTier?.basePrice || 0) + addonsTotal}
            </span>
          </div>
          <Button
            size="sm"
            className="w-full mt-1 bg-primary text-primary-foreground font-medium text-xs"
            onClick={() => {
              const names = selectedAddonIds
                .map((id) => availableAddons.find((a) => a.id === id)?.label)
                .filter(Boolean)
                .join(", ")
              const details = `${activeTier?.name} ($${(activeTier?.basePrice || 0) + addonsTotal}${
                names ? ` with ${names}` : ""
              })`
              handleOrderTier(details, (activeTier?.basePrice || 0) + addonsTotal)
            }}
          >
            Inquire With This Selection
          </Button>
        </div>
      </div>
    </section>
  );
}

function LandingSection3() {
  type ScheduleRow = {
    day: string
    dayIndex: number
    hours: string
    notes: string
    openHour: number
    closeHour: number
  }

  const schedule: ScheduleRow[] = [
    { day: "Tuesday", dayIndex: 2, hours: "8:30 AM – 6:00 PM", notes: "Fresh Morning Deliveries", openHour: 8.5, closeHour: 18 },
    { day: "Wednesday", dayIndex: 3, hours: "8:30 AM – 6:00 PM", notes: "Full Stem Bar Available", openHour: 8.5, closeHour: 18 },
    { day: "Thursday", dayIndex: 4, hours: "8:30 AM – 6:00 PM", notes: "Weekend Pre-orders Open", openHour: 8.5, closeHour: 18 },
    { day: "Friday", dayIndex: 5, hours: "8:30 AM – 6:30 PM", notes: "Evening Flower Happy Hour", openHour: 8.5, closeHour: 18.5 },
    { day: "Saturday", dayIndex: 6, hours: "9:00 AM – 5:00 PM", notes: "Market Stems & Walk-ins", openHour: 9, closeHour: 17 },
    { day: "Sunday", dayIndex: 0, hours: "10:00 AM – 3:00 PM", notes: "Sunday Floral Market", openHour: 10, closeHour: 15 },
    { day: "Monday", dayIndex: 1, hours: "Closed (Farm Sourcing)", notes: "Growers Market Trips", openHour: 0, closeHour: 0 },
  ]

  const now = new Date()
  const currentDayIndex = now.getDay()
  const currentHour = now.getHours() + now.getMinutes() / 60
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const todayName = daysOfWeek[currentDayIndex]

  const currentStatus = useMemo(() => {
    const todayRow = schedule.find((s) => s.dayIndex === currentDayIndex)
    if (!todayRow || todayRow.openHour === 0) {
      return { isOpen: false, label: "Closed Today • Sourcing at Local Farms" }
    }
    if (currentHour >= todayRow.openHour && currentHour < todayRow.closeHour) {
      return { isOpen: true, label: `Open Now • Closes at ${todayRow.hours.split("–")[1]?.trim() || "6:00 PM"}` }
    }
    if (currentHour < todayRow.openHour) {
      return { isOpen: false, label: `Opens Today at ${todayRow.hours.split("–")[0]?.trim() || "8:30 AM"}` }
    }
    return { isOpen: false, label: "Closed for Today • Opens Tomorrow at 8:30 AM" }
  }, [currentDayIndex, currentHour])

  const [zipInput, setZipInput] = useState("")
  const [zipCheckResult, setZipCheckResult] = useState<{ eligible: boolean; message: string } | null>(null)

  const handleCheckZip = () => {
    const eligibleZips = ["94941", "94920", "94965", "94925", "94939", "94904"]
    const clean = zipInput.trim()
    if (clean.length < 5) {
      setZipCheckResult({ eligible: false, message: "Please enter a valid 5-digit zip code." })
      return
    }
    if (eligibleZips.includes(clean)) {
      setZipCheckResult({
        eligible: true,
        message: `Great news! ${clean} is eligible for same-day delivery ($12 flat or free over $100).`,
      })
    } else {
      setZipCheckResult({
        eligible: false,
        message: `${clean} is outside our daily direct radius. Studio pickup or special courier courier available upon request.`,
      })
    }
  }
  return (
    <section id="hours" className="flex flex-col gap-8 scroll-mt-24 py-12 md:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary border-primary/30 text-xs px-2.5 py-0.5">
              Visit or Delivery
            </Badge>
            {/* Dynamic Live Status Badge */}
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                currentStatus.isOpen
                  ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300"
                  : "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  currentStatus.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                }`}
              />
              <span>{currentStatus.label}</span>
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Shop Hours &amp; Studio Schedule
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Stop by our studio to select stems from the flower bar, pick up a pre-ordered bouquet, or arrange same-day delivery throughout Southern Marin.
          </p>
        </div>

        {/* Direct Phone Assistance */}
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" className="gap-2 text-xs border-border/80" asChild>
            <a href="tel:5552347890">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>Questions? (555) 234-7890</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Main 2-Column Layout: Weekly Schedule Card & Delivery Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Weekly Hours Table */}
        <Card className="lg:col-span-7 border-border/80 bg-card shadow-xs">
          <CardHeader className="p-6 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle className="font-heading text-2xl font-semibold text-foreground">
                  Weekly Studio Hours
                </CardTitle>
              </div>
              <span className="text-xs text-muted-foreground">Walk-ins always welcome</span>
            </div>
            <CardDescription className="text-xs text-muted-foreground">
              Today is <span className="font-medium text-foreground">{todayName}</span>. Pre-orders can also be picked up via our garden lockbox after hours.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 pt-0">
            <div className="divide-y divide-border/60">
              {schedule.map((item) => {
                const isToday = item.dayIndex === currentDayIndex
                return (
                  <div
                    key={item.day}
                    className={`py-3 flex items-center justify-between transition-colors px-3 rounded-lg ${
                      isToday
                        ? "bg-primary/10 font-medium text-foreground -mx-1"
                        : "text-muted-foreground hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-sm ${isToday ? "text-primary font-semibold" : "text-foreground"}`}>
                        {item.day}
                      </span>
                      {isToday && (
                        <Badge variant="outline" className="text-[10px] bg-card border-primary/40 text-primary py-0 px-1.5 h-4">
                          Today
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-sm ${isToday ? "font-semibold text-foreground" : ""}`}>
                        {item.hours}
                      </span>
                      <span className="text-xs hidden sm:inline text-muted-foreground/80">
                        {item.notes}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-muted/40 border border-border/60 flex items-start gap-3 text-xs text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-foreground">Monday Farm Visits:</strong> Our studio doors are closed to walk-ins every Monday so our florists can visit flower growers in Sebastopol, Petaluma, and Half Moon Bay to harvest the freshest blooms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Delivery Windows & Postal Code Checker */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Card className="border-border/80 bg-card shadow-xs">
            <CardHeader className="p-6 pb-3">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <CardTitle className="font-heading text-xl font-semibold text-foreground">
                  Delivery Windows &amp; Zones
                </CardTitle>
              </div>
              <CardDescription className="text-xs text-muted-foreground">
                We deliver in climate-controlled water vessels across Southern Marin.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 pt-2 flex flex-col gap-4 text-xs text-muted-foreground">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border border-border/70 bg-muted/30">
                  <span className="font-semibold text-foreground block text-sm">Morning Run</span>
                  <span className="text-muted-foreground block mt-0.5">10:00 AM – 1:00 PM</span>
                  <span className="text-[11px] text-primary mt-1 block">Cutoff: 8:00 AM</span>
                </div>
                <div className="p-3 rounded-lg border border-border/70 bg-muted/30">
                  <span className="font-semibold text-foreground block text-sm">Afternoon Run</span>
                  <span className="text-muted-foreground block mt-0.5">2:00 PM – 5:30 PM</span>
                  <span className="text-[11px] text-primary mt-1 block">Cutoff: 1:00 PM</span>
                </div>
              </div>

              <Separator />

              {/* Interactive Zip Code Checker */}
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-foreground text-xs">
                  Check Same-Day Delivery Eligibility:
                </span>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter 5-digit Zip (e.g. 94941)"
                    value={zipInput}
                    onChange={(e) => {
                      setZipInput(e.target.value)
                      setZipCheckResult(null)
                    }}
                    maxLength={5}
                    className="text-xs h-9"
                  />
                  <Button size="sm" onClick={handleCheckZip} className="h-9 px-4 text-xs bg-primary text-primary-foreground shrink-0">
                    Check
                  </Button>
                </div>

                {zipCheckResult && (
                  <div
                    className={`p-2.5 rounded-lg text-xs flex items-center gap-2 ${
                      zipCheckResult.eligible
                        ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                        : "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                    }`}
                  >
                    {zipCheckResult.eligible ? (
                      <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 shrink-0 text-amber-600" />
                    )}
                    <span>{zipCheckResult.message}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 text-[11px] text-muted-foreground border-t border-border/50 flex flex-col gap-1">
                <span className="font-medium text-foreground">Standard Delivery Service Areas:</span>
                <span>Mill Valley (94941), Tiburon (94920), Belvedere (94920), Sausalito (94965), Corte Madera (94925), Larkspur (94939).</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function LandingSection4() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "pickup",
    date: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }
  return (
    <section id="contact" className="flex flex-col gap-8 scroll-mt-24 rounded-3xl bg-card border border-border/80 p-6 sm:p-10 lg:p-12 shadow-sm md:py-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
        <Badge variant="outline" className="text-primary border-primary/30 text-xs px-3 py-0.5">
          Get in Touch
        </Badge>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
          Visit Our Shop or Send an Inquiry
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Whether you need a last-minute hand-tied bouquet for tonight, want to plan event florals, or just want to talk blooms, we are right here in the heart of Mill Valley.
        </p>
      </div>

      {/* Main 2-Column Grid: Inquiry Form & Interactive Location Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Inquiry Form */}
        <div className="lg:col-span-7 bg-muted/30 rounded-2xl border border-border/80 p-6 sm:p-8">
          {formSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Thank You, {formData.name || "Friend"}!
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  We received your inquiry. Our florist team will confirm flower availability and details by phone or email within 30 minutes.
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-2 text-xs"
                onClick={() => {
                  setFormSubmitted(false)
                  setFormData({ name: "", email: "", phone: "", orderType: "pickup", date: "", message: "" })
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Quick Floral Order &amp; Inquiry
                </h3>
                <span className="text-xs text-muted-foreground">Fast response</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="inquiry-name" className="text-xs font-medium">Your Name *</Label>
                  <Input
                    id="inquiry-name"
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card text-xs sm:text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="inquiry-phone" className="text-xs font-medium">Phone Number *</Label>
                  <Input
                    id="inquiry-phone"
                    type="tel"
                    required
                    placeholder="(555) 234-7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-card text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="inquiry-email" className="text-xs font-medium">Email Address *</Label>
                  <Input
                    id="inquiry-email"
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card text-xs sm:text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="inquiry-date" className="text-xs font-medium">Needed By (Date)</Label>
                  <Input
                    id="inquiry-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-card text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-medium">Fulfillment Preference</Label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "pickup", label: "Studio Pickup" },
                    { value: "delivery", label: "Local Delivery" },
                    { value: "event", label: "Event / Custom" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, orderType: opt.value })}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                        formData.orderType === opt.value
                          ? "bg-primary text-primary-foreground border-primary font-semibold"
                          : "bg-card text-muted-foreground border-border hover:border-primary/40"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="inquiry-message" className="text-xs font-medium">Bouquet Request or Note</Label>
                <Textarea
                  id="inquiry-message"
                  rows={4}
                  placeholder="Tell us about the occasion, desired colours, budget, or specific bouquet name..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card text-xs sm:text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-[11px] text-muted-foreground text-center sm:text-left">
                  Need immediate confirmation? Call <a href="tel:5552347890" className="underline font-medium text-primary">(555) 234-7890</a>
                </p>
                <Button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground font-medium text-xs sm:text-sm px-6 h-10 gap-2">
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Inquiry</span>
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Address, Phone, Directions, Styled Map */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:5552347890"
              className="flex items-start gap-3 p-4 rounded-xl border border-border/80 bg-muted/20 hover:border-primary/40 transition-colors group"
            >
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Phone</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  (555) 234-7890
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400">Click to call directly</span>
              </div>
            </a>

            <a
              href="mailto:hello@petalandstemflowers.com"
              className="flex items-start gap-3 p-4 rounded-xl border border-border/80 bg-muted/20 hover:border-primary/40 transition-colors group"
            >
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Email</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  hello@petal...
                </span>
                <span className="text-[11px] text-muted-foreground">General questions</span>
              </div>
            </a>
          </div>

          {/* Location & Parking Card */}
          <div className="rounded-2xl border border-border/80 bg-muted/20 p-5 flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">
                  428 Blossom Lane, Mill Valley, CA 94941
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">
                  Located two blocks past the historic Depot Plaza, nestled beside the redwood grove.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-border/60 text-xs text-muted-foreground">
              <Car className="h-4 w-4 text-primary shrink-0" />
              <span>Complimentary 15-minute customer pickup parking in rear courtyard.</span>
            </div>
          </div>

          {/* Styled Visual Map Representation */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/80 bg-gradient-to-br from-emerald-950/10 via-amber-950/5 to-primary/10 flex items-center justify-center p-4">
            {/* Abstract Map Roads / Botanical Landmark Graphic */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="40" x2="100%" y2="80" stroke="currentColor" strokeWidth="6" />
                <line x1="20%" y1="0" x2="30%" y2="100%" stroke="currentColor" strokeWidth="8" />
                <line x1="70%" y1="0" x2="65%" y2="100%" stroke="currentColor" strokeWidth="5" />
                <circle cx="50%" cy="50%" r="48" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Map Marker Pin */}
            <div className="relative z-10 flex flex-col items-center gap-2 bg-card/95 backdrop-blur-md px-4 py-3 rounded-xl border border-border shadow-sm text-center">
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xs">
                <Flower2 className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-sm text-foreground">
                  Petal &amp; Stem Studio
                </span>
                <span className="text-[11px] text-muted-foreground">
                  428 Blossom Lane • Mill Valley
                </span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-[11px] px-2.5 gap-1 mt-1 border-primary/30"
                asChild
              >
                <a
                  href="https://maps.google.com/?q=Mill+Valley+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-3 w-3 text-primary" />
                  <span>Get Directions</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex flex-col gap-6 lg:gap-8 w-full min-w-0">
        <LandingSection0 />
        <LandingSection1 />
        <LandingSection2 />
        <LandingSection3 />
        <LandingSection4 />
      </div>
    </div>
  );
}
