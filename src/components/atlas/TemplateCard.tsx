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
    <div className="card bg-base-100 w-70 shadow-sm flex flex-row">
      <div className="p-4">
        <div>
          <CalculatorIcon />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="card-title font-sans text-sm">{title}</h2>
        <div className="card-body p-0">
          <span className="font-sans">{description}</span>
        </div>
        <a
          href={url}
          className="text-primary "
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
    </div>
  );
}
