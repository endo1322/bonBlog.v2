import { AnchorLinkWrapper } from "@/components/ui";
import Markdown from "react-markdown";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const MdH1 = ({ children, ...props }: any) => {
  return (
    <h2 id={children} className="mt-8 mb-4 border-b-2 pb-2 font-bold text-3xl" {...props}>
      <AnchorLinkWrapper href={`#${children}`}>{children}</AnchorLinkWrapper>
    </h2>
  );
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const MdH2 = ({ children, ...props }: any) => {
  return (
    <h3 id={children} className="mt-4 mb-2 border-b pb-1 font-bold text-2xl" {...props}>
      <AnchorLinkWrapper href={`#${children}`}>{children}</AnchorLinkWrapper>
    </h3>
  );
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const MdP = ({ children, props }: any) => {
  return (
    <p className="mb-2 whitespace-pre-wrap" {...props}>
      {children}
    </p>
  );
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const MdUl = ({ children, ...props }: any) => {
  return (
    <ul className="list-inside list-disc pl-4" {...props}>
      {children}
    </ul>
  );
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const MdLi = ({ children, ...props }: any) => {
  return (
    <li className="mb-1 list-inside list-disc" {...props}>
      {children}
    </li>
  );
};

export const MarkdownWrapper = ({ markdown }: { markdown: string }) => {
  return (
    <Markdown
      components={{
        h1: MdH1,
        h2: MdH2,
        p: MdP,
        ul: MdUl,
        li: MdLi,
      }}
    >
      {markdown}
    </Markdown>
  );
};
