type Props = {
  title: string;
  author?: string;
  keywords?: string;
};

export const Meta = ({ title, author, keywords }: Props) => {
  return (
    <>
      <title>{`${title} | bonBlog.v2`}</title>
      {author && <meta name="author" content={author} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </>
  );
};
