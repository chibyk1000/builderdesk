"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Gift,
  Headphones,
  PhoneCall,
  MessageSquare,
  Send,
} from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
const Page = () => {

  const t = useTranslations("contactPage")
  const stats = t.raw("statsSection.stats") as {value:string, label:string, description:string}[]

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-white max-w-186 leading-7">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>
      <section className="py-16 px-2 lg:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="sm:grid lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <Card className=" border-none pt-0 col-span-6 self-start">
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
                      {t("formSection.title")}
                    </CardTitle>
                    <p className="text-center text-white text-lg">
                      {t("formSection.subtitle")}
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
                  <Card className="flex max-sm:pl-2 sm:items-center  justify-center py-2 border-none shadow-none bg-[#F9FAFB]">
                    <CardContent className="flex items-center gap-2 p-0">
                      <span className="size-10 rounded-xl inline-flex items-center justify-center bg-[linear-gradient(135deg,#2B7FFF_0%,#155DFC_100%)]">
                        <Clock className="w-5 h-5 text-white" />
                      </span>

                      <span className="font-medium text-sm text-[#404040]">
                        {t("formSection.features.response")}
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="flex max-sm:pl-2 sm:items-center  justify-center py-2 border-none shadow-none bg-[#F9FAFB]">
                    <CardContent className="flex items-center gap-2 p-0">
                      <span className="size-10 rounded-xl inline-flex items-center justify-center bg-[linear-gradient(135deg,#DBA400_0%,#F54900_100%)]">
                        <Headphones className="text-white w-5 h-5" />
                      </span>

                      <span className="font-medium text-sm text-[#404040]">
                        {t("formSection.features.support")}
                      </span>
                    </CardContent>
                  </Card>
                  <Card className="flex max-sm:pl-2 sm:items-center  justify-center py-2 border-none shadow-none bg-[#F9FAFB]">
                    <CardContent className="flex items-center gap-2 p-0">
                      <span className="size-10 rounded-xl inline-flex items-center justify-center bg-[linear-gradient(135deg,#00C950_0%,#00A63E_100%)]">
                        <MessageSquare className="text-white w-5 h-5" />
                      </span>

                      <span className="font-medium text-sm  text-[#404040]">
                        {t("formSection.features.consultation")}
                      </span>
                    </CardContent>
                  </Card>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="max-sm:text-sm">
                      {t("formSection.form.fullName")}
                    </Label>
                    <Input
                      id="fullName"
                      placeholder={t("formSection.form.fullNamePlaceholder")}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="max-sm:text-sm">
                      {t("formSection.form.email")}
                    </Label>
                    <Input
                      id="email"
                      placeholder={t("formSection.form.emailPlaceholder")}
                      type="email"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="max-sm:text-sm">
                      {t("formSection.form.phone")}
                    </Label>
                    <Input id="phone" placeholder="000 000 0000" />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      {t("formSection.form.company")}
                    </Label>
                    <Input
                      id="company"
                      placeholder={t("formSection.form.companyPlaceholder")}
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="service" className="max-sm:text-sm">
                      {t("formSection.form.service")}
                    </Label>
                    <Select>
                      <SelectTrigger id="service" className="w-full">
                        <SelectValue
                          placeholder={t("formSection.form.servicePlaceholder")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="project">
                          {t("formSection.form.services.projectManagement")}
                        </SelectItem>
                        <SelectItem value="admin">
                          {t("formSection.form.services.adminSupport")}
                        </SelectItem>
                        <SelectItem value="bookkeeping">
                          {" "}
                          {t("formSection.form.services.bookkeeping")}
                        </SelectItem>
                        <SelectItem value="marketing">
                          {t("formSection.form.services.marketing")}
                        </SelectItem>
                        <SelectItem value="hr">
                          {t("formSection.form.services.humanResources")}
                        </SelectItem>
                        <SelectItem value="design">
                          {t("formSection.form.services.architectureDesign")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message" className="max-sm:text-sm">
                      {t("formSection.form.message")}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t("formSection.form.messagePlaceholder")}
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
                      <Send /> {t("formSection.form.submit")}
                    </Button>
                  </div>
                </form>

                <p className="text-center text-sm text-secondary">
                  🔒 {t("formSection.form.secureNote")}
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
                      {t("supportTeam.title")}
                    </CardTitle>
                    <p className="text-sm text-secondary">
                      {t("supportTeam.subtitle")}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)] flex items-center justify-center text-white shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className=" text-xs text-secondary">
                        {t("supportTeam.phone.label")}
                      </p>
                      <p className="text-sm text-primary">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)] flex items-center justify-center text-white shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary">
                        {t("supportTeam.email.label")}
                      </p>
                      <p className="text-sm text-primary">
                        info@thebuildersdesk.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)] flex items-center justify-center text-white shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-secondaryd">
                        {t("supportTeam.location.label")}
                      </p>
                      <p className="text-sm text-primary">
                        {t("supportTeam.phone.value")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#0E4571_0%,#0A3554_100%)] flex items-center justify-center text-white shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary">
                        {t("supportTeam.hours.label")}
                      </p>
                      <p className="text-sm text-primary">
                        {t("supportTeam.hours.value")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="max-w-md mx-auto space-y-4">
                {/* --- Instant Support Card --- */}
                <Card className="bg-[linear-gradient(135deg,#25D366_0%,#20BD5A_100%)] h-52 text-white border-none shadow-md">
                  <CardContent className=" space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="size-12 bg-white/20 rounded-[12px] grid place-items-center">
                        <Phone className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className=" text-lg">
                          {" "}
                          {t("instantSupport.title")}
                        </h3>
                        <p className="text-xs opacity-80">
                          {t("instantSupport.subtitle")}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm opacity-80">
                      {t("instantSupport.description")}
                    </p>
                    <Button
                      variant="secondary"
                      className="bg-white text-success w-full hover:bg-green-100 font-medium mt-3"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      {t("instantSupport.button")}
                    </Button>
                  </CardContent>
                </Card>

                {/* --- 24-Hour Guarantee Card --- */}
                <Card
                  className="bg-[linear-gradient(155deg,rgba(219,164,0,40%)_0%,#ffffff_50%,#ffffff_100%)] border-none shadow-sm h-32.5 p-0 justify-center items-center"
                  style={{
                    boxShadow:
                      "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                  }}
                >
                  <CardContent className="p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-[linear-gradient(135deg,#DBA400_0%,#F54900_100%)] grid place-content-center size-12 rounded-[12px] shrink-0 self-start">
                        <Clock className=" w-6 h-6 text-white" />
                      </span>
                      <div>
                        <h3 className=" text-primary text-base">
                          {t("guarantee.title")}
                        </h3>
                        <p className="text-sm text-secondary">
                          {t("guarantee.description")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl  md:text-4xl  text-center mb-12">
            {t("statsSection.title")}
          </h2>
          <div className="grid md:grid-cols-3 md:h-58.5 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center shadow py-10 px-2 border border-[#0000001A] grid rounded-[12px]"
              >
                <div className="text-3xl md:text-4xl  text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xl  mb-2 text-[#1A1A1A]">{stat.label}</div>
                <p className=" text-[#4A5565]   max-w-xs mx-auto">
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
