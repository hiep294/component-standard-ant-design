import React, { useState } from "react";
import SortArrows from "./SortArrows";

const SortArrowsController = () => {
  const [sortObject, setSortObject] = useState({});
  const onSort = (name: string) => {
    const temp = {};
    // @ts-ignore
    if (sortObject[name] === undefined) {
      // @ts-ignore
      temp[name] = true;
    }
    // @ts-ignore
    if (sortObject[name] === true) {
      // @ts-ignore
      temp[name] = false;
    }
    setSortObject(temp);
  };

  return (
    <div>
      <SortArrows sortObject={sortObject} name="name" onClick={onSort} />
      <SortArrows sortObject={sortObject} name="name2" onClick={onSort} />
    </div>
  );
};

export default SortArrowsController;
