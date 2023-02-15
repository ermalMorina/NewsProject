import React,{useState} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import './style.css'
import { Card, Col, Row, } from 'reactstrap'
export default function CallNews() {
    const [userInput, setUserInput] = useState('')
    const [apiData, setApiData]= useState([])
    const [showComponent, setShowComponent] = useState(false)



    function getUserInput(e){
        e.preventDefault()
        setUserInput(e.target.value)
    }

    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: userInput, lang: 'en', page: '1', page_size: '25'},
        headers: {
          'x-rapidapi-key': '95209cc806msh2a0d82aa61b292bp184361jsn21e6f9758baa',
          'x-rapidapi-host': 'free-news.p.rapidapi.com'
        }
      };
      
      
    
    function getNews(){
        axios.request(options).then(function (response) {
                console.log(response.data.articles);
                setApiData(response.data.articles)
                console.log("apiData",apiData)

                apiData.map((title, rank)=>
                    console.log("title", title, "rankuuuuuuuuuuuuuuuuuuuuuuuuu", rank)
                )
                setShowComponent(true)
                //error
            }).catch(function (error) {
                console.error(error);
            });
    }
    return (
        <Card className='newsResult'>
                <input onChange={getUserInput} className='userInput' type="text" placeholder='Search for news' />
                <button onClick={getNews} className='getDataButton' placeholder='clicke me'>Get News</button>
                {apiData.length > 0 ? <h5>{apiData.length}: Results</h5>:<></>}
            <div>
                {
                showComponent ?

                apiData.map(({media, title, link, summary, published_date, rank, topic})=> 
                    
                        
                       <NewsItem 
                    // pic, title, link , content, date, hits, topic
                        pic={media}
                        title={title}
                        link={link}
                        content={summary}
                        date={published_date}
                        hits={rank}
                        topic={topic}
                    /> 
                    
                    
                )
                :
                <h1></h1>
            }
            </div>  
            
        </Card>
    )
}
