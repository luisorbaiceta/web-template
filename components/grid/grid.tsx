const VisualGrid = ({
  columnNumber,
  gap,
  side,
}: {
  columnNumber: number;
  gap: number;
  side: number;
}) => {
  return (
    <div
      className='flex absolute-expand pointer-events-none z-50'
      style={{
        gap,
        paddingLeft: side,
        paddingRight: side,
      }}
    >
      {new Array(columnNumber).fill(null).map((_, i) => (
        <div className='bg-red-600 opacity-10 w-full' key={i} />
      ))}
    </div>
  );
};

export { VisualGrid };
