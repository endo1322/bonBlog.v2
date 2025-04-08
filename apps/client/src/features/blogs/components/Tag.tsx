type Props = {
  label: string;
};

export const Tag = ({ label }: Props) => {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 font-medium text-blue-800 text-xs">
      {label}
    </span>
  );
};
