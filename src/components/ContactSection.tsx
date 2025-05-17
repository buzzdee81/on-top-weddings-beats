
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Mail, Phone } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  eventLocation: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    
    // Here you would normally send the form data to a server
    
    // Show success message
    toast({
      title: "Anfrage erfolgreich gesendet!",
      description: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
      duration: 5000,
    });
    
    // Reset form
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-gradient">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-gradient">Kontaktieren Sie uns</h2>
          <p className="text-lg">
            Sichern Sie sich jetzt Ihren Wunschtermin für eine unvergessliche Feier mit On Top! 
            Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-brand-purple-dark">Unverbindliche Anfrage</CardTitle>
              <CardDescription>
                Teilen Sie uns Ihre Wünsche und Vorstellungen mit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Ihr Name"
                      {...register("name", { required: "Name ist erforderlich" })}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ihre E-Mail"
                      {...register("email", { required: "E-Mail ist erforderlich" })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      placeholder="Ihre Telefonnummer"
                      {...register("phone")}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date">Wunschdatum</Label>
                    <Input
                      id="date"
                      type="date"
                      {...register("date")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventLocation">Veranstaltungsort</Label>
                  <Input
                    id="eventLocation"
                    placeholder="Wo findet Ihre Veranstaltung statt?"
                    {...register("eventLocation")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ihre Nachricht *</Label>
                  <Textarea
                    id="message"
                    placeholder="Teilen Sie uns Ihre Wünsche mit..."
                    rows={4}
                    {...register("message", { required: "Nachricht ist erforderlich" })}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple-dark">
                  Anfrage senden
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  Felder mit * sind Pflichtfelder
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-brand-purple-dark">Kontaktdaten</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-brand-purple mt-1" />
                  <div>
                    <h4 className="font-medium">Telefon</h4>
                    <a href="tel:+491234567890" className="text-gray-600 hover:text-brand-purple">
                      +49 123 4567890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-brand-purple mt-1" />
                  <div>
                    <h4 className="font-medium">E-Mail</h4>
                    <a href="mailto:info@ontop-band.de" className="text-gray-600 hover:text-brand-purple">
                      info@ontop-band.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 mr-3 text-brand-purple mt-1" />
                  <div>
                    <h4 className="font-medium">Verfügbarkeit prüfen</h4>
                    <p className="text-gray-600">
                      Wir empfehlen eine frühzeitige Anfrage, besonders für die Hochzeitssaison von Mai bis September.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-purple-dark text-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Region</h3>
              <p>
                Wir sind hauptsächlich im Landkreis Pfaffenhofen/Ilm und den umliegenden Regionen in Bayern aktiv. 
                Für Auftritte in anderen Regionen sprechen Sie uns bitte direkt an.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
