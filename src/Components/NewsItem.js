import React from 'react'

export default function NewsItem(props) {
  const {pic, title, link , content, date, hits, topic} = props
  return (
    <div className="newsArticle" >
         <img className="picNews" src={pic} alt="pictureeee" />
           <h3 className="title"><a className='link' href={link} >{title}</a></h3>
           <p className="content">{content}</p>
         <div className="newsFooter">
           <p className="date">{date}  </p>
           <p className="hits">{hits}|{topic}</p>
         </div>
       </div>
  )
}