import style from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr className={style.headLine}>
          <th className={style.column}>Type</th>
          <th className={style.column}>Amount</th>
          <th className={style.column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={style.tableColumn} key={id}>
            <td className={style.typeTransaction}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
