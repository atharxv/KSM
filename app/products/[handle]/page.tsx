import ProductDetail from '@/app/components/ProductDetail/ProductDetail';

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  return (
    <ProductDetail handle={handle} />
  );
}
