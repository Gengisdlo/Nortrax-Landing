import { useState, useEffect } from "react";
import "@/App.css";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  ShieldCheck,
  Globe,
  FileCheck,
  Car,
  ArrowRight,
  Phone,
  Mail,
  Menu,
  X,
  CheckCircle,
  Sparkles,
  Scale,
  Truck,
  FileText,
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/526568157495?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20unidades%20disponibles%20y%20tr%C3%A1mites%20de%20importaci%C3%B3n.";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Navigation Component
const Navbar = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", section: "services" },
    { label: "Unidades", section: "vehicles" },
    { label: "Proceso", section: "process" },
  ];

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#030712]/80 nav-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            data-testid="logo"
            className="font-['Syne'] text-xl md:text-2xl font-bold tracking-tight text-white"
          >
            NORTRAX <span className="font-light text-gray-400">Auto</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                data-testid={`nav-${link.section}`}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-whatsapp-btn"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full px-5 py-2 text-sm font-medium transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="nav-contact-btn"
              className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300"
            >
              Consultar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            data-testid="mobile-menu"
            className="md:hidden bg-[#030712]/95 nav-blur border-t border-white/10 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => {
                    scrollToSection(link.section);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-white py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full py-3 mt-4 font-medium transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
              <Button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="bg-white text-black hover:bg-gray-200 rounded-full mt-2"
              >
                Consultar mi caso
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = ({ scrollToSection }) => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1712214910040-1f7f5925b16a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBkYXJrJTIwc3R1ZGlvfGVufDB8fHx8MTc3MDQ0ODU5OXww&ixlib=rb-4.1.0&q=85"
          alt="Premium Sports Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[#030712]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p
          data-testid="hero-caption"
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 mb-6 opacity-0 animate-fade-up"
        >
          Importación · Gestión · Autos Premium
        </p>

        <h1
          data-testid="hero-title"
          className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up animation-delay-100 hero-title"
        >
          Importación y venta de autos
          <br />
          <span className="text-gray-400">premium, sin improvisación.</span>
        </h1>

        <p
          data-testid="hero-subtitle"
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-200"
        >
          Gestionamos la compra, importación, nacionalización y documentación de
          vehículos de alto valor, con procesos claros y respaldo legal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
          <Button
            onClick={() => scrollToSection("contact")}
            data-testid="hero-cta-primary"
            className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-base md:text-lg font-medium btn-primary"
          >
            Consultar mi caso
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            onClick={() => scrollToSection("vehicles")}
            data-testid="hero-cta-secondary"
            variant="outline"
            className="bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base md:text-lg font-medium btn-secondary"
          >
            Ver unidades disponibles
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-400">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// Value Proposition Section
const ValueSection = () => {
  return (
    <section
      data-testid="value-section"
      className="py-20 md:py-32 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            data-testid="value-title"
            className="font-['Syne'] text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 tracking-tight"
          >
            ¿Qué es NORTRAX Auto?
          </h2>

          <p
            data-testid="value-text"
            className="text-base md:text-lg text-gray-400 leading-relaxed mb-6"
          >
            En NORTRAX Auto trabajamos con vehículos que requieren algo más que
            entusiasmo:{" "}
            <span className="text-white">
              criterio, experiencia y control del proceso.
            </span>
          </p>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Desde autos deportivos hasta eléctricos de alta gama, nos encargamos
            de que cada unidad llegue y opere en México de forma correcta, legal
            y trazable.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-[#0F172A]/50 border border-white/5 rounded-xl p-8 card-hover">
            <ShieldCheck className="h-10 w-10 text-gray-400 mb-6" />
            <h3 className="font-['Syne'] text-xl font-semibold text-white mb-3">
              Respaldo Legal
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cada proceso cuenta con documentación completa y trazabilidad
              total.
            </p>
          </div>

          <div className="bg-[#0F172A]/50 border border-white/5 rounded-xl p-8 card-hover">
            <Globe className="h-10 w-10 text-gray-400 mb-6" />
            <h3 className="font-['Syne'] text-xl font-semibold text-white mb-3">
              Alcance Internacional
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Importamos desde cualquier ubicación con procesos estructurados.
            </p>
          </div>

          <div className="bg-[#0F172A]/50 border border-white/5 rounded-xl p-8 card-hover">
            <FileCheck className="h-10 w-10 text-gray-400 mb-6" />
            <h3 className="font-['Syne'] text-xl font-semibold text-white mb-3">
              Gestión Completa
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Facturación, nacionalización y documentación en un solo lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Importación de vehículos premium",
      description:
        "Coordinamos la logística internacional con proveedores verificados.",
    },
    {
      icon: Scale,
      title: "Nacionalización y regularización",
      description:
        "Trámites aduanales y legales para operar en México sin restricciones.",
    },
    {
      icon: FileText,
      title: "Facturación y gestión legal",
      description:
        "Documentación fiscal completa y soporte legal especializado.",
    },
    {
      icon: Globe,
      title: "Asesoría en compra internacional",
      description:
        "Evaluación de opciones y acompañamiento en la adquisición.",
    },
    {
      icon: Car,
      title: "Venta de unidades seleccionadas",
      description:
        "Catálogo curado de vehículos premium listos para entrega.",
    },
  ];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 md:py-32 bg-[#0A0F1A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
            Nuestros Servicios
          </p>
          <h2
            data-testid="services-title"
            className="font-['Syne'] text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight"
          >
            Servicios integrales o por etapa
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Adaptamos el alcance según tu caso específico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-testid={`service-card-${index}`}
              className="bg-[#0F172A]/50 border border-white/5 rounded-xl p-8 card-hover group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <service.icon className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="font-['Syne'] text-lg font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Vehicles Section
const VehiclesSection = ({ scrollToSection }) => {
  const vehicles = [
    {
      name: "Shelby GT500",
      type: "Edición Especial",
      image:
        "https://images.unsplash.com/photo-1567818772638-4e4d98a02ec2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxmb3JkJTIwc2hlbGJ5JTIwbXVzdGFuZyUyMGRhcmt8ZW58MHx8fHwxNzcwNDQ5MzMzfDA&ixlib=rb-4.1.0&q=85",
      specs: "V8 Supercharged · 760 HP",
    },
    {
      name: "Tesla Model S",
      type: "Eléctrico Premium",
      image:
        "https://images.unsplash.com/photo-1633433431763-ff75584bb7ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHx0ZXNsYSUyMG1vZGVsJTIwcyUyMGRhcmt8ZW58MHx8fHwxNzcwNDQ4NjAxfDA&ixlib=rb-4.1.0&q=85",
      specs: "Dual Motor · Long Range",
    },
    {
      name: "Porsche 911",
      type: "Deportivo Premium",
      image:
        "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=80",
      specs: "Twin Turbo · 640 HP",
    },
  ];

  return (
    <section
      id="vehicles"
      data-testid="vehicles-section"
      className="py-20 md:py-32 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Unidades Seleccionadas
            </p>
            <h2
              data-testid="vehicles-title"
              className="font-['Syne'] text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight"
            >
              Vehículos disponibles
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl">
              Contamos con unidades disponibles y gestionadas bajo nuestros
              criterios. Este es un ejemplo del tipo de vehículos que
              trabajamos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              data-testid={`vehicle-card-${index}`}
              className="vehicle-card bg-[#0F172A]/50 border border-white/5 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover vehicle-image"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  {vehicle.type}
                </p>
                <h3 className="font-['Syne'] text-xl font-semibold text-white mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-400 text-sm">{vehicle.specs}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-6">
            La disponibilidad es variable. Consulta el stock actual.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            data-testid="vehicles-cta"
            variant="outline"
            className="bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium btn-secondary"
          >
            Consultar disponibilidad
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Análisis del caso",
      description:
        "Evaluamos tu requerimiento específico y su viabilidad legal.",
    },
    {
      number: "02",
      title: "Viabilidad legal y operativa",
      description: "Determinamos el proceso óptimo para tu situación.",
    },
    {
      number: "03",
      title: "Propuesta de gestión",
      description: "Presentamos alcance, tiempos y costos de forma clara.",
    },
    {
      number: "04",
      title: "Ejecución del proceso",
      description: "Coordinamos cada etapa con seguimiento continuo.",
    },
    {
      number: "05",
      title: "Entrega y cierre documental",
      description: "Recibes el vehículo y toda la documentación completa.",
    },
  ];

  return (
    <section
      id="process"
      data-testid="process-section"
      className="py-20 md:py-32 bg-[#0A0F1A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
            Metodología
          </p>
          <h2
            data-testid="process-title"
            className="font-['Syne'] text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight"
          >
            Cómo trabajamos
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Cada caso se evalúa antes de avanzar. No prometemos lo que no es
            viable.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                data-testid={`process-step-${index}`}
                className={`relative md:flex md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div
                    className={`bg-[#0F172A]/50 border border-white/5 rounded-xl p-8 card-hover ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    } max-w-md`}
                  >
                    <span className="text-4xl font-bold text-white/10 font-['Syne']">
                      {step.number}
                    </span>
                    <h3 className="font-['Syne'] text-xl font-semibold text-white mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0F172A] border-2 border-white/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Section
const WhySection = () => {
  const reasons = [
    "Operación por criterio, no por volumen",
    "Transparencia total del proceso",
    "Enfoque premium real",
    "Acompañamiento estructurado",
  ];

  return (
    <section data-testid="why-section" className="py-20 md:py-32 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Diferenciadores
            </p>
            <h2
              data-testid="why-title"
              className="font-['Syne'] text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-8"
            >
              Por qué NORTRAX Auto
            </h2>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  data-testid={`why-reason-${index}`}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1765522074881-c4c3e81cb846?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGRldGFpbHxlbnwwfHx8fDE3NzA0NDg2MDh8MA&ixlib=rb-4.1.0&q=85"
                alt="Luxury Car Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0F172A] border border-white/10 rounded-xl flex flex-col items-center justify-center">
              <Sparkles className="h-8 w-8 text-gray-400 mb-1" />
              <span className="text-xs text-gray-400">Premium</span>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-['Syne']">
            NORTRAX Auto no vende prisa.
            <br />
            <span className="text-white">
              Vende claridad, legalidad y control.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    service: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Consulta enviada correctamente", {
        description: "Nos pondremos en contacto contigo pronto.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicleType: "",
        service: "",
        comments: "",
      });
    } catch (error) {
      toast.error("Error al enviar", {
        description: "Por favor intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-32 bg-[#0A0F1A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Contacto
            </p>
            <h2
              data-testid="contact-title"
              className="font-['Syne'] text-2xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6"
            >
              ¿Tienes un caso específico?
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              Cuéntanos qué vehículo tienes en mente o qué proceso necesitas. Te
              diremos si es viable y cómo proceder.
            </p>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>contacto@nortraxauto.mx</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+52 (81) 1234 5678</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#0F172A]/50 border border-white/5 rounded-xl">
              <p className="text-sm text-gray-400">
                <ClipboardCheck className="h-4 w-4 inline mr-2" />
                La información se usa únicamente para evaluar tu caso.
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="bg-[#0F172A]/50 border border-white/5 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-gray-300 text-sm mb-2 block"
                  >
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    data-testid="input-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#1E293B]/50 border-white/10 text-white placeholder:text-gray-500 input-focus"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-gray-300 text-sm mb-2 block"
                    >
                      Correo
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      data-testid="input-email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#1E293B]/50 border-white/10 text-white placeholder:text-gray-500 input-focus"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-gray-300 text-sm mb-2 block"
                    >
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      data-testid="input-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-[#1E293B]/50 border-white/10 text-white placeholder:text-gray-500 input-focus"
                      placeholder="+52 (81) 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="vehicleType"
                    className="text-gray-300 text-sm mb-2 block"
                  >
                    Tipo de vehículo
                  </Label>
                  <Input
                    id="vehicleType"
                    name="vehicleType"
                    data-testid="input-vehicle-type"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="bg-[#1E293B]/50 border-white/10 text-white placeholder:text-gray-500 input-focus"
                    placeholder="Ej: Tesla Model S, Shelby GT500"
                  />
                </div>

                <div>
                  <Label className="text-gray-300 text-sm mb-2 block">
                    ¿Qué necesitas?
                  </Label>
                  <Select
                    onValueChange={handleServiceChange}
                    value={formData.service}
                  >
                    <SelectTrigger
                      data-testid="select-service"
                      className="bg-[#1E293B]/50 border-white/10 text-white"
                    >
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1E293B] border-white/10">
                      <SelectItem value="compra">Compra de vehículo</SelectItem>
                      <SelectItem value="importacion">Importación</SelectItem>
                      <SelectItem value="regularizacion">
                        Regularización
                      </SelectItem>
                      <SelectItem value="venta">Venta de vehículo</SelectItem>
                      <SelectItem value="asesoria">Asesoría general</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="comments"
                    className="text-gray-300 text-sm mb-2 block"
                  >
                    Comentarios adicionales
                  </Label>
                  <Textarea
                    id="comments"
                    name="comments"
                    data-testid="input-comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    className="bg-[#1E293B]/50 border-white/10 text-white placeholder:text-gray-500 input-focus resize-none"
                    placeholder="Cuéntanos más sobre tu caso..."
                  />
                </div>

                <Button
                  type="submit"
                  data-testid="submit-btn"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-full py-6 text-base font-medium btn-primary"
                >
                  {isSubmitting ? "Enviando..." : "Iniciar consulta"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer data-testid="footer" className="py-12 bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#"
              className="font-['Syne'] text-xl font-bold tracking-tight text-white"
            >
              NORTRAX <span className="font-light text-gray-400">Auto</span>
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Importación · Gestión · Autos Premium
            </p>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NORTRAX Auto. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App bg-[#030712] min-h-screen">
      <Toaster position="top-right" richColors />
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ValueSection />
      <ServicesSection />
      <VehiclesSection scrollToSection={scrollToSection} />
      <ProcessSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
