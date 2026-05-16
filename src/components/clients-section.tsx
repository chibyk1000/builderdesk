"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ClientsSection() {
  const t = useTranslations("Clients");
  const clients = [
    { id: 1, name: "VOLVE", img: "/volve.avif" },
    { id: 2, name: "SHAWNS", img: "/shawn.avif" },
    { id: 3, name: "Latch.", img: "/latch.avif" },
    { id: 4, name: "STOCKET", img: "/stocket.avif" },
    { id: 5, name: "DEMOTIVE GROUP", img: "/demotive.avif" },
    { id: 6, name: "Embreeque", img: "/emb.avif" },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className=" text-sm 2xl:text-[36px] mb-2">{t("label")}</p>
          <h2 className="text-4xl 2xl:text-6xl text-accent max-w-2xl leading-tight">
            {t("title")}
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2  h-60">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white p-8 flex items-center justify-center min-h-40 shadow-sm hover:shadow-md transition"
            >
              <Image src={client.img} alt={client.name} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
