import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const FriendList = ({friends}) => {
    return (
        <ul  className={css.friendList} key={friends.id} style={{ backgroundColor: getRandomHexColor() }}>
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