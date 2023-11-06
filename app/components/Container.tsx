interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  flexFlow?: 'column' | 'row';
}

export default function Container({
  children,
  flexFlow = 'column',
}: ContainerProps) {
  return (
    <div
      className={`flex gap-6 items-center justify-center mx-auto w-full 2xl:w-[1384px] 
      ${flexFlow === 'column' && 'flex-col'} 
      ${flexFlow === 'row' && 'flex-row'}`}
    >
      {children}
    </div>
  );
}
