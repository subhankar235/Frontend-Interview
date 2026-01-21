import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, createBlog } from "../api/blogs";
import type { Blog, CreateBlogInput } from "../api/blogs";

/* ------------------ LIST BLOGS ------------------ */
export function useBlogs() {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
}

/* ------------------ SINGLE BLOG ------------------ */
async function getBlogById(id: string): Promise<Blog> {
  const res = await fetch(`http://localhost:3001/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

export function useBlog(blogId: string) {
  return useQuery<Blog>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
    enabled: !!blogId,
  });
}

/* ------------------ CREATE BLOG ------------------ */
export function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation<Blog, Error, CreateBlogInput>({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
}
