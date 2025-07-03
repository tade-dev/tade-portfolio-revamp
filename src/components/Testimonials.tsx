import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Adebayo",
      role: "CTO of Zabira & CEO of Scnip",
      company: "Zabira & Scnip",
      content: "Working with Oluwaseun at Zabira and also across projects at Scnip has been a true advantage. His deep expertise in Flutter, attention to performance, and strong understanding of UI/UX have consistently elevated the quality of our mobile products. He's reliable, fast, and always thinking one step ahead — a valuable asset to any engineering team.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Isaac John",
      role: "CEO",
      company: "Zabira",
      content: "Oluwaseun has played a key role in transforming the Zabira mobile app experience. From integrating core features like Buy, Sell, and Swap to refining UI flows, he brought precision and speed to our product. He's the kind of developer who doesn't just execute — he collaborates, innovates, and delivers.",
      rating: 5,
      avatar: "IJ"
    },
    {
      name: "Colina & Hripsime",
      role: "Founders & Creators",
      company: "ScreenKit",
      content: "Oluwaseun joined the ScreenKit team and made an immediate impact. From rebuilding the app in SwiftUI to optimizing performance and implementing creative onboarding flows, his contributions helped us scale and refine the product for over a million users. He's sharp, dependable, and a joy to work with.",
      rating: 5,
      avatar: "CH"
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

      </div>
    </section>
  );
};

export default Testimonials;
