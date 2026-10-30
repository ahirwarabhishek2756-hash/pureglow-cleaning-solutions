import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import type { Product } from '@/data/content';

interface ProductDialogProps {
  product: Product;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export default function ProductDialog({ product, onClose, onEnquire }: ProductDialogProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6" role="presentation">
      <div className="animate-fade-in absolute inset-0 bg-forest-950/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-dialog-title"
        className="animate-scale-in relative grid max-h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-w-3xl sm:rounded-3xl md:grid-cols-2"
      >
        <div className="aspect-[4/3] overflow-hidden bg-mint-100 md:aspect-auto md:rounded-l-3xl">
          <img src={product.image} alt={product.imageAlt} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="product-dialog-title" className="font-serif text-2xl font-semibold leading-[1.2] text-forest-950">
              {product.name}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-forest-800 transition-colors hover:bg-forest-50"
              aria-label="Close product details"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-forest-800/80">{product.details}</p>

          <div className="mt-6 rounded-2xl bg-forest-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest-600">Typically used on</p>
            <p className="mt-1 text-sm font-semibold text-forest-900">{product.bestFor}</p>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-forest-800/60">
            Always read the label for full instructions, precautions and suitable surfaces before use.
          </p>

          <div className="mt-auto pt-8">
            <Button
              className="w-full"
              onClick={() => onEnquire(product)}
            >
              Enquire About This Product
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
