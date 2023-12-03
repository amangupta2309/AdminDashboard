import { useState } from 'react';
import styles from './pagination.module.css';
// import PaginationButton from './ui/paginationButton'
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Pagination = (props)=>{
    const [pageInput, setPageInput] = useState();

    const {userLength, page, setPage} = props;
    let totalPage = Math.ceil(userLength/10.0);

    let pageNumber = [];
    // className={`${page === i ? 'bg-red-400':""}`}
    for(let i=1;i<=totalPage;i++){
        pageNumber.push(
            <IconButton key={i} size="medium" onClick={()=>selectPage(i)}>
                <div className={`${page === i ? 'bg-gray-300':""} p-[1rem] rounded-xl`}>
                {i}
                </div>
                
            </IconButton>
        )
    }
    
    const selectPage = (num)=>{
        setPage(num);
    }
    // const directToPage = (e)=>{
    //     if(e.key === "Enter"){
    //         setPage(pageInput);
    //         console.log(page);
    //     }
        
    // }
    // const clickHandler = ()=>{
    //     console.log("clicked");
    // }

    

    return(
        <div>
                {/* <span>Enter page</span>
                <input type='number' onKeyPress={directToPage} className='p-[1rem] m-[1rem] rounded-xl w-[4rem] shadow outline-blue-500 border-current' defaultValue={1} onChange={(e)=>{setPageInput(e.target.value)}}/> */}
            <div className='inline'>
            <IconButton size="small" onClick={()=> selectPage(1)}>
                <KeyboardDoubleArrowLeftIcon /> 
            </IconButton>
            <IconButton size="small" onClick={()=> selectPage(Math.max(0, page-1))}>
                <NavigateBeforeIcon /> 
            </IconButton>
                {pageNumber}
            <IconButton size="small" onClick={()=> selectPage(Math.min(totalPage, page+1))}>
                <NavigateNextIcon />
            </IconButton>
            <IconButton size="small" onClick={()=> selectPage(totalPage)}>
                <KeyboardDoubleArrowRightIcon /> 
            </IconButton>
            </div>
        </div>
    )
}
export default Pagination;