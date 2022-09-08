import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/Transactions.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


 const Transactions = ({items}) => {
    return (
        <table className={css.transHistory} style={{ backgroundColor: getRandomHexColor() }}>
        <thead>
          <tr>
            <th className={css.transHistory__head}>Type</th>
            <th className={css.transHistory__head}>Amount</th>
            <th className={css.transHistory__head}>Currency</th>
          </tr>
        </thead>
        <tbody>
            {items.map(({id,type,amount,currency}) => (
              <tr className={css.transHistory__line} key={id}>
                <td className={css.transHistory__value}>{type}</td>
                <td className={css.transHistory__value}>{amount}</td>
                <td className={css.transHistory__value}>{currency}</td>
              </tr>
            ))}
        </tbody>
       </table> 
    )
 }
 Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      )
    }

    export default Transactions