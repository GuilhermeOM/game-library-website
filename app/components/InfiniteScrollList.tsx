interface InfiniteScrollListProps {
  children: JSX.Element;
}

export default function InfiniteScrollList({
  children,
}: InfiniteScrollListProps) {
  return (
    <div className='inline-flex flex-nowrap animate-infinite-scroll p-2'>
      {children}
    </div>
  );
}
