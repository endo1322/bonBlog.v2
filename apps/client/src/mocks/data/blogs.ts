import type { GetBlogsResponseType } from "@/features/blogs/apis/blogs";

export const mockGetBlogs200ResponseData: GetBlogsResponseType = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    createdAt: "2025-03-22T12:00:00Z",
    updatedAt: "2025-03-22T12:00:00Z",
    tags: [
      { id: "1", name: "React" },
      { id: "2", name: "TypeScript" },
      { id: "3", name: "Frontend" },
    ],
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    createdAt: "2025-03-22T12:00:00Z",
    updatedAt: "2025-03-22T12:00:00Z",
    tags: [
      { id: "1", name: "React" },
      { id: "4", name: "Hooks" },
      { id: "3", name: "Frontend" },
    ],
  },
  {
    id: "3",
    title: "Building Modern UIs with Tailwind CSS",
    createdAt: "2025-03-22T12:00:00Z",
    updatedAt: "2025-03-22T12:00:00Z",
    tags: [
      { id: "5", name: "CSS" },
      { id: "6", name: "Tailwind" },
      { id: "7", name: "Design" },
    ],
  },
  {
    id: "4",
    title: "Mastering JavaScript Asynchronous Programming",
    createdAt: "2025-03-22T12:00:00Z",
    updatedAt: "2025-03-22T12:00:00Z",
    tags: [
      { id: "8", name: "JavaScript" },
      { id: "9", name: "Async Programming" },
      { id: "10", name: "Web Development" },
    ],
  },
];
