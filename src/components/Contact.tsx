
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hi@tade.me",
      link: "mailto:hi@tade.me"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+2348163421203",
      link: "tel:+2348163421203"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Abuja, Nigeria",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-medium mb-3 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Interested in working together? Feel free to contact me for any project or collaboration.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="flex items-start animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gray-100 p-3 rounded-md mr-4">
                  <item.icon className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <a 
                    href={item.link}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {item.details}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white rounded-md p-6 shadow-sm border border-gray-100 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gray-800 hover:bg-gray-700 p-6 rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
