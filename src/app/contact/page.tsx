import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Image from "next/image";
const Page = () => {
  const stats = [
    {
      value: "15+",
      label: "Years of Experience",
      description:
        "Serving the construction industry with proven expertise and results",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description:
        "Our clients consistently rate us highly for quality, reliability, and results",
    },
    {
      value: "50+",
      label: "Construction Partners",
      description: "Construction companies currently rely on our support",
    },
  ];

  return (
    <div>
      <section
        className="text-white py-16 px-6"
        style={{
          background: `linear-gradient(180deg, #0E4571 0%, #0A3554 50%, #063049
      100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white max-w-186 leading-[28px]">
            Ready to build better business? Let's discuss how our back-office
            support services can help your construction company thrive.today.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className=" border-none pt-0">
              <CardHeader className="text-white rounded-t-lg block   p-0" >
                <div
                  className="rounded-t-lg h-48 relative grid place-content-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #0E4571 0%, #0A3554 50%, #062D4A 100%)",
                  }}
                >
                  <div className="h-19 ">
                    <CardTitle className="text-4xl text-center text-white font-normal ">
                      Let&apos;s Build Together
                    </CardTitle>
                    <p className="text-center text-white text-lg">
                      Schedule a free consultation today
                    </p>
                  </div>
                  <Image
                    src={"/letsbuild.png"}
                    fill
                    className="opacity-20"
                    alt=""
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs">
                        📝
                      </div>
                      Name/Business
                    </Label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-white text-xs">
                        📧
                      </div>
                      Email/Contact
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(123) 4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-white text-xs">
                        💰
                      </div>
                      Budget/Service
                    </Label>
                    <Input id="budget" placeholder="$5k - $10k/month" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">
                    What service are you interested in?
                  </Label>
                  <Input
                    id="service"
                    placeholder="e.g., Project Management, Bookkeeping"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vision">Tell us about your vision</Label>
                  <Textarea
                    id="vision"
                    placeholder="Share your project details, challenges, and how we can help..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-[#1e3a5f] hover:bg-[#2d5a8c] text-white">
                  Send Message
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Or schedule a call directly:{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Book a Time
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Support Team Info */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#2d5a8c] to-[#1e3a5f] text-white rounded-t-lg">
                  <CardTitle className="text-xl">Our Support Team</CardTitle>
                  <p className="text-sm text-white/90">
                    We&apos;re available to answer your questions and provide
                    assistance
                  </p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">24/7 Support</p>
                      <p className="text-sm text-muted-foreground">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Email Us</p>
                      <p className="text-sm text-muted-foreground">
                        support@company.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri: 8am - 6pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Remote Team</p>
                      <p className="text-sm text-muted-foreground">
                        Serving North America
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-14 text-lg">
                Schedule Support
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 text-lg bg-transparent"
              >
                View Pricing Plans
              </Button>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
                    🎧
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      24/7 Live Dispatcher
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Get instant support anytime, day or night. Our team is
                      always here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Construction Companies Trust Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#1e3a5f] mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
