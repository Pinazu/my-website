import "./index.css";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  FileText,
  Brain,
  Target,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Interactive particle/circle class
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    // Increased initial velocity for visible movement
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.radius = Math.random() * 150 + 100;
    
    // Variety of colors - purples, pinks, blues, indigos
    const colors = [
      'rgba(139, 92, 246, 0.4)',   // primary purple
      'rgba(168, 85, 247, 0.4)',   // accent purple
      'rgba(219, 39, 119, 0.35)',  // pink
      'rgba(236, 72, 153, 0.35)',  // lighter pink
      'rgba(124, 58, 237, 0.4)',   // violet
      'rgba(99, 102, 241, 0.35)',  // indigo
      'rgba(59, 130, 246, 0.35)',  // blue
      'rgba(147, 51, 234, 0.4)',   // purple
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.color = colors[randomIndex] ?? colors[0] ?? 'rgba(139, 92, 246, 0.4)';
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  update(canvas: HTMLCanvasElement, mouseX: number, mouseY: number) {
    // Calculate distance to mouse
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Interactive: move away from mouse when close
    if (distance < 200) {
      const force = (200 - distance) / 200;
      this.vx -= (dx / distance) * force * 0.2;
      this.vy -= (dy / distance) * force * 0.2;
    }

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Boundary bouncing
    if (this.x < -this.radius) this.x = canvas.width + this.radius;
    if (this.x > canvas.width + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = canvas.height + this.radius;
    if (this.y > canvas.height + this.radius) this.y = -this.radius;

    // Damping - reduced for more active movement
    this.vx *= 0.995;
    this.vy *= 0.995;

    // Add more random movement to keep it interesting and dynamic
    this.vx += (Math.random() - 0.5) * 0.15;
    this.vy += (Math.random() - 0.5) * 0.15;

    // Limit velocity - increased for faster movement
    const maxSpeed = 3;
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > maxSpeed) {
      this.vx = (this.vx / speed) * maxSpeed;
      this.vy = (this.vy / speed) * maxSpeed;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  // Interactive background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles with more variety
    const particles: Particle[] = [];
    const particleCount = 15; // Increased number of circles for more visual interest
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }

    // Track mouse position using ref to avoid re-renders
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update(canvas, mousePosRef.current.x, mousePosRef.current.y);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    // Set initial visibility to prevent flash
    gsap.set("[data-animate]", { opacity: 1 });
    
    // Hero animation with fade
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll("[data-animate]");
      gsap.fromTo(elements, 
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }

    // Features animation with scroll trigger
    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll("[data-feature]");
      gsap.fromTo(cards,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
          },
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }

    // Stats animation with scroll trigger
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll("[data-stat]");
      gsap.fromTo(stats,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Interactive Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ filter: 'blur(40px)', opacity: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/50 border-b border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  AI Bookkeeping
                </span>
              </div>

              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Features
                </a>
                <a
                  href="#benefits"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Benefits
                </a>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Pricing
                </a>
                <Button className="relative group overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
          <div ref={heroRef} className="max-w-5xl mx-auto text-center space-y-8">
            <div data-animate>
              <Badge
                variant="secondary"
                className="backdrop-blur-sm bg-secondary/50 border border-border/50 px-4 py-2"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Financial Intelligence
              </Badge>
            </div>

            <h1
              data-animate
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              Bookkeeping{" "}
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>
                Reimagined
              </span>
            </h1>

            <p
              data-animate
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Let AI handle your finances while you focus on growth. Automated,
              intelligent, and always accurate.
            </p>

            <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="group text-base px-8 h-12 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 backdrop-blur-sm border-border/50 hover:bg-secondary/50"
              >
                <Zap className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div
              data-animate
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground pt-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                data-stat
                className="relative overflow-hidden backdrop-blur-sm bg-card/50 border-border/50"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-muted-foreground">Accuracy Rate</div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                </CardContent>
              </Card>

              <Card
                data-stat
                className="relative overflow-hidden backdrop-blur-sm bg-card/50 border-border/50"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">
                    15hrs
                  </div>
                  <div className="text-muted-foreground">Saved Weekly</div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                </CardContent>
              </Card>

              <Card
                data-stat
                className="relative overflow-hidden backdrop-blur-sm bg-card/50 border-border/50"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    10k+
                  </div>
                  <div className="text-muted-foreground">Active Users</div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backdrop-blur-sm bg-secondary/50 border-border/50">
                Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Intelligent Automation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced AI that understands your business and works 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                data-feature
                className="relative group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="relative w-12 h-12 mb-4">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-primary/20">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Smart Categorization</CardTitle>
                  <CardDescription>
                    AI learns your patterns and automatically categorizes
                    transactions with incredible accuracy
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                data-feature
                className="relative group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="relative w-12 h-12 mb-4">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center border border-accent/20">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Receipt Processing</CardTitle>
                  <CardDescription>
                    Snap photos of receipts and watch AI extract every detail
                    instantly and accurately
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                data-feature
                className="relative group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="relative w-12 h-12 mb-4">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-primary/20">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Real-time Insights</CardTitle>
                  <CardDescription>
                    Get instant financial dashboards and predictive analytics at
                    your fingertips
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                data-feature
                className="relative group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="relative w-12 h-12 mb-4">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center border border-accent/20">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Tax Compliance</CardTitle>
                  <CardDescription>
                    Always tax-ready with automated compliance checks and
                    organized records
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                data-feature
                className="relative group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="relative w-12 h-12 mb-4">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-primary/20">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Time Automation</CardTitle>
                  <CardDescription>
                    Save 15+ hours weekly on bookkeeping with intelligent
                    automation workflows
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                data-feature
                className="relative group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="relative w-12 h-12 mb-4">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center border border-accent/20">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">Predictive Analytics</CardTitle>
                  <CardDescription>
                    Make informed decisions with AI-powered forecasting and trend
                    analysis
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <Badge variant="secondary" className="mb-4 backdrop-blur-sm bg-secondary/50 border-border/50">
                    Benefits
                  </Badge>
                  <h2 className="text-4xl font-bold mb-4">
                    Why Choose AI Bookkeeping?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Transform your financial operations with cutting-edge AI
                    technology
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Reduce Costs by 80%",
                      description:
                        "Save thousands on traditional bookkeeping while getting better results",
                    },
                    {
                      icon: CheckCircle2,
                      title: "99.9% Accuracy",
                      description:
                        "Eliminate human errors with AI-powered verification and validation",
                    },
                    {
                      icon: Sparkles,
                      title: "Actionable Insights",
                      description:
                        "Get predictive analytics and recommendations to optimize cash flow",
                    },
                    {
                      icon: Shield,
                      title: "Bank-Level Security",
                      description:
                        "Enterprise-grade encryption and compliance with SOC 2 standards",
                    },
                  ].map((benefit) => (
                    <div key={benefit.title} className="flex gap-4 group">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-primary/20">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <Card className="relative backdrop-blur-sm bg-card/50 border-border/50 overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            Monthly Revenue
                          </div>
                          <div className="text-3xl font-bold">$127,450</div>
                        </div>
                        <TrendingUp className="w-8 h-8 text-primary" />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            Time Saved
                          </div>
                          <div className="text-3xl font-bold">15 hrs/wk</div>
                        </div>
                        <Clock className="w-8 h-8 text-accent" />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            Cost Savings
                          </div>
                          <div className="text-3xl font-bold">$24,000/yr</div>
                        </div>
                        <BarChart3 className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <div className="text-sm text-muted-foreground mb-2">
                        Trusted by 10,000+ businesses
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="pricing" className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-gradient" />
              <CardContent className="relative p-12 md:p-16 text-center space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Ready to Transform Your Bookkeeping?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Join thousands of businesses saving time and money with
                    AI-powered financial intelligence
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group text-base px-8 h-12 relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-8 h-12 backdrop-blur-sm border-border/50 hover:bg-secondary/50"
                  >
                    Schedule Demo
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                  <div>
                    <div className="text-3xl font-bold mb-1">10,000+</div>
                    <div className="text-sm text-muted-foreground">
                      Active Users
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">$2M+</div>
                    <div className="text-sm text-muted-foreground">
                      Saved Annually
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">4.9/5</div>
                    <div className="text-sm text-muted-foreground">
                      Customer Rating
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 lg:px-8 py-12 border-t border-border/50 mt-20">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  <div className="relative w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-lg font-bold">AI Bookkeeping</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Intelligent financial automation for modern businesses
              </p>
              <div className="flex gap-3">
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors cursor-pointer">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors cursor-pointer">Pricing</a></li>
                <li><a href="/security" className="hover:text-foreground transition-colors cursor-pointer">Security</a></li>
                <li><a href="/integrations" className="hover:text-foreground transition-colors cursor-pointer">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors cursor-pointer">About</a></li>
                <li><a href="/blog" className="hover:text-foreground transition-colors cursor-pointer">Blog</a></li>
                <li><a href="/careers" className="hover:text-foreground transition-colors cursor-pointer">Careers</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground transition-colors cursor-pointer">Privacy</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-colors cursor-pointer">Terms</a></li>
                <li><a href="/cookie-policy" className="hover:text-foreground transition-colors cursor-pointer">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AI Bookkeeping. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
