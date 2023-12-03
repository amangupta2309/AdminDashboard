import axios from 'axios';

const getUsers = (setUsers) =>{
    axios.get(process.env.REACT_APP_API)
        .then((res)=>{
            let users = res.data;
            users.map((user)=>{
                user.visible = true;
                user.selected = false;
                return user;
            })
            setUsers(users);
        })
        .catch((err)=>{
            console.log(err);
        })
} 

export default getUsers;