const users = [
{ username: 'kminchelle', password: '0lelplR' },

];
export const login = async (username, password) => {
try {

const user = users.find(user => user.username === username && user.password === password);
if (!user) {
throw { status: 400, message: 'Invalid username or password' }; 
}

return { status: 200, message: 'Login successful', user }; 
} catch (error) {
throw error; 
}
};

