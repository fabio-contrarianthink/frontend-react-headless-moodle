import React from "react";

export type StatCardProps = {
  /** Icon element to display above the value */
  icon: React.ReactNode;
  /** Numeric or string value for the statistic */
  value: number | string;
  /** Label below the value describing the stat */
  label: string;
  /** Tailwind color class for the icon and/or value (optional) */
  colorClass?: string;
};

export function StatCard({
  icon,
  value,
  label,
  colorClass = "text-gray-500",
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow flex flex-col items-center py-6">
      <span className={`text-3xl mb-2 ${colorClass}`}>{icon}</span>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-500 text-sm mt-1">{label}</div>
    </div>
  );
}
