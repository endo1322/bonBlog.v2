export interface Props {
  label: string;
}

export const Tag: React.FC<Props> = ({ label }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      {label}
    </span>
  );
};

export default Tag;
