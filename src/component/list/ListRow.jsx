import styles from "./ListRow.module.css";

const ListCell = ({ children , handle , index}) => {
  return <tr className={styles.cell} onClick={(e)=>{
    handle(index)
  }}>{children}</tr>;
};

export default ListCell;
