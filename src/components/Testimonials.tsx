
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FoodTech Startup",
      company: "NutriFlow",
      content: "Akintade delivered an exceptional Flutter app that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "TechVentures",
      content: "Working with Akintade was a game-changer. He transformed our complex requirements into a beautiful, user-friendly mobile app with impressive performance.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "GreenLife Apps",
      content: "Akintade's SwiftUI expertise helped us create an iOS app that our users love. His code is clean, efficient, and follows best practices throughout.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "InnovateMobile",
      content: "Exceptional mobile development skills! Akintade delivered our project on time and handled complex integrations with ease. Highly recommended.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-spacing bg-white dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-medium mb-3 text-center bg-gradient-to-r from-gray-800 via-gray-900 to-blue-800 dark:from-gray-100 dark:via-gray-200 dark:to-blue-200 bg-clip-text text-transparent font-heading">
          What Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Trusted by startups and established companies worldwide for exceptional mobile development.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-blue-800/50">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-blue-600 dark:bg-blue-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              4+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              24h
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Response Time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
