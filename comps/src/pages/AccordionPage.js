import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "slkdjf",
      label: "Can I use JavaScript on a project?",
      content:
        "You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.",
    },
    {
      id: "igiifkg",
      label: "Can I use React on a project?",
      content:
        "You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.",
    },
    {
      id: "mdjdj",
      label: "Can I use C# on a project?",
      content:
        "You can use JavaScript on any project you want. You can use JavaScript on any project you want. You can use JavaScript on any project you want.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
