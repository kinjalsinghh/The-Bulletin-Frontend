import { useEffect, useState } from "react"
import axios from 'axios'
import NewsCard from "../NewsCard/NewsCard";
import Pagination from "../Pagination/Pagination";
import './GetAll.css'
function GetAll(){
    const [news,setNews]=useState([]);
    const [currentPage, setCurrentPage]=useState(1);
    const newsperPage=16;
    const lastIndex=currentPage*newsperPage;
    const startIndex=lastIndex-newsperPage;
    const data=news.slice(startIndex,lastIndex);
    useEffect(()=>{
        axios.get('https://bulletin-backend.onrender.com/all')
        .then((res)=>{
            console.log(res)
            if(res.data.success===true){
                setNews(res.data.news)
            }else{
                console.log(res.data.message)
            }
        })
    },[])
    return(
        <div className="getall">
           <div className='allnews'>
             {data.map((news,i)=>{
                return <NewsCard key={i} description={news.description} titleurl={news.titleurl} title={news.title} imageurl={news.imageurl} date={news.date}/>
            })}
           </div> 
           <Pagination totalnews={news.length} newsperpage={newsperPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}
export default GetAll;