const AdminButton = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <button
      className={`w-[197px] h-[47px] text-white text-center font-semibold text-4xl leading-6 rounded-md ${className}`}
    >
      {name}
    </button>
  );
};

export default AdminButton;
