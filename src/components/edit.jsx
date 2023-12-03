import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const Edit = (props)=>{

    const {user, handleEdit, setEdit} = props;
    const handleChange = (e)=>{
        const name = e.target.name;
        user.name = e.target.value;
    }
    const handleSubmit = ()=>{
        handleEdit(user);
        handleClose();
    }

    const open =()=>{

    }
    const handleClose = ()=>{
        setEdit(false);

    }
    return(
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className='absolute top-[50%] h-[20rem] -mt-[10rem] left-[50%] w-[30rem] -ml-[15rem] bg-blue-400 rounded-xl'>
                    <h1 className='flex justify-center align-center mt-[1rem]'>
                        Edit the user
                    </h1>
                    <div className='flex flex-col space-y-[1rem] m-[1rem]'>
                        <input type='text' name='name' defaultValue={user.name} onChange={handleChange} className='rounded-md h-[2rem]'/>
                        <input type='email' name='email' defaultValue={user.email} onChange={handleChange} className='rounded-md h-[2rem]'/>
                        <input type='text' name='role' defaultValue={user.role} onChange={handleChange} className='rounded-md h-[2rem]'/>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={handleSubmit}>Outlined</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
export default Edit;