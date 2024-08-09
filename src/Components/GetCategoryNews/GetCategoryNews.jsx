import { useEffect, useState } from "react"
import axios from 'axios'
import NewsCard from "../NewsCard/NewsCard";
import './GetCategoryNews.css'
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
function GetCategoryNews(props){
    const [news,setNews]=useState([]);
    const [currentPage, setCurrentPage]=useState(1);
    const newsperPage=16;
    const lastIndex=currentPage*newsperPage;
    const startIndex=lastIndex-newsperPage;
    const data=news.slice(startIndex,lastIndex);
    
    useEffect(()=>{
        axios.get(`https://bulletin-backend.onrender.com/${props.category}`)
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
        <div className="getcategory">
           <div className='categorynews'>
             {data.map((news,i)=>{
                return <NewsCard key={i} titleurl={news.titleurl} description={news.description} title={news.title} imageurl={news.imageurl} date={news.date}/>
            })}
           </div> 
           <Pagination totalnews={news.length} newsperpage={newsperPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default GetCategoryNews;