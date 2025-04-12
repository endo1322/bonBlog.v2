import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  href: string;
  offset?: string;
  children: React.ReactNode;
};

export const AnchorLinkWrapper = ({ href, offset = "16", children }: Props) => {
  return (
    <AnchorLink offset={offset} href={href}>
      {children}
    </AnchorLink>
  );
};
