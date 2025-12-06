const BookCardLoading = ({ index }: { index: number }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full p-3 animate-pulse"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="w-full bg-gray-600 rounded-sm h-60 "></div>
      <div className="w-full h-4 mt-2 bg-gray-600 rounded-sm "></div>
      <div className="w-24 h-4 mt-2 bg-gray-600 rounded-sm "></div>
    </div>
  );
};

export default BookCardLoading;
