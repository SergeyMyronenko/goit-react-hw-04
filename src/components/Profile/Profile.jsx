import style from "./Profile.module.css";

export const Profile = ({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={style.profileBox}>
      <div>
        <img className={style.mainImage} src={image} alt="User avatar" />
        <p className={style.nameTitle}>{name}</p>
        <p className={style.nicknameTitle}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.statsList}>
        <li className={style.listItem}>
          <span className={style.listTitle}>Followers</span>
          <span className={style.listAmount}>{followers}</span>
        </li>

        <li className={style.listItem}>
          <span className={style.listTitle}>Views</span>
          <span className={style.listAmount}>{views}</span>
        </li>

        <li className={style.listItem}>
          <span className={style.listTitle}>Likes</span>
          <span className={style.listAmount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
