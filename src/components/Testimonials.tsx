// Neural Testimonial Interface
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Terminal, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Adebayo",
      role: "CTO of Zabira & CEO of Scnip",
      company: "Zabira & Scnip",
      content: "Working with Oluwaseun at Zabira and also across projects at Scnip has been a true advantage. His deep expertise in Flutter, attention to performance, and strong understanding of UI/UX have consistently elevated the quality of our mobile products. He's reliable, fast, and always thinking one step ahead — a valuable asset to any engineering team.",
      rating: 5,
      avatar: "JA",
      status: "VERIFIED",
      neural_id: "CLIENT_001"
    },
    {
      name: "Isaac John",
      role: "CEO",
      company: "Zabira",
      content: "Oluwaseun has played a key role in transforming the Zabira mobile app experience. From integrating core features like Buy, Sell, and Swap to refining UI flows, he brought precision and speed to our product. He's the kind of developer who doesn't just execute — he collaborates, innovates, and delivers.",
      rating: 5,
      avatar: "IJ",
      status: "VERIFIED",
      neural_id: "CLIENT_002"
    },
    {
      name: "Colina & Hripsime",
      role: "Founders & Creators",
      company: "ScreenKit",
      content: "Oluwaseun joined the ScreenKit team and made an immediate impact. From rebuilding the app in SwiftUI to optimizing performance and implementing creative onboarding flows, his contributions helped us scale and refine the product for over a million users. He's sharp, dependable, and a joy to work with.",
      rating: 5,
      avatar: "CH",
      status: "VERIFIED",
      neural_id: "CLIENT_003"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden section-spacing">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4 glow-effect">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">TESTIMONIAL.MATRIX.LOADED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-heading">
            Client Neural Feedback
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
            &gt; SCANNING CLIENT TESTIMONIAL DATABASE...
            <br />
            &gt; TRUST_RATING: 100% | SATISFACTION: MAXIMUM
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div 
            className="bg-black/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg glow-effect"
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Neural Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-mono">
                  {testimonials[currentIndex].neural_id}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-accent text-xs font-mono">
                  {testimonials[currentIndex].status}
                </span>
              </div>
            </div>

            <div className="text-center">
              {/* Stars with Neural Enhancement */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-accent fill-current mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Neural Quote */}
              <motion.blockquote 
                className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-medium relative font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-primary">&gt; "</span>
                {testimonials[currentIndex].content}
                <span className="text-primary">"</span>
                
                {/* Scanning effect */}
                <motion.div
                  className="absolute left-0 top-0 w-1 h-full bg-primary/60"
                  animate={{ x: [0, 200, 400, 600, 800] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.blockquote>

              {/* Neural Author Profile */}
              <motion.div 
                className="flex items-center justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg font-mono shadow-lg">
                    {testimonials[currentIndex].avatar}
                  </div>
                  {/* Neural Frame */}
                  <div className="absolute inset-0 rounded-xl border-2 border-primary/30 animate-pulse"></div>
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground text-lg font-mono">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary text-sm font-mono">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-muted-foreground text-sm font-mono">
                    @ {testimonials[currentIndex].company}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Neural Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-xl w-12 h-12 p-0 bg-black/20 border-primary/30 text-primary hover:bg-primary/10 font-mono"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Neural Progress Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary shadow-lg scale-125'
                      : 'bg-muted-foreground/30 hover:bg-primary/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-xl w-12 h-12 p-0 bg-black/20 border-primary/30 text-primary hover:bg-primary/10 font-mono"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Neural Statistics */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'SATISFACTION', value: '100%' },
              { label: 'PROJECTS', value: '15+' },
              { label: 'CLIENTS', value: '10+' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center bg-muted/20 backdrop-blur-sm border border-border/50 rounded-lg p-3">
                <div className="text-lg font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;