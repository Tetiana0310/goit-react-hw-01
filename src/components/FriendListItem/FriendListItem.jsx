import css from "../FriendListItem/FriendListItem.module.css"
export default function FriendListItem({ friend: { name, avatar, isOnline } })
{
     return (<div className={css.item}>
         <img src={avatar} alt="Avatar" width="48" />
         <p>{name}</p>
         <p>{isOnline ? "Online" : "Offline"}</p>
    </div>)
}