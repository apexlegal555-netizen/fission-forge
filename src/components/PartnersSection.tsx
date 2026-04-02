const partners = ["AWS", "Azure", "Google Cloud", "Salesforce", "Databricks", "ServiceNow", "Oracle"];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto mb-8">
        <h2 className="text-2xl font-bold text-center text-foreground">
          Trusted Engineering Partner For
        </h2>
      </div>
      <div className="relative">
        <div className="flex marquee">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-12 shrink-0"
            >
              <span className="text-xl font-bold text-muted-foreground/40 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
