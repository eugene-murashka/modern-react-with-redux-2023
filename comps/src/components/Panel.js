import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const resultClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={resultClassNames}>
      {children}
    </div>
  );
}

export default Panel;
