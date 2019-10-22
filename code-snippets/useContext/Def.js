import React from "react";
import Definitions from "../../components/Definitions";
const Def = () => {
  const items = [
    {
      dt: "Prop Drilling",
      dd: "Having to pass down state through several nested components."
    }
  ];
  return <Definitions heading={"Glossary of Technial Terms"} items={items} />;
};

export default Def;
