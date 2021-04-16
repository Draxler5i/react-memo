import React, { useMemo, useCallback ,useState, useEffect } from 'react'
import List from './List'

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Maria" }
];

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now() , name: text };
    setUsers([...users, newUser]);
    setText("");
  }

  const handleDelete = useCallback(( userId ) => {
    setUsers(users.filter(user => user.id !== userId));
  }, [users]);

  const handleSearch = () => {
    setSearch(text);
  }

  const filteredUsers = useMemo(() => users.filter(user => {
    if (!search) {
      return user;
    }
    return user.name.toLowerCase().includes(search.toLowerCase());
  }), [search, users]);

  const printUsers = useCallback(() => {
    console.log("Users changed \n", users);
  }, [users]);

  useEffect(() => {
    printUsers();
  }, [users, printUsers]);

  return (
    <div>
      <input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button onClick={handleSearch}>
      Search
    </button>
    <button onClick={handleAdd}>
      Add
    </button>
    <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
