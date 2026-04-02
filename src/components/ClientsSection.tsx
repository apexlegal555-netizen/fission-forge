const clients = [
  "L'Oreal", "Comcast", "Johnson & Johnson", "Cloudticity", "TruU",
  "CSSI", "WorkSpan", "Astound", "E8 Security", "Dimagi",
  "Shapa", "PathPresenter", "Frequence", "Hive Data", "DeepForest",
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Clients</h2>
        <p className="text-muted-foreground">
          Trusted by leading organizations across industries
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex marquee mb-8">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center justify-center px-10 shrink-0"
            >
              <div className="bg-background rounded-xl px-6 py-4 shadow-sm border border-border">
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex marquee-reverse">
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center justify-center px-10 shrink-0"
            >
              <div className="bg-background rounded-xl px-6 py-4 shadow-sm border border-border">
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
