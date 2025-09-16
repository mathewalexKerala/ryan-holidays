import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "Singapore",
      avatar: "SC",
      date: "11/14/2023",
      rating: 5,
      review: "Ryan Holidays made our family trip to the coast absolutely seamless! The 7-seater car was perfect for us and the booking process was so easy. Highly recommend their services!"
    },
    {
      id: 2,
      name: "David Miller",
      location: "Sydney, Australia",
      avatar: "DM",
      date: "10/27/2023",
      rating: 5,
      review: "Fantastic experience with Ryan Holidays. We rented the 5-seater for a weekend getaway and it was clean, comfortable, and reliable. Great customer service too!"
    },
    {
      id: 3,
      name: "Aisha Khan",
      location: "Dubai, UAE",
      avatar: "AK",
      date: "8/31/2023",
      rating: 5,
      review: "Our group tour was a huge success thanks to the spacious 14-seater from Ryan Holidays. The driver was professional and punctual. We had a wonderful time exploring the region!"
    },
    {
      id: 4,
      name: "Tomás Rodriguez",
      location: "Madrid, Spain",
      avatar: "TR",
      date: "12/4/2023",
      rating: 5,
      review: "I needed a reliable car for a business trip and Ryan Holidays delivered. The 5-seater was exactly what I needed, and the booking was quick. Will definitely use them again."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our satisfied customers who have experienced our exceptional service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-soft hover:shadow-medium transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-foreground leading-relaxed mb-4">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="text-xs text-muted-foreground">
                  {testimonial.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;