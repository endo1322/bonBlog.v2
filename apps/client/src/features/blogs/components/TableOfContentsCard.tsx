import { AnchorLinkWrapper, Card } from "@/components/ui";
import type { Headings } from "@/utils/markdown";
import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  headings?: Headings;
};

export const TableOfContentsCard = ({ className, headings = [] }: Props) => {
  return (
    <Card as="nav" className={cn("h-fit w-fit", className)} isPointer={false}>
      <div className="w-64">
        <h2 className="border-b font-bold text-xl">目次</h2>
        <ul>
          {headings.map((heading) => {
            switch (heading.level) {
              case 1:
                return (
                  <li key={heading.text} className="mt-2 font-bold">
                    <AnchorLinkWrapper href={`#${heading.text}`}>{heading.text}</AnchorLinkWrapper>
                  </li>
                );
              case 2:
                return (
                  <li key={heading.text} className="mt-1 ml-2">
                    <AnchorLinkWrapper href={`#${heading.text}`}>{heading.text}</AnchorLinkWrapper>
                  </li>
                );
            }
          })}
        </ul>
      </div>
    </Card>
  );
};
