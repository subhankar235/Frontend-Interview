import { useState } from "react";
import { useCreateBlog } from "../hooks/useBlogs";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CreateBlogForm({
  onDone,
}: {
  onDone?: () => void;
}) {
  const { mutate, isPending } = useCreateBlog();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    mutate(
      {
        title,
        description,
        content,
        category: ["GENERAL"],
        coverImage: "",
       
      },
      {
        onSuccess: () => {
          setTitle("");
          setDescription("");
          setContent("");
          onDone?.(); // switch back to blog list
        },
      }
    );
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-6">
        Create New Blog
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Textarea
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <Textarea
          placeholder="Full blog content (plain text)"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create Blog"}
        </Button>
      </form>
    </div>
  );
}
