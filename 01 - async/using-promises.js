getUsers()
  .then(
    // This function is called when the user list has been loaded.
    userList => {
      console.log('User List:');
      userList.forEach(user => {
        console.log(user.name);
      });
    }
  ).catch(error => {
    console.error('Failed to load the user list:', error);
  });
