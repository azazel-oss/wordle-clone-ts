import styles from "./Cell.module.css";
type Props = {
  value: string;
  style: string;
};

const Cell: React.FC<Props> = (props) => {
  const getClassForCell = (status: string) => {
    console.log(status);
    switch (status) {
      case "E":
        return styles["cell-exact"];
      case "N":
        return styles["cell-none"];
      case "P":
        return styles["cell-partial"];
      default:
        return;
    }
  };
  return (
    <span className={`${styles.cell} ${getClassForCell(props.style)}`}>
      <span>{props.value}</span>
    </span>
  );
};

export default Cell;
