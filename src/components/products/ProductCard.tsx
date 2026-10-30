import Button from '@/components/ui/Button';
import type { Product } from '@/data/content';

interface ProductCardProps {
  product: Product;
  onLearnMore: (product: Product) => void;
}

export default function ProductCard({ product, onLearnMore }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-forest-200/70 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-900/10">
      <div className="aspect-[4/3] overflow-hidden bg-mint-100">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-forest-950">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-800/75">{product.description}</p>
        <div className="mt-6">
          <Button variant="secondary" className="w-full" onClick={() => onLearnMore(product)}>
            Learn More
          </Button>
        </div>
      </div>
    </article>
  );
}
