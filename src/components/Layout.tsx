import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <div className="bg-base-200 flex-1">{children}</div>
      <Footer />
    </div>
  );
}
