import { useBlog } from "../hooks/useBlogs";

type Props = {
  blogId: string;
};

export default function BlogDetail({ blogId }: Props) {
  const { data, isLoading, error } = useBlog(blogId);

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error loading blog</p>;

  return (
    <div className="max-w-3xl">
      {data.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>

      <div className="flex gap-2 mb-4">
        {data.category.map((c) => (
          <span
            key={c}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {c}
          </span>
        ))}
      </div>

      <p className="whitespace-pre-line text-gray-700">
        {data.content}
      </p>
    </div>
  );
}
