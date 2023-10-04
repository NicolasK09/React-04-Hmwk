import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    age: 0,
  });

  const handleAddUser = () => {
    // ვალიდაცია
    if (
      newUser.name.length < 4 ||
      newUser.surname.length < 4 ||
      !newUser.email.endsWith("@gmail.com") ||
      newUser.age < 18
    ) {
      alert("ველების ვალიდაცია ჩაიშალა");
      return;
    }

    // უნიკალური ID დამატება
    const uniqueId = Date.now().toString();
    const userToAdd = { ...newUser, id: uniqueId };

    // ახალი იუზერის დამატება
    setUsers([...users, userToAdd]);

    // ველების გასუფთავება
    setNewUser({
      id: "",
      name: "",
      surname: "",
      email: "",
      age: 0,
    });
  };

  const handleDeleteUser = (id) => {
    // იუზერის წაშლა
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Management App</h1>
      <div>
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Surname"
          value={newUser.surname}
          onChange={(e) => setNewUser({ ...newUser, surname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.surname} ({user.email}, {user.age} years old)
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
