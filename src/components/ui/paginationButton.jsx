
const PaginationButton = (props)=>{
    return(
        <button className='shadow hover:shadow-lg active:bg-slate-400'>
            {props.children}
        </button>
    )
}
export default PaginationButton;