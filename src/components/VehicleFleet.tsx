import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Users } from "lucide-react";
import compactSedanImage from "@/assets/etios2.jpg";
import familySuvImage from "@/assets/Ertiga 400.webp";
import passengerVanImage from "@/assets/tempo-traveller.webp";
import {handleClick , handleCall} from '@/components/functionality/communication'
const VehicleFleet = () => {
  const vehicles = [
    {
      id: 1,
      name: "Etios",
      image: compactSedanImage,
      capacity: "5 Seater",
      description: "Perfect for small families or couples, offering comfort and fuel efficiency for city tours and short trips. Equipped with AC and ample trunk space.",
      features: ["Air Conditioning", "Ample Trunk Space", "Fuel Efficient", "City Tours"]
    },
    {
      id: 2,
      name: "Ertiga",
      image: familySuvImage,
      capacity: "7 Seater",
      description: "Spacious and versatile, ideal for larger families or groups of friends. Enjoy ample legroom, luggage space, and a smooth ride on longer journeys.",
      features: ["Ample Legroom", "Large Luggage Space", "Smooth Ride", "Long Journeys"]
    },
    {
      id: 3,
      name: "Traveller",
      image: passengerVanImage,
      capacity: "14 Seater",
      description: "Our comfortable passenger van is perfect for large groups, corporate outings, or extended family vacations. Plenty of room for everyone and their gear, ensuring a pleasant trip.",
      features: ["Large Groups", "Corporate Outings", "Extended Families", "Spacious Interior"]
    }
  ];

  return (
    <section id="cars" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect vehicle for your journey. All our cars are well-maintained, comfortable, and ready for your adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group hover:shadow-large transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      <Users className="w-3 h-3 mr-1" />
                      {vehicle.capacity}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{vehicle.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {vehicle.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="btn-whatsapp flex-1" onClick={handleClick}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={handleCall}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleFleet;