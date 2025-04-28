type Props = {
  title: string;
  auther?: string;
  keywords?: string;
};

export const Meta = ({ title, auther, keywords }: Props) => {
  return (
    <>
      <title>{title}</title>
      {auther && <meta name="author" content={auther} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </>
  );
};
