import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, Gift, Headphones } from "lucide-react";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <Card className=" border-none pt-0 col-span-6">
              <CardHeader className="text-white rounded-t-lg block   p-0">
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="flex items-center justify-center py-4 border-none shadow-none">
                    <CardContent className="flex items-center gap-2 p-0">
                      <span className="size-10 rounded-[8px] inline-flex items-center justify-center bg-[linear-gradient(135deg,#2B7FFF_0%,#155DFC_100%)]">
                        <Clock className="w-5 h-5 text-white" />
                      </span>

                      <span className="font-medium text-sm text-[#404040]">
                        24-Hour Response
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="flex items-center justify-center py-4 border-none shadow-none">
                    <CardContent className="flex items-center gap-2 p-0">
                      <span className="size-10 rounded-[8px] inline-flex items-center justify-center bg-[linear-gradient(135deg,#DBA400_0%,#F54900_100%)]">
                        <Headphones className="text-white w-5 h-5" />
                      </span>

                      <span className="font-medium text-sm text-[#404040]">
                        Expert Support
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="flex items-center justify-center py-4 border-none shadow-none">
                    <CardContent className="flex items-center gap-2 p-0">
                      <span className="size-10 rounded-[8px] inline-flex items-center justify-center bg-[linear-gradient(135deg,#00C950_0%,#00A63E_100%)]">
                        <Gift className="text-white w-5 h-5" />
                      </span>

                      <span className="font-medium text-sm  text-[#404040]">
                        Free Consultation
                      </span>
                    </CardContent>
                  </Card>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="John Smith" />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="000 000 0000" />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="ABC Construction Ltd" />
                  </div>

                  {/* Service */}
                  <div className="space-y-1 md:col-span-2">
                    <Label htmlFor="service">
                      What service are you interested in?
                    </Label>
                    <Select>
                      <SelectTrigger id="service" className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="project">
                          Project Management
                        </SelectItem>
                        <SelectItem value="admin">
                          Administrative Support
                        </SelectItem>
                        <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="design">
                          Architecture & Design
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1 md:col-span-2">
                    <Label htmlFor="message">Tell us about your needs *</Label>
                    <Textarea
                      id="message"
                      placeholder="Share details about your business, current challenges, and how we can help..."
                      rows={4}
                    />
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 flex justify-end pt-2">
                    <Button
                      className="
    w-full 
    bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)]
    text-white
    shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]
  "
                    >
                      Send Message
                    </Button>
                  </div>
                </form>

                <p className="text-center text-sm text-secondary">
                  🔒 Your information is secure and confidential
                </p>
              </CardContent>
            </Card>

            {/* Support Team Info */}
            <div className="space-y-6 col-span-4">
              <Card className="shadow-lg p-0 max-w-">
                <CardHeader className=" text-white rounded-t-lg px-0">
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg, #0E4571 0%, #0A3554 50%, #062D4A 100%)",
                    }}
                    className="h-32 rounded-t-lg relative grid place-content-center"
                  >
                    <Image
                      src={"/contact-side.jpg"}
                      fill
                      className="opacity-20 object-top"
                      alt=""
                    />

                    <Headphones className="size-12" />
                  </div>
                  <div className="px-4 pt-6">
                    <CardTitle className="text-xl text-primary font-normal">
                      Our Support Team
                    </CardTitle>
                    <p className="text-sm text-secondary">
                      We&apos;re available to answer your questions and provide
                      assistance
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[8px] bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)] flex items-center justify-center text-white flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className=" text-xs text-secondary">Phone</p>
                      <p className="text-sm text-primary">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[8px] bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)] flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary">Email</p>
                      <p className="text-sm text-primary">
                        info@thebuildersdesk.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[8px] bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)] flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-secondaryd">Service Area</p>
                      <p className="text-sm text-primary">
                        Nationwide Coverage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[8px] bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)] flex items-center justify-center text-white flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary">Business Hours</p>
                      <p className="text-sm text-primary">
                        Mon-Fri: 8am - 6pm EST
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
