function ListItemPlaceholder(): JSX.Element {
  return (
    <div className="animate-[pulse_1s_ease-in-out_infinite] flex items-start md:block">
      <div className="w-20 md:w-full aspect-[33/49.5] bg-zinc-300 rounded" />
      <div className="w-[calc(100%_-_5rem)] md:w-full p-4 md:px-0">
        <div className="w-3/4 h-5 bg-zinc-300 rounded" />
        <div className="w-1/4 md:w-3/5 h-3 bg-zinc-300 rounded mt-1.5" />
        <div className="md:hidden w-1/2 md:w-2/5 h-3 bg-zinc-300 rounded mt-1" />
      </div>
    </div>
  );
}

export default ListItemPlaceholder;
