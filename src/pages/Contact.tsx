"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";



export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    services: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
  };

  const tabs = [
    { id: "contact", label: "Get in Touch" },
    { id: "hours", label: "Office Hours" },
    { id: "faq", label: "Quick Questions" },
  ];

  return (
    <div className="min-h-screen">
   

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#039A9A]/10 text-[#039A9A] text-sm font-medium mb-4">
              Contact us
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to streamline your construction operations? Whether you need
              help on one project or across your entire operation, we're here to
              support you. Reach out today for a free consultation.
            </p>
            <Button className="bg-[#039A9A] hover:bg-[#028080] text-white">
              Schedule Free Call →
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-12 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 text-base font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#039A9A]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#039A9A]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/building.jpg"
                alt="BuildersDesk team ready to help"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content based on active tab */}
            <div>
              {activeTab === "contact" && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Let's work together to grow your business!
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and one of our construction
                    operations specialists will reach out within 24 hours to
                    discuss how we can support your business needs.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="services">Services Needed</Label>
                      <Input
                        id="services"
                        placeholder="e.g., Project Management, Bookkeeping, Estimating"
                        value={formData.services}
                        onChange={(e) =>
                          setFormData({ ...formData, services: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your needs..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#039A9A] hover:bg-[#028080]"
                    >
                      Send Message →
                    </Button>
                  </form>

                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#039A9A]/10 mb-2">
                        <Mail className="h-5 w-5 text-[#039A9A]" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        support@buildersdesk.com
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#039A9A]/10 mb-2">
                        <Phone className="h-5 w-5 text-[#039A9A]" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        (123) 456-7890
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#039A9A]/10 mb-2">
                        <MapPin className="h-5 w-5 text-[#039A9A]" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        U.S. Based
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "hours" && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    We're here when you need us!
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Our team operates across multiple time zones to ensure you
                    get the support you need, when you need it. We understand
                    construction doesn't follow a 9-5 schedule.
                  </p>

                  <div className="space-y-6">
                    <Card className="border-border bg-card/50">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#039A9A]/10 flex-shrink-0">
                            <Clock className="h-6 w-6 text-[#039A9A]" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              Business Hours
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1">
                              Monday - Friday: 7:00 AM - 7:00 PM EST
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Saturday: 9:00 AM - 3:00 PM EST
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border bg-card/50">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#039A9A]/10 flex-shrink-0">
                            <MessageSquare className="h-6 w-6 text-[#039A9A]" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              Response Time
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1">
                              Email inquiries: Within 24 hours
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Phone calls: Same business day
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Emergency support: Available for active clients
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border bg-card/50">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#039A9A]/10 flex-shrink-0">
                            <MapPin className="h-6 w-6 text-[#039A9A]" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              Service Areas
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1">
                              Primary: United States (All 50 states)
                            </p>
                            <p className="text-sm text-muted-foreground">
                              We work remotely with construction companies
                              nationwide, providing seamless support regardless
                              of your location.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Button className="w-full mt-8 bg-[#039A9A] hover:bg-[#028080]">
                    Schedule a Call Now →
                  </Button>
                </div>
              )}

              {activeTab === "faq" && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Common questions answered quickly!
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Have a quick question? Check out these frequently asked
                    questions. For more detailed information, visit our FAQ page
                    or reach out directly.
                  </p>

                  <div className="space-y-6">
                    <Card className="border-border bg-card/50">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">
                          How quickly can you start?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Most clients are onboarded within 3-5 business days.
                          For urgent needs, we can expedite the process and have
                          someone supporting you within 48 hours.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-border bg-card/50">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">
                          Do you require long-term contracts?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          No. We offer flexible month-to-month agreements. You
                          can scale up, scale down, or pause services as your
                          business needs change.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-border bg-card/50">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">
                          What software do you work with?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          We're proficient in industry-standard tools including
                          Procore, Buildertrend, CoConstruct, QuickBooks, Sage,
                          Bluebeam, PlanGrid, and more. If you use something
                          specific, we can learn it.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-border bg-card/50">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-2">
                          How do you ensure data security?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          We follow strict security protocols including
                          encrypted communications, secure file sharing, NDAs
                          with all team members, and compliance with industry
                          data protection standards.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Button className="w-full mt-8 bg-[#039A9A] hover:bg-[#028080]">
                    View All FAQs →
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* </CHANGE> */}
      </main>

    
    </div>
  );
}
