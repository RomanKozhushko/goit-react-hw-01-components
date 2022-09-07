import css from './FriendListItem.module.css'
import PropTypes from 'prop-types';


const FriendListItem = ({avatar,name,isOnline}) => {
    return (
        <li className={css.item}>
           <span className={ isOnline ? css.online : css.offline}></span>
           <img className={css.avatar} src={avatar} alt={name} width="100" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    isOnline : PropTypes.bool.isRequired,
    avatar : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
}

export default FriendListItem;