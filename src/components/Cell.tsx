import styles from "./Cell.module.css";
type Props = {};

const Cell: React.FC<Props> = () => {
  return <span className={styles.cell}>Q</span>;
};

export default Cell;
