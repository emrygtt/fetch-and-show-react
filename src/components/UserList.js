import React, { useEffect, useState } from 'react'
import  axios  from 'axios'

const UserList = ({
  setActiveUserId
}) => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data))
    .finally(()=> setLoading(false))
  }, [])
  

  return (
    <div>
      <h2>Kullanıcılar</h2>
      {loading && <div>yükleniyor ... </div>}
      <ul className='user-list'>
        {users?.map((user) => (
          <li onClick={() => setActiveUserId(user.id)} key={user.id}>{user.name}</li>
        ))

        }
      </ul>
    </div>
  )
}

export default UserList