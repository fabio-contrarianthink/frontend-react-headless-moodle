import HomeIcon from "@/components/icons/HomeIcon";
import ResourceIcon from "@/components/icons/ResourceIcon";
import VaultIcon from "@/components/icons/VaultIcon";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[72px] bg-background/90 backdrop-blur-md border-t border-border flex items-center justify-around px-6 z-50 pb-safe md:justify-center md:gap-12">
      <a href="/resources">
        <div className="flex flex-col items-center gap-1 cursor-pointer group md:flex-row md:gap-3">
          <ResourceIcon />
          <span className="hidden md:block text-sm font-medium text-muted-foreground group-hover:text-foreground">
            Resources
          </span>
        </div>
      </a>
      <a href="/">
        <div className="relative -top-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform border">
          <HomeIcon />
        </div>
      </a>
      <a href="/vault">
        <div className="flex flex-col items-center gap-1 cursor-pointer group md:flex-row md:gap-3">
          <VaultIcon />
          <span className="hidden md:block text-sm font-medium text-muted-foreground group-hover:text-foreground">
            Vault
          </span>
        </div>
      </a>
    </div>
  );
}
