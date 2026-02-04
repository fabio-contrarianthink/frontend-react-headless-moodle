import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-w-fill min-h-full flex flex-col">
      <Header />
      <div className="bg-base-200 flex-1">{children}</div>
      <Footer />
    </div>
  );
}
