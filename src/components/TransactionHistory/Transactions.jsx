import PropTypes from 'prop-types';
import css from './Transactions.module.css'







 Transactoins.propTypes = {
    title : PropTypes.string,
    stats : PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
         
        })
      )
}
export default Transactoins;


// "id": "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
//     "type": "payment",
//     "amount": "686.50",
//     "currency": "WST"


// id — унікальний ідентифікатор транзакції
// type — тип транзакції
// amount - сума транзакції
// currency - тип валюти