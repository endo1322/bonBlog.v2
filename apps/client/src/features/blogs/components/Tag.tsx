type Props = {
  label: string;
};

export const Tag: React.FC<Props> = ({ label }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 font-medium text-blue-800 text-xs">
      {label}
    </span>
  );
};

export default Tag;
