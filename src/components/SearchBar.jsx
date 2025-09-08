export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by name or skill..."
      className="w-full border rounded-xl p-2 mb-6"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
