import ProductDetail from '@/app/components/ProductDetail/ProductDetail';

export default function ProductPage({ params }: { params: { handle: string } }) {
  return (
    <ProductDetail handle={params.handle} />
  );
}
