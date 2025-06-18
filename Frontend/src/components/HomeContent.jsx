import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import ThemeButton from "../components/ThemeButton"; // Import your ThemeButton component
import {
  Code,
  Users,
  Zap,
  Shield,
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Layers,
  Terminal,
  Video,
  MessageSquare,
  Share2,
  ChevronDown,
} from "lucide-react";

const ModernHomepage = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Get the dark mode state from the Redux store
  const darkMode = useSelector((state) => state.theme.darkMode);

  const features = [
    "Real-time collaborative coding",
    "Multi-language support",
    "Live video conferencing",
    "Instant code sharing",
    "Advanced debugging tools",
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50+", label: "Languages" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at TechCorp",
      content:
        "This platform revolutionized how our team collaborates. Real-time coding has never been this smooth!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "CTO at StartupHub",
      content:
        "The seamless integration of video calls and code editing makes remote pair programming effortless.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      role: "Lead Engineer at DataFlow",
      content:
        "Outstanding performance and intuitive interface. Our productivity increased by 40%!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setIsVisible((prev) => ({
        ...prev,
        [entry.target.id]: entry.isIntersecting,
      }));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Apply dark mode classes to the main container
    <div
      className={`min-h-screen transition-colors duration-300
      ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-white via-blue-50 to-indigo-100"
      }`}
    >
      
      {/* Hero Section */}
      {/* Reduced padding-top as this nav is no longer fixed, and a global Header is expected */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6
              ${
                darkMode
                  ? "bg-blue-900 text-blue-300"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              <Zap className="w-4 h-4 mr-2" />
              Now with AI-powered code suggestions
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-colors duration-300
              ${darkMode ? "text-gray-100" : "text-gray-900"}`}
            >
              Code Together,
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Build Faster
              </span>
            </h1>

            <p
              className={`text-xl max-w-3xl mx-auto mb-8 leading-relaxed transition-colors duration-300
              ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Experience the future of collaborative coding with our real-time
              editor. Connect with your team, share ideas instantly, and bring
              your projects to life together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/signup"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center"
              >
                Start Coding Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/login"
                className={`px-8 py-4 border-2 rounded-xl font-semibold text-lg transition-colors duration-300 flex items-center
                ${
                  darkMode
                    ? "border-blue-700 text-blue-400 hover:bg-blue-900"
                    : "border-blue-200 text-blue-700 hover:bg-blue-50"
                }`}
              >
                Login
              </a>
            </div>

            <div
              className={`text-sm transition-colors duration-300
              ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              <span
                className={`font-medium transition-colors duration-300
                ${darkMode ? "text-blue-400" : "text-blue-600"}`}
              >
                {features[currentFeature]}
              </span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div
              className={`rounded-2xl shadow-2xl border overflow-hidden transition-colors duration-300
              ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <div
                className={`px-6 py-4 border-b flex items-center transition-colors duration-300
                ${
                  darkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span
                    className={`text-sm transition-colors duration-300
                    ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    collaborative-project.js
                  </span>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 to-blue-900 text-green-400 font-mono text-sm">
                <div className="space-y-2">
                  <div>
                    <span className="text-blue-300">const</span>{" "}
                    <span className="text-yellow-300">collaboration</span> ={" "}
                    {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">realTime</span>:{" "}
                    <span className="text-green-300">true</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">users</span>: [
                    <span className="text-orange-300">'Alice'</span>,{" "}
                    <span className="text-orange-300">'Bob'</span>,{" "}
                    <span className="text-orange-300">'Charlie'</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">features</span>: [
                    <span className="text-orange-300">'video'</span>,{" "}
                    <span className="text-orange-300">'chat'</span>,{" "}
                    <span className="text-orange-300">'sync'</span>]
                  </div>
                  <div>{"};"}</div>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">
                      3 users online
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-gray-900"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className={`absolute -top-4 -right-4 rounded-xl shadow-lg p-4 border transition-colors duration-300
              ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-blue-100"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Video className="w-5 h-5 text-blue-600" />
                <span
                  className={`text-sm font-medium transition-colors duration-300
                  ${darkMode ? "text-gray-200" : "text-gray-900"}`}
                >
                  Live Video
                </span>
              </div>
            </div>

            <div
              className={`absolute -bottom-4 -left-4 rounded-xl shadow-lg p-4 border transition-colors duration-300
              ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-blue-100"
              }`}
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-green-600" />
                <span
                  className={`text-sm font-medium transition-colors duration-300
                  ${darkMode ? "text-gray-200" : "text-gray-900"}`}
                >
                  Real-time Chat
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className={`py-16 transition-colors duration-300
        ${darkMode ? "bg-gray-800/50" : "bg-white/50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300
                  ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                >
                  {stat.number}
                </div>
                <div
                  className={`font-medium transition-colors duration-300
                  ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300
              ${darkMode ? "text-gray-100" : "text-gray-900"}`}
            >
              Everything you need to
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                collaborate
              </span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto transition-colors duration-300
              ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Powerful features designed to make remote collaboration as
              seamless as working side by side.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Terminal,
                title: "Advanced Code Editor",
                description:
                  "Full-featured IDE with syntax highlighting, auto-completion, and debugging tools for 50+ languages.",
              },
              {
                icon: Users,
                title: "Real-time Collaboration",
                description:
                  "See changes instantly as your team codes together. No more merge conflicts or version issues.",
              },
              {
                icon: Video,
                title: "Integrated Video Calls",
                description:
                  "Built-in video conferencing with screen sharing. Discuss code while you write it.",
              },
              {
                icon: Share2,
                title: "Instant Sharing",
                description:
                  "Share your code, projects, or entire workspace with a single link. No setup required.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimized for speed with real-time sync, fast loading, and minimal latency.",
              },
              // Added an extra feature for better layout in 3-col grid (optional)
              {
                icon: Shield,
                title: "Secure Workspaces",
                description:
                  "Your code and collaborations are always secure with end-to-end encryption and robust access controls.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300
                ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                  ${
                    darkMode
                      ? "bg-blue-900/50"
                      : "bg-gradient-to-br from-blue-100 to-indigo-100"
                  }`}
                >
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 transition-colors duration-300
                  ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`leading-relaxed transition-colors duration-300
                  ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`py-16 transition-colors duration-300
        ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 to-gray-850"
            : "bg-gradient-to-r from-blue-50 to-indigo-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold mb-4 transition-colors duration-300
              ${darkMode ? "text-gray-100" : "text-gray-900"}`}
            >
              Loved by developers worldwide
            </h2>
            <p
              className={`text-lg transition-colors duration-300
              ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Join thousands of teams who have transformed their workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg border transition-colors duration-300
                ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p
                  className={`mb-6 leading-relaxed transition-colors duration-300
                  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  "{testimonial.content}"
                </p>
                <div>
                  <div
                    className={`font-semibold transition-colors duration-300
                    ${darkMode ? "text-gray-100" : "text-gray-900"}`}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-sm transition-colors duration-300
                    ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300
            ${darkMode ? "text-gray-100" : "text-gray-900"}`}
          >
            Ready to transform your
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              coding workflow?
            </span>
          </h2>
          <p
            className={`text-lg mb-8 transition-colors duration-300
            ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Join thousands of developers who are already coding better together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get Started Now
            </a>
            <a
              href="/login"
              className={`px-8 py-4 border-2 rounded-xl font-semibold text-lg transition-all duration-300
              ${
                darkMode
                  ? "border-blue-700 text-blue-400 hover:bg-blue-900"
                  : "border-blue-200 text-blue-700 hover:bg-blue-50"
              }`}
            >
              Already have an account?
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernHomepage;
