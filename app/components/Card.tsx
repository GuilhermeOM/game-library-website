interface CardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`flex w-full h-32 p-4 pb-8 gap-4 rounded-md border border-stone-900 bg-stone-950 relative ${className}`}
    >
      {children}
    </div>
  );
}
