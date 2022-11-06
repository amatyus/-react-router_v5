import {Route, Switch, Redirect, Link, useParams} from 'react-router-dom'

function App() {
  return (
    <>
      <h1>App Layout</h1>
      <Link to="/users">Users list Page</Link>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UsersPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  )
}

const HomePage = () => {
  return (
    <>
      <h1>MainPage</h1>
    </>
  )
}

const UserProfile = () => {
  const {userId} = useParams()

  return (
    <>
      <h1>User page</h1>
      <div>
        <ul>
          <li>
            <Link to={`/users`}>Users list page</Link>
          </li>
          <li>
            <Link to={`/users/${userId}/edit`}>{`Edit user ${userId}`}</Link>
          </li>
        </ul>
        {`UserId: ${userId}`}
      </div>
    </>
  )
}

const UserPageEdit = () => {
  const {userId} = useParams()

  return (
    <>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link
            to={`/users/${userId}/profile`}
          >{`Go to profile user ${userId}`}</Link>
        </li>
        <li>
          <Link to={`/users/${+userId + 1}`}>Another user</Link>
        </li>
        <li>
          <Link to={`/users`}>Users list page</Link>
        </li>
      </ul>
    </>
  )
}

const UserList = () => {
  return (
    <>
      <h1>User List Page</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const UsersPage = () => {
  const {userId} = useParams()
  console.log(userId)
  return (
    <>
      <h1>Users Layout</h1>
      <Link to="/">Main Page</Link>

      <Switch>
        <Redirect exact from="/users/:userId" to="/users/:userId/profile" />
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:userId/profile" component={UserProfile} />
        <Route path="/users/:userId/edit" component={UserPageEdit} />
        <Redirect from="/users/:userId/*" to="/users/:userId/profile" />
      </Switch>
    </>
  )
}

const users = [
  {id: 1, name: 'User 1'},
  {id: 2, name: 'User 2'},
  {id: 3, name: 'User 3'},
  {id: 4, name: 'User 4'},
  {id: 5, name: 'User 5'}
]

export default App
