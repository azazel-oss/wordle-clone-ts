import { Fragment } from "react";
import Cell from "./Cell";

type Props = {};

const WordRow: React.FC<Props> = () => {
  return (
    <div>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
};

export default WordRow;
