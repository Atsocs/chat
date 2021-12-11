import { Fragment, useEffect, useState } from "react";
import {
  getUsernamesAsync,
  getUserDataAsync,
  createConvesation,
} from "./apiCalls";
import Checkbox from "../Checkbox";
import Menu from "../Menu";

const CreateConversation = () => {
  const [usernames, setUsernames] = useState([]);
  const [userData, setUserData] = useState({});
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    getUsernamesAsync(setUsernames);
  }, []);

  useEffect(() => {
    getUserDataAsync(setUserData);
  }, []);

  const handleChange = (id) => {
    // toggle select user for this id
    setUsernames(
      usernames.map((user) => {
        if (user._id !== id) return user;
        return { ...user, selected: !user.selected };
      })
    );
  };

  const handleGroupNameOnChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userIds = usernames
      .filter((user) => user.selected)
      .map((user) => user._id);
    createConvesation(userIds, groupName);
  };

  const others = usernames.filter((user) => {
    return user.username !== userData.username;
  });

  let items = [
    {
      name: "Go To Chat",
      action: () => {
        window.location = "/";
      },
    },
  ];

  return (
    <div style={styles.mainContainer}>
      <Fragment>
        <Menu items={items} bgColor="red" />
        <h1>Add participants to the group</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.usersContainer}>
            {others.map((user, index) => {
              return (
                <label key={index} style={styles.checkbox}>
                  <Checkbox
                    label={user.username}
                    value={user.selected}
                    onChange={() => handleChange(user._id)}
                  />
                </label>
              );
            })}
          </div>
          <input
            type="text"
            placeholder="Group Name"
            onChange={handleGroupNameOnChange}
            value={groupName}
            style={styles.inputGroupName}
          />
          <input type="submit" value="Create Group" />
        </form>
      </Fragment>
    </div>
  );
};

export default CreateConversation;

const styles ={
  mainContainer: {
    height: '100vh',
    padding: 20,
    backgroundColor: 'maroon',
    color: 'white'
  },
  usersContainer: {
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'start',
    overflow: 'auto',
    marginBottom: 10,
    scrollbarWidth: 'none'
  },
  checkbox: {
    backgroundColor: 'green',
    minWidth: 200,
    textAlign: 'center'
  },
  inputGroupName: {
    marginBottom: 10
  }
}
