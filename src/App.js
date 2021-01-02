import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './Components/Users.jsx';
import { PostList } from './Components/Posts.jsx';
import { PostEdit } from './Components/EditPost.jsx';
import { PostCreate } from './Components/PostCreate.jsx';
import { Dashboard} from './Components/Dashboard.jsx';

const dataProvider = jsonServerProvider (
  'https://jsonplaceholder.typicode.com'
);

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
)

export default App;



