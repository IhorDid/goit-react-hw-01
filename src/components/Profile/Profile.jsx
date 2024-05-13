import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.avatar} src={image} alt={name} />
        <p className={styles.title}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.list_item}>
          <span>Followers</span>
          <span className={styles.statis}>{followers}</span>
        </li>
        <li className={styles.list_item}>
          <span>Views</span>
          <span className={styles.statis}>{views}</span>
        </li>
        <li className={styles.list_item}>
          <span>Likes</span>
          <span className={styles.statis}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
