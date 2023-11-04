interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className='flex flex-col gap-6 items-center max-w-[1384px]'>{children}</div>
  );
}
