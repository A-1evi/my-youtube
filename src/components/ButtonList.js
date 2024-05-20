import React from "react";
import { list } from "../utils/constants";
import CategoryButton from "./CategoryButton";
const ButtonList = () => {
  return (
    <div className="flex flex-wrap gap-2 ml-8">
      {list.map((item) => (
        <CategoryButton key={item} category={item} />
      ))}
    </div>
  );
};

export default ButtonList;
