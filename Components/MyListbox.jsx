function MyListbox({ rooms, setRooms, setCurrenPage }) {
  return (
    <>
      <select
        name="cars"
        id="cars"
        className="bg-slate-100 rounded-lg text-gray-400 text-sm px-2"
        value={rooms}
        onChange={(e) => {
          setRooms(e.target.value), setCurrenPage(1);
        }}
      >
        <option value={""}>All</option>
        <option value={1}>1 Room</option>
        <option value={2}>2 Rooms</option>
        <option value={3}>3 Rooms</option>
        <option value={4}>4 Rooms</option>
      </select>
    </>
  );
}

export default MyListbox;
