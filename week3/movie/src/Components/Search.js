export default function Search() {
  return (
    <div className="text-center">
      <form>
        <input
          type="text"
          className="border-2 border-black rounded-full px-4 py-2 w-[40%] focus:border-logo focus:outline-none"
          placeholder="Type here"
        />
        <input type="submit" value="search" className="hidden" />
      </form>
    </div>
  );
}
