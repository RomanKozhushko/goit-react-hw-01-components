import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css'


const FriendList = ({friends}) => {
    return (
        <ul  className={css.friendList} key={friends.id}>
            {friends.map(friend => (
                <FriendListItem
                key = {friend.id}
                avatar = {friend.avatar}
                name = {friend.name}
                isOnline = {friend.isOnline}
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendList