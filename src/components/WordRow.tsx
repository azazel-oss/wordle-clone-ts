import Cell from "./Cell";
import styles from "./WordRow.module.css";

type Props = {
  word: string;
};

const WordRow: React.FC<Props> = (props) => {
  const auxWordArray = new Array(5).fill("");
  for (let i = 0; i < auxWordArray.length; i++) {
    if (props.word[i]) {
      auxWordArray[i] = props.word[i];
    }
  }
  return (
    <div className={styles.row}>
      {auxWordArray.map((char, idx) => (
        <Cell key={idx} value={char} />
      ))}
    </div>
  );
};

export default WordRow;
