import { useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import ProductDialog from '@/components/products/ProductDialog';
import SectionHeading from '@/components/ui/SectionHeading';
import { products, type Product } from '@/data/content';

interface ProductsProps {
  onEnquire: (subject: string) => void;
}

export default function Products({ onEnquire }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEnquire = (product: Product) => {
    setSelectedProduct(null);
    onEnquire(`Enquiry about ${product.name}`);
  };

  return (
    <section id="products" className="scroll-mt-20 bg-mint-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="A cleaner range for every space."
          description="Six everyday cleaners, each designed for a particular part of your home, your workplace or your car."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onLearnMore={setSelectedProduct} />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDialog
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEnquire={handleEnquire}
        />
      )}
    </section>
  );
}
