import React from 'react'
import UserCard from './UserCard'

export default function UserCardList(props) {
  return (
    <>
    {props.users.map(user => (
     <UserCard user={user} key={ user.id }/>
    )
    )}
    </>
  )
}
