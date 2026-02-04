import CalculatorIcon from "@/components/atlas/CalculatorIcon";

interface TemplateCardProps {
  title: string;
  description: string;
  url: string;
}

export default function TemplateCard({
  title,
  description,
  url,
}: TemplateCardProps) {
  return (
    <div className="card bg-base-100 w-70 shadow-sm flex flex-row p-4">
      <div className="pr-2">
        <div className="bg-accent-2 p-1 rounded-lg">
          <CalculatorIcon />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="card-title font-serif text-sm">{title}</h2>
        <div className="card-body p-0">
          <span className="font-sans">{description}</span>
        </div>
        <a
          href={url}
          className="text-primary text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
    </div>
  );
}
