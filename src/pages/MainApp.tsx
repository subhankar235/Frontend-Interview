import { useState } from "react";
import type { Blog } from "../api/blogs";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import CreateBlogForm from "../components/CreateBlogForm";
import { useBlogs } from "../hooks/useBlogs";

export default function MainApp() {
  const { data: blogs, isLoading } = useBlogs();

  // sidebar selection
  const [view, setView] = useState<"blogs" | "create">("blogs");

  // selected blog
  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (isLoading) return <p>Loading...</p>;

  const selectedBlog =
    blogs?.find((b: Blog) => b.id === selectedId) || blogs?.[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar onSelect={setView} />

        <div className="flex flex-1">
          {view === "blogs" && (
            <>
              <div className="w-1/3 border-r p-4">
                <BlogList
                  blogs={blogs || []}
                  selectedId={selectedBlog?.id}
                  onSelect={setSelectedId}
                />
              </div>

              <div className="flex-1 p-6 overflow-y-auto">
                {selectedBlog && (
                  <BlogDetail blogId={selectedBlog.id} />
                )}
              </div>
            </>
          )}

          {view === "create" && (
            <div className="flex-1 p-6">
              <CreateBlogForm />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
