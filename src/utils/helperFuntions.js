

export const searchHelper = (key, users)=>{
    let search = key.toLowerCase();
    return users.map((user) => {
        if (
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.role.toLowerCase().includes(search)
        ) {
        user.visible = true;
        return user;
        }
        user.visible = false;
        return user;
    });
}
