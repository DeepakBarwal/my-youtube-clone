const Shimmer = () => {
  return (
    <div className="flex flex-wrap p-2 m-2 shadow-lg">
      {Array(50)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              className="animate-pulse bg-gray-100 dark:bg-gray-400 h-72 w-72 m-2 p-2"
              key={idx}
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
