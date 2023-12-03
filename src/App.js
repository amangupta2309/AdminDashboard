import { useEffect, useState } from "react";
import Header from './components/header'
import getUsers from "./api/getUsers";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
// import Pagination from '@mui/material/Pagination';
import Box from './components/box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from './components/edit'
import searchHelper from "./utils/searchHelper";
import Pagination from "./components/pagination";


function App() {
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedForEdit, setSelectedForEdit] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [page, setPage] = useState(1);

  let userLength = 0;
  users.map((user)=>{
    if(user.visible){
      userLength += 1;
    }
  })

  console.log(users);

  const editHandler = (userForEdit)=>{
    setIsEdit(true);
    console.log(isEdit);
    setSelectedForEdit(userForEdit);
  }
  
  useEffect(()=>{
    getUsers(setUsers);
  },[])

  const handleEdit = (userForEdit)=>{
    let id = userForEdit.id;
    users.map((user)=>{
      if(user.id === id){
        user.name = userForEdit.name;
        user.email = userForEdit.email;
        user.role = userForEdit.role;
      }
    })
  }

  const handleDelete = (id)=>{
    
    let filterdUser = users.filter((user)=> user.id !== id)
    setUsers(filterdUser);
  }

  const searchUsers = (e)=>{
    setUsers(searchHelper(e.target.value, users));
  }

  const selectionHandler = (id)=>{
    users.map((user)=>{
      if(user.id === id){
        if(user.selected){
          user.selected = false;
          let newSelected = selectedUsers.filter((prev)=> prev !== id);
          setSelectedUsers(newSelected);
        }
        else{
          user.selected = true;
          setSelectedUsers((prev)=> [...prev, id]);
        }
        
      }
    })
    console.log(users)
  }
  const multipleDeleteHandler = ()=>{
    let newUser = users.filter((user)=>{
      return selectedUsers.includes(user.id) == false;
    })
    setUsers(newUser);
    setSelectedUsers([]);
  }

  let index = (page-1)*10;

  return (
    <div className="App">
      <Header />
      {selectedUsers.length !== 0 && <button onClick={multipleDeleteHandler}>Delete Users</button>}
        <Box>
          <input
            type="text"
            placeholder="Search Keywords"
            onChange={searchUsers}
            className='outline-blue-500'
          />
          {/* <Pagination count={10} /> */}
          <Pagination page={page} setPage={setPage} userLength={userLength}/>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> <Checkbox /></TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  user.visible && <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell> <Checkbox onClick={()=>selectionHandler(user.id)}/></TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell><span onClick={() =>editHandler(user)}><EditIcon /></span> <span onClick={()=>handleDelete(user.id)}><DeleteIcon /></span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {isEdit && <Edit user={selectedForEdit} setEdit={setIsEdit} handleEdit={handleEdit}/>}
        
    </div>
  );
}

export default App;
