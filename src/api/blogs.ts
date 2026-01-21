const BASE_URL = "http://localhost:3001";

export type Blog = {
  id: string;
  title: string;
  category: string[];
  description: string;
  coverImage: string;
  content: string;
   date: string;
  

};

/* ------------------ GET ALL BLOGS ------------------ */
export async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${BASE_URL}/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

/* ------------------ GET SINGLE BLOG ------------------ */
export async function getBlogById(id: string): Promise<Blog> {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

/* ------------------ CREATE BLOG ------------------ */
export type CreateBlogInput = {
  title: string;
  category: string[];
  description: string;
  coverImage: string;
  content: string;
};

export async function createBlog(
  blog: CreateBlogInput
): Promise<Blog> {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });

  if (!res.ok) throw new Error("Failed to create blog");

  return res.json();
}
