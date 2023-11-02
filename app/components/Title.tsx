interface TitleProps {
  children: string;
  stronger?: boolean;
}

export default function Title({ children, stronger = false }: TitleProps) {
  return (
    <h2
      className={`text-2xl mb-4 ${stronger ? 'font-extrabold' : 'font-bold'}`}
    >
      {children}
    </h2>
  );
}
