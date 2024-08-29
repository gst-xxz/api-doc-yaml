const Pane: React.FC<React.PropsWithChildren<{ title: React.ReactNode }>> = ({
  title,
  children,
}) => {
  return (
    <div>
      <div className="mb-2 font-medium">{title}</div>
      {children}
    </div>
  );
};

export default Pane;
