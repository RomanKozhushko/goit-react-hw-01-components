import PropTypes from 'prop-types';

import css from './Profile.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile} style={{ backgroundColor: getRandomHexColor() }}>
      <div className={css.description}>
      <img
          src={avatar}
          alt={username}
          className={css.avatar}
        />
        <div className={css.about}>
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
          </div>
    </div>

      <ul className={css.stats}>
        <li className={css.stats__likebox}>
          <span className={css.label}>Followers  </span>
          <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.stats__likebox}> 
          <span className={css.label}>Views  </span>
          <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.stats__likebox}> 
          <span className={css.label}>Likes  </span>
          <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>);
};

 Profile.propTypes = {
    username : PropTypes.string,
    tag : PropTypes.string,
    location : PropTypes.string,
    avatar : PropTypes.string,
    stats : PropTypes.object,
  }

export default Profile;

