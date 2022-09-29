import Cell from "./Cell";
import styles from "./WordRow.module.css";

type Props = {
  word?: string;
};

const WordRow: React.FC<Props> = (props) => {
  return (
    <div className={styles.row}>
      {props.word ? (
        props.word.split("").map((char, idx) => <Cell key={idx} value={char} />)
      ) : (
        <>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </>
      )}
    </div>
  );
};

export default WordRow;
