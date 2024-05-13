import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = clsx(styles.status, {
    [styles.isOnline]: isOnline,
  });
  return (
    <div className={styles.list_avatar}>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.text}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
