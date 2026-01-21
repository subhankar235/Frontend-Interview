type Props = {
  onSelect: (view: "blogs" | "create") => void;
};

export default function Sidebar({ onSelect }: Props) {
  return (
    <div className="w-64 border-r p-4 space-y-2">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>

      <button
        onClick={() => onSelect("blogs")}
        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >
        📚 Show Blogs
      </button>

      <button
        onClick={() => onSelect("create")}
        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >
        ✍️ Create Blog
      </button>
    </div>
  );
}
