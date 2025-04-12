import type { GetBlogResponseType, GetBlogsResponseType } from "@/features/blogs/apis/blogs";

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

export const mockGetBlog200ResponseData: GetBlogResponseType = {
  ...mockGetBlogs200ResponseData[0],
  content: `# Introduction

  React and TypeScript work well together to build modern, scalable web applications. TypeScript helps bring type safety and clarity to JavaScript, which is especially useful when building large-scale React applications. In this guide, we'll cover how to get started with this powerful combo.
  
  # Getting Started
  
  In this section, we'll cover the initial steps to set up your project with React and TypeScript, and discuss the benefits and tools you'll need to get started quickly.
  
  ## Benefits of Using TypeScript
  
  TypeScript offers several advantages when working with React:
  
  - Detects bugs before runtime
  - Improves code readability
  - Provides better autocompletion in your editor
  
  ## Preparing Your Environment
  
  Before creating your project, make sure you have the following ready:
  
  - Node.js installed on your machine
  - A code editor, such as Visual Studio Code
  - Basic understanding of JavaScript and React
  
  ## Creating the Project with React and TypeScript from Scratch
  
  Creating a project with React and TypeScript is simple and beginner-friendly. Most setups can be done in just a few commands.
  
  **Note**: While the setup is easy, understanding how types work takes a bit of practice. Don't worry if you find it confusing at first — take your time to learn and experiment with the types.
  
  Make sure to explore the file structure after initialization. You'll notice specific files related to your project’s settings, which will help you understand how everything works together.
  
  ## Next Steps
  
  Once you’ve set up the project, try creating a simple component, such as a Button component. Start defining props with types and experiment with passing different values. By doing so, you'll get more comfortable with how TypeScript integrates with React.
  
  This hands-on approach will help you understand the TypeScript type system as you go.
  
  # Conclusion
  
  Combining React with TypeScript helps you write safer and more maintainable code. As your app grows, TypeScript gives you the confidence to refactor and expand without breaking things.`,
};
