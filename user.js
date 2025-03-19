const users = [
    {email:"abc@gmail.com",password:"abc123"},
    {email:"abcd@gmail.com",password:"abc1234"},
    {email:"abcdef@gmail.com",password:"abcd1223"}
]

const updateUser = (email, newPassword) => {
    const user = users.find(user => user.email === email);
    if (!user) return null;
    user.password = newPassword;
    return user;
}

const deleteUser = (email) => {
    const index = users.findIndex(user => user.email === email);
    if (index === -1) return null;
    return users.splice(index, 1);
}

module.exports = {users, updateUser, deleteUser};
