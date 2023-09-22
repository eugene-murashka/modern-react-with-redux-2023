import Link from "./Link";

function Sidebar() {
  const links = [
    { pathToShow: "Accordion", to: "/accordion" },
    { pathToShow: "Dropdown", to: "/dropdown" },
    { pathToShow: "Buttons", to: "/buttons" },
    { pathToShow: "Modal", to: "/modal" },
    { pathToShow: "Table", to: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.pathToShow}
        to={link.to}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.pathToShow}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
