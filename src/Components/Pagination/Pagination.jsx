import './Pagination.css'
function Pagination({totalnews,newsperpage, setCurrentPage}){
    let pages=[];

    for(let i=1;i<=Math.ceil(totalnews/newsperpage);i++){
        pages.push(i)
    }

    return(
        <div className="pagination">
            {
            pages.map((page,index)=>{
                return <button key={index} onClick={()=>{setCurrentPage(page); window.scrollTo(0,0)}}>{page}</button>
            })
            }
         
        </div>
       
    )
}
export default Pagination;