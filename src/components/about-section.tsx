import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative text-white grid min-h-screen grid-cols-1 md:grid-cols-2 gap-8  px-6 py-20 bg-black/30">
      <Image
        src={"/about.webp"}
        alt="About Us"
        layout="fill"
        objectFit="cover"
        className="-z-1"
      />
      <div>
        <p className="text-3xl">Who We Are</p>
        <h2 className="text-6xl">About Our Company</h2>
      </div>
      <div className="text-xl font-light">
        <h3 className="font-bold">
          Built by Industry Insiders. Designed to Take Work Off Your Plate.
        </h3>
        ​
        <p>
          The Builders Desk was founded on a simple observation: construction
          companies are run by people who are exceptional at building — but the
          business of construction often gets in the way of the work itself.
        </p>
        ​
        <p>
          Estimating, project administration, bookkeeping, scheduling, document
          control — it all has to get done. But it doesn't all have to be done
          by you.
        </p>
        ​
        <p>
          We are a specialized remote back-office firm built exclusively for
          U.S. design and construction companies. Our team combines deep
          construction industry knowledge with professional training across
          project management, administration, accounting, and business
          development — giving you a capable, dedicated support system without
          the cost and commitment of hiring in-house.
        </p>
        ​
        <p>
          Every team member we deploy holds at minimum an undergraduate degree
          in their field. Our project managers are PMP-trained. Our admins
          understand construction workflows, not just general office work. We
          don't need to be taught the industry — we already speak the language.
        </p>
        ​
        <p>
          From a single contractor managing three projects to a growing firm
          juggling multiple contracts, we scale with you — on your terms, with
          no long-term commitments.
        </p>
        <p className="font-bold ">
          We handle your back office. You focus on building.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="col-span-1 md:col-span-2 mt-12 grid grid-cols-2 md:grid-cols-4 gap-1 pt-12 h-60 ">
        <div className="bg-white p-6 flex flex-col  ">
          <p className="text-4xl md:text-6xl -bold text-gray-900 mb-2">15</p>
          <p className="text-gray-600 mt-auto text-xl md:text-2xl">
            Years of <br /> Experience
          </p>
        </div>
        <div className="bg-white p-6 flex flex-col  ">
          <p className="text-4xl md:text-6xl -bold text-gray-900 mb-2">400+</p>
          <p className="text-gray-600 mt-auto  text-xl md:text-2x">
            Projects <br /> Completed
          </p>
        </div>
        <div className="bg-white flex flex-col  p-6 ">
          <p className="text-4xl md:text-6xl -bold text-gray-900 mb-2">95%</p>
          <p className="text-gray-600 mt-auto text-xl md:text-2xl">
            Client <br /> Satisfaction
          </p>
        </div>
        <div className="bg-white flex flex-col  p-6 ">
          <p className="text-4xl md:text-6xl -bold text-gray-900 mb-2">4.9/5</p>
          <p className="text-gray-600 mt-auto text-xl md:text-2xl">Client <br /> Rating</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
