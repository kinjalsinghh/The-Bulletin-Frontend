import { Link } from "react-router-dom";
import './NewsCard.css'
function NewsCard(props){
    return(
        <div className="news-card">
            <a href={props.titleurl} >
                <img src={props.imageurl} alt="News" className="news-card-image" />
            </a>
            <div className="news-card-content">
                <a href={props.titleurl}><h3 className="news-card-title">{props.title}</h3></a>
                <p className="news-card-description">{props.description}</p>
                <a href={props.titleurl}><p className="news-card-readmore">Read More..</p></a>
                <p className="news-card-time">{props.date}</p>

            </div>
        </div>
    )
}
export default NewsCard;


