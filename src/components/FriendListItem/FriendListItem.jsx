import style from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnLine = clsx(
    style.onlineInfo,
    isOnline ? style.friendsIsOnline : style.friendsIsOffline
  );
  return (
    <div>
      <img className={style.friendsImg} src={avatar} alt="Avatar" width="48" />
      <p className={style.friendsName}>{name}</p>
      <p className={isOnLine}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
