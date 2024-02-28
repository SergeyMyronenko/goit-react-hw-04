import { FriendListItem } from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={style.item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
