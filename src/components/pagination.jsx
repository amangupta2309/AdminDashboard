import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Pagination = (props)=>{

    const {userLength, page, setPage} = props;
    let totalPage = Math.ceil(userLength/10.0);

    let pageNumber = [];
    for(let i=1;i<=totalPage;i++){
        pageNumber.push(
            <IconButton key={i} size="small" onClick={()=>selectPage(i)}>
                <div className={`${page === i ? 'bg-gray-300':""} p-[1rem] rounded-xl`}>
                {i}
                </div>
                
            </IconButton>
        )
    }
    const selectPage = (num)=>{
        setPage(num);
    }

    return(
        <div>
            <div className='inline'>
            <IconButton size="small" onClick={()=> selectPage(1)}>
                <KeyboardDoubleArrowLeftIcon /> 
            </IconButton>
            <IconButton size="small" onClick={()=> selectPage(Math.max(1, page-1))}>
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