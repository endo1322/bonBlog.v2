import rpcClient from "@/apis";
import reactLogo from "@/assets/react.svg";
import { PageLayout } from "@/components/layouts";
import { PATH } from "@/constants/path";
import { buttonVariants } from "@bonblogv2/ui/components/button";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import viteLogo from "/vite.svg";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await rpcClient.index.$get();
      if (res.ok) {
        const data = await res.json();
        setMessage(data.message);
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout title={"Home"}>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <div>{message}</div>
        <Link className={buttonVariants({ variant: "outline" })} to={PATH.BLOGS}>
          View All Blogs
        </Link>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more!</p>
    </PageLayout>
  );
}

export default App;
