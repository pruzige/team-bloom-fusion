const BrandsStrip = () => {
  const brands = [
    { name: "Coca-Cola", logo: "/lovable-uploads/8ab3e1f7-dd21-4cfc-a439-176a966b9ce2.png" },
    { name: "CRDB Bank", logo: "/lovable-uploads/b38bccb6-8be7-47a7-b936-aa90389352a9.png" },
    { name: "Konyagi", logo: "/lovable-uploads/bf01f994-f508-4e46-be18-a917812230fe.png" },
    { name: "NMB", logo: "/lovable-uploads/2007d18e-7ba1-429d-aa17-a608f72d4a1d.png" },
    { name: "Kantar", logo: "/lovable-uploads/3adc1045-ab1d-4282-be5c-3afd976489df.png" },
    { name: "Serengeti Breweries", logo: "/lovable-uploads/6b835ef9-f480-4f92-84cb-1d4170c671d8.png" },
    { name: "NBC", logo: "/lovable-uploads/6292264f-5e01-40d6-9df1-e31356bad96b.png" },
    { name: "Vodafone", logo: "/lovable-uploads/9cd3cbab-9a58-44ae-b118-24aae6b91bfd.png" },
    { name: "Airtel", logo: "/lovable-uploads/147b1db1-d089-4229-bc6d-33c612b0df19.png" },
    { name: "Yas Mixx", logo: "/lovable-uploads/fa277f5a-b8a2-4d28-ae49-341ef1381038.png" },
  ];

  // Duplicate the brands array to create seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Trusted by Leading Brands
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: "150px" }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsStrip;