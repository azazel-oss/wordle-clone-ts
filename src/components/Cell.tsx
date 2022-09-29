import styles from "./Cell.module.css";
type Props = {
  value?: string;
};

const Cell: React.FC<Props> = (props) => {
  return (
    <span className={styles.cell}>
      <span>{props?.value}</span>
    </span>
  );
};

export default Cell;
