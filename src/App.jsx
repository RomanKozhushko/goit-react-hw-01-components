import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

import data from "components/Statistics/data.json"
import Statistics from 'components/Statistics/Statistics';

import friends from "components/FriendList/friends.json";
import FriendList from "components/FriendList/FriendList";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
      <Profile
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>

  );
};

export default App
