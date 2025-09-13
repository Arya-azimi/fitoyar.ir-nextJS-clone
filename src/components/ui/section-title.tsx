interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        {children}
      </h2>
      <div className="w-24 h-0.5 bg-red-500" />
    </div>
  );
}
