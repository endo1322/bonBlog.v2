import BlogDetailPage from "@/features/blogs/pages/BlogDetail";
import { TestWrapper } from "@/tests/wrapper";
import { render, screen, within } from "@testing-library/react";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useParams: vi.fn(() => ({ id: "1" })),
  };
});

describe("BlogDetailPage", () => {
  describe("Success", () => {
    it("リクエストに成功した時、ブログのヘッダー要素が表示される", async () => {
      const expectedCreatedAt = "2025/3/22";
      const expectedUpdatedAt = "2025/3/22";
      const expectedTags = ["React", "TypeScript", "Frontend"];
      const expectedTitle = "Getting Started with React and TypeScript";

      render(<BlogDetailPage />, { wrapper: TestWrapper });

      const articleElement = await screen.findByRole("article");

      const headerElement = within(articleElement).getByRole("banner");
      const createdAtElement = within(headerElement).getByTestId("created-at"); // updatedAtと同一の値を持つ場合があるため、testIdによる取得を行う
      const updatedAtElement = within(headerElement).getByTestId("updated-at");
      const titleElement = within(headerElement).getByText(expectedTitle);
      const tag1Element = within(headerElement).getByText(expectedTags[0]);
      const tag2Element = within(headerElement).getByText(expectedTags[1]);
      const tag3Element = within(headerElement).getByText(expectedTags[2]);

      expect(headerElement).toBeInTheDocument();
      expect(createdAtElement).toHaveTextContent(expectedCreatedAt);
      expect(updatedAtElement).toHaveTextContent(expectedUpdatedAt);
      expect(titleElement).toBeInTheDocument();
      expect(tag1Element).toBeInTheDocument();
      expect(tag2Element).toBeInTheDocument();
      expect(tag3Element).toBeInTheDocument();
    });
    it("リクエストに成功した時、ブログの本文要素が期待するHTMLタグで表示される", async () => {
      const expectedHeading1Text = "Introduction";
      const expectedHeading2Text = "Benefits of Using TypeScript";
      const expectedPText = "TypeScript offers several advantages when working with React:";
      const expectedUlItemText = "Detects bugs before runtime";
      const expectedStrongText = "Note";

      render(<BlogDetailPage />, { wrapper: TestWrapper });

      const articleElement = await screen.findByRole("article");

      const Headding1Element = within(articleElement).getByRole("heading", {
        name: expectedHeading1Text,
      });
      const Headding2Element = within(articleElement).getByRole("heading", {
        name: expectedHeading2Text,
      });
      const PElement = within(articleElement).getByText(expectedPText);
      const UlItemElement = within(articleElement).getByText(expectedUlItemText);
      const StrongElement = within(articleElement).getByText(expectedStrongText);

      expect(articleElement).toBeInTheDocument();
      expect(Headding1Element.tagName).toBe("H2");
      expect(Headding2Element.tagName).toBe("H3");
      expect(PElement.tagName).toBe("P");
      expect(UlItemElement.tagName).toBe("LI");
      expect(UlItemElement.parentElement?.tagName).toBe("UL");
      expect(StrongElement.tagName).toBe("STRONG");
    });
    it("リクエストに成功した時、ブログの見出し要素の目次が表示される", async () => {
      const expectedListItemText = [
        "Introduction",
        "Getting Started",
        "Benefits of Using TypeScript",
        "Preparing Your Environment",
        "Creating the Project with React and TypeScript from Scratch",
        "Next Steps",
        "Conclusion",
      ];

      render(<BlogDetailPage />, { wrapper: TestWrapper });

      const navigationElement = await screen.findByRole("navigation");

      const navigationListElement = within(navigationElement).getByRole("list");
      const listItemElements = within(navigationListElement).getAllByRole("listitem");

      const listItemTexts = listItemElements.map((el) => el.textContent);
      expect(listItemTexts).toEqual(expectedListItemText);
    });
  });
});
