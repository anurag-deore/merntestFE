const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function randomDate() {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0, 19).replace('T', ' ');
}

function randomUserID(users) {
  return users[Math.floor(Math.random() * users.length)].UserID;
}

const users = Array.from({ length: 5 }, () => ({
  UserID: uuidv4(),
  Username: `User_${Math.random().toString(36).substring(7)}`,
  PasswordHash: Math.random().toString(36).substring(7),
  Email: `email_${Math.random().toString(36).substring(7)}@example.com`,
  UserType: Math.random() > 0.5 ? 'admin' : 'regular'
}));

const tasks = Array.from({ length: 10000 }, () => ({
  TaskID: uuidv4(),
  UserID: randomUserID(users),
  Title: `Task ${Math.random().toString(36).substring(2, 15)}`,
  Description: `Description ${Math.random().toString(36).substring(2, 100)}`,
  Priority: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)],
  Status: ['pending', 'in progress', 'completed'][Math.floor(Math.random() * 3)],
  CreationDate: randomDate(),
  DueDate: randomDate(),
  Tags: `Tag_${Math.random().toString(36).substring(7)}`
}));

// Write users and tasks to JSON files
fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
