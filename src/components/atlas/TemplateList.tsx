import TemplateCard from "@/components/atlas/TemplateCard";

interface TemplateEntry {
  title: string;
  description: string;
  url: string;
}

interface TemplateListProps {
  entries: TemplateEntry[];
}

export default function TemplateList({ entries }: TemplateListProps) {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {entries.map((entry, index) => (
        <TemplateCard
          key={index}
          title={entry.title}
          description={entry.description}
          url={entry.url}
        />
      ))}
    </div>
  );
}
