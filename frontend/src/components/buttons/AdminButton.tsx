const AdminButton = ({
  name,
  className,
  event,
  type,
}: {
  name: string;
  className?: string;
  event?: () => void;
  type?: "submit" | "button" | "reset";
}) => {
  return (
    <button
      className={`w-[197px] h-[47px]  text-center font-semibold text-4xl leading-6 rounded-md ${className}`}
      onClick={event}
      type={type}
    >
      {name}
    </button>
  );
};

export default AdminButton;
