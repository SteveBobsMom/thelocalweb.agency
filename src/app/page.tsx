import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Tattoomii.ch",
    description: "Marketplace für Tätowierer. Modernes Design mit User Dashboard, Suchfunktion und Booking-System.",
    image: "/tattoomii.png",
    link: "https://tattoomii.ch",
    tags: ["React", "Node.js", "PostgreSQL"],
    features: ["User Dashboard", "Suchfunktion", "Booking System", "SSL Security"]
  },
  {
    id: 2,
    name: "Lorie Tattoos",
    description: "Luxus-Website für Tätowier-Artist. Elegantes Portfolio mit Booking Integration.",
    image: "/lorie.png",
    link: "https://lorietattoos.com",
    tags: ["Next.js", "Tailwind", "Vercel"],
    features: ["Portfolio Gallery", "Booking Integration", "24/7 Hosting", "Modern Design"]
  }
];

const services = [
  {
    icon: "🎨",
    title: "Web Design",
    description: "Moderne, professionelle Designs die Vertrauen schaffen und deine Marke stärken."
  },
  {
    icon: "💻",
    title: "Web Entwicklung",
    description: "Maßgeschneiderte Lösungen mit React, Next.js und modernsten Technologien."
  },
  {
    icon: "🚀",
    title: "Hosting & Support",
    description: "Sichere, zuverlässige Infrastruktur mit 99.9% Uptime und 24/7 Support."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Websites die auf allen Geräten perfekt aussehen – von Mobile bis Desktop."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white selection:bg-indigo-500/30">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">
            thelocalweb<span className="text-indigo-400">.agency</span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="#leistungen" className="text-sm text-gray-400 hover:text-white transition-colors">Leistungen</Link>
            <Link href="#projekte" className="text-sm text-gray-400 hover:text-white transition-colors">Projekte</Link>
            <Link href="#kontakt" className="text-sm bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition-all">Kontakt</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(99,102,241,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(34,211,238,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-indigo-400 text-sm font-medium mb-6 tracking-wide uppercase">Webentwicklung aus Zürich</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Wir entwickeln <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              digitale Erlebnisse
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Professionelle Websites für lokale Geschäfte. Mit Fokus auf Design, Performance und Nutzererlebnis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#kontakt" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105">
              Projekt starten
            </Link>
            <Link href="#projekte" className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all">
              Unsere Arbeit
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">Leistungen</p>
            <h2 className="text-4xl md:text-5xl font-bold">Was wir machen</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-500"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projekte" className="py-32 bg-white/3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Projekte</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Echte Arbeit. Echte Ergebnisse. Websites die funktionieren.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative rounded-3xl overflow-hidden bg-[#1a1a2e] border border-white/5"
              >
                {/* Screenshot */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/20 to-transparent" />
                  
                  {/* Browser bar */}
                  <div className="absolute top-4 left-4 right-4 h-8 bg-[#0a0a1a]/80 backdrop-blur rounded-lg flex items-center px-3 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  
                  {/* Visit button */}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20">
                      Website besuchen →
                    </span>
                  </a>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">Preise</p>
            <h2 className="text-4xl md:text-5xl font-bold">Einfach. Transparent.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-white/3 border border-white/5">
              <h3 className="text-lg font-semibold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-2">CHF 99<span className="text-gray-500 text-lg font-normal">/Mt</span></div>
              <p className="text-gray-500 text-sm mb-6">Perfekt für kleine Geschäfte</p>
              <ul className="space-y-3 mb-8">
                {["1-seitige Website", "Mobile-optimiert", "Hosting inklusive", "SSL Zertifikat", "Kontaktformular"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#kontakt" className="block text-center py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                Starten
              </Link>
            </div>
            
            {/* Business */}
            <div className="relative p-8 rounded-2xl bg-white/5 border border-indigo-500/30">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                Empfohlen
              </div>
              <h3 className="text-lg font-semibold mb-2">Business</h3>
              <div className="text-4xl font-bold mb-2">CHF 199<span className="text-gray-500 text-lg font-normal">/Mt</span></div>
              <p className="text-gray-500 text-sm mb-6">Für wachsende Unternehmen</p>
              <ul className="space-y-3 mb-8">
                {["Bis zu 5 Seiten", "Blog Integration", "Social Media Links", "Google Business", "Monatlicher Report"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#kontakt" className="block text-center py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition-colors">
                Wählen
              </Link>
            </div>
            
            {/* Premium */}
            <div className="p-8 rounded-2xl bg-white/3 border border-white/5">
              <h3 className="text-lg font-semibold mb-2">Premium</h3>
              <div className="text-4xl font-bold mb-2">CHF 299<span className="text-gray-500 text-lg font-normal">/Mt</span></div>
              <p className="text-gray-500 text-sm mb-6">Mit E-Commerce</p>
              <ul className="space-y-3 mb-8">
                {["Unbegrenzte Seiten", "Online Shop", "Zahlungsabwicklung", "Produktkatalog", "VIP Support"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#kontakt" className="block text-center py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-32 bg-gradient-to-b from-[#0a0a1a] to-[#0f0f1f]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-indigo-400 text-sm font-medium mb-4 tracking-wide uppercase">Kontakt</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projekt besprechen?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Erzähl uns von deinem Projekt. Wir finden die passende Lösung.
          </p>
          <a 
            href="mailto:hello@thelocalweb.agency" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105"
          >
            hello@thelocalweb.agency
          </a>
          <p className="text-gray-500 text-sm mt-6">Oder ruf uns an: +41 77 463 4650</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href="/" className="text-xl font-bold tracking-tight mb-4 inline-block">
            thelocalweb<span className="text-indigo-400">.agency</span>
          </Link>
          <p className="text-gray-500 text-sm">© 2026 thelocalweb.agency – Webentwicklung aus Zürich</p>
        </div>
      </footer>
    </div>
  );
}
