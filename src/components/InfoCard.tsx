import React from "react";

export type InfoCardProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function InfoCard({ icon, title, subtitle, children }: InfoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex flex-col mb-4">
        <div className="flex items-center gap-2">
          {icon && (
            <span className="material-icons text-orange-500">{icon}</span>
          )}

          <span className="font-semibold text-lg text-gray-800">{title}</span>
        </div>
        {subtitle && (
          <span className="font-normal text-sm text-gray-500">{subtitle}</span>
        )}
      </div>
      {children}
    </div>
  );
}
