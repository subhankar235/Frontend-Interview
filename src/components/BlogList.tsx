import { Blog } from "../api/blogs";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  blogs: Blog[];
  selectedId?: string;
  onSelect: (id: string) => void;
};

export default function BlogList({ blogs, selectedId, onSelect }: Props) {
  if (blogs.length === 0) {
    return <p className="text-sm text-gray-500">No blogs found</p>;
  }

  return (
    <div className="space-y-3">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          onClick={() => onSelect(blog.id)}
          className={`cursor-pointer transition ${
            selectedId === blog.id
              ? "border-indigo-500 bg-indigo-50"
              : "hover:bg-gray-50"
          }`}
        >
          <CardContent className="p-4 space-y-2">
            <p className="text-xs font-medium text-indigo-600">
              {blog.category.join(", ")}
            </p>

            <h3 className="font-semibold leading-tight">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-600 line-clamp-2">
              {blog.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
