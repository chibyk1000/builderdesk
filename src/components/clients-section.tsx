"use client";

export default function ClientsSection() {
  const clients = [
    { id: 1, name: "VOLVE" },
    { id: 2, name: "SHAWNS" },
    { id: 3, name: "Latch." },
    { id: 4, name: "STOCKET" },
    { id: 5, name: "DEMOTIVE GROUP" },
    { id: 6, name: "Embreeque" },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gray-500 text-sm mb-2">Our Clients</p>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 max-w-2xl leading-tight">
            We believe each client is a long term partnership
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-lg p-8 flex items-center justify-center min-h-40 shadow-sm hover:shadow-md transition"
            >
              <p className="text-center font-bold text-gray-800 text-sm">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
