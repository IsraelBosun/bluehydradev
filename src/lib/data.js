export const portfolioProjects = [
  {
    id: 1,
    title: "FinanceFlow",
    category: "web",
    description: "Enterprise financial management platform with real-time analytics and automated reporting",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    stats: {
      users: "50K+",
      transactions: "$2B+",
      uptime: "99.99%"
    },
    link: "#"
  },
  {
    id: 2,
    title: "MediConnect",
    category: "web",
    description: "Healthcare platform connecting patients with specialists for virtual consultations",
    technologies: ["Next.js", "TypeScript", "MongoDB", "WebRTC"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    stats: {
      doctors: "5K+",
      consultations: "100K+",
      satisfaction: "4.8/5"
    },
    link: "#"
  },
  {
    id: 3,
    title: "EduLearn Pro",
    category: "web",
    description: "Interactive e-learning platform with AI-powered personalized learning paths",
    technologies: ["Vue.js", "Python", "TensorFlow", "Redis"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
    stats: {
      students: "200K+",
      courses: "1,500+",
      completion: "87%"
    },
    link: "#"
  },
  {
    id: 4,
    title: "FitTrack",
    category: "mobile",
    description: "AI-powered fitness and nutrition tracking app with personalized workout plans",
    technologies: ["React Native", "Firebase", "TensorFlow", "HealthKit"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80",
    stats: {
      downloads: "500K+",
      rating: "4.9/5",
      workouts: "10M+"
    },
    link: "#"
  },
  {
    id: 5,
    title: "ShopMate",
    category: "mobile",
    description: "Social shopping app with AR try-on features and peer recommendations",
    technologies: ["Flutter", "ARKit", "GraphQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    stats: {
      users: "1M+",
      merchants: "10K+",
      gmv: "$50M+"
    },
    link: "#"
  }
];

export const services = [
  {
    icon: "🚀",
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    features: ["React/Next.js", "Vue/Nuxt", "Node.js APIs", "Cloud Deployment"]
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Scalable infrastructure and DevOps implementation",
    features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Kubernetes", "Monitoring"]
  }
];

export const techStack = [
  { name: "React", logo: "⚛️", category: "Frontend" },
  { name: "Next.js", logo: "▲", category: "Frontend" },
  { name: "Vue.js", logo: "💚", category: "Frontend" },
  { name: "React Native", logo: "📱", category: "Mobile" },
  { name: "Flutter", logo: "🦋", category: "Mobile" },
  { name: "Node.js", logo: "🟢", category: "Backend" },
  { name: "Python", logo: "🐍", category: "Backend" },
  { name: "PostgreSQL", logo: "🐘", category: "Database" },
  { name: "MongoDB", logo: "🍃", category: "Database" },
  { name: "AWS", logo: "☁️", category: "Cloud" },
  { name: "Docker", logo: "🐳", category: "DevOps" },
  { name: "Kubernetes", logo: "☸️", category: "DevOps" }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
    duration: "1-2 weeks"
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our design team creates stunning UI/UX designs and interactive prototypes for your approval before development begins.",
    duration: "2-3 weeks"
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with bi-weekly sprints, continuous integration, and rigorous testing to ensure quality.",
    duration: "8-12 weeks"
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Smooth deployment to production with monitoring, ongoing maintenance, and feature enhancements.",
    duration: "Ongoing"
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$25,000",
    description: "Perfect for MVPs and small projects",
    features: [
      "5-10 page responsive website",
      "Custom design & branding",
      "Mobile-optimized",
      "CMS integration",
      "2 months support",
      "Basic SEO setup",
      "Contact forms & analytics"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$75,000",
    description: "Ideal for growing businesses",
    features: [
      "Full-stack web application",
      "Custom UI/UX design",
      "User authentication",
      "Database integration",
      "API development",
      "Admin dashboard",
      "6 months support",
      "Cloud deployment",
      "Advanced analytics"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Complex web/mobile platform",
      "Microservices architecture",
      "Advanced integrations",
      "Real-time features",
      "AI/ML capabilities",
      "DevOps & CI/CD",
      "12+ months support",
      "Dedicated team",
      "SLA guarantees",
      "Security audits"
    ],
    popular: false
  }
];

export const trustMetrics = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
  { value: "15+", label: "Countries Served" }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "BlueHydra transformed our vision into reality. Their technical expertise and attention to detail exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO, FinanceFlow",
    content: "Working with BlueHydra was seamless. They delivered a robust, scalable platform that handles millions of transactions daily.",
    rating: 5
  }
];