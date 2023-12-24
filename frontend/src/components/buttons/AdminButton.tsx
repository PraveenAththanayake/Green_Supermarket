const AdminButton = ({
  name,
  className,
  event,
}: {
  name: string;
  className?: string;
  event?: () => void;
}) => {
  return (
    <button
      className={`w-[197px] h-[47px]  text-center font-semibold text-4xl leading-6 rounded-md ${className}`}
      onClick={event}
    >
      {name}
    </button>
  );
};

export default AdminButton;
