import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import rpcClient, { type BogsResponseType } from "./apis";

function App() {
  const [blogs, setBlogs] = useState<BogsResponseType>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await rpcClient.blogs.$get();
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {blogs.map((blog) => (
          <div key={blog.id}>{blog.title}</div>
        ))}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more!</p>
    </>
  );
}

export default App;
