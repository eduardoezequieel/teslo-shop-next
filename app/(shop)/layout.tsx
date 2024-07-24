import { TopMenu } from '@/components';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <TopMenu />
      {children}
    </main>
  );
};
export default ShopLayout;
