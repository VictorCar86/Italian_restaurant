import React from 'react'
import "./ArticleInfo.css"

const ArticleInfo = ({ img, altImg, description }) => {
  return (
    <article className='ArticleInfo'>
        <img
            className='ArticleInfo__img'
            src={img}
            alt={altImg}
        />
        <div className='ArticleInfo__text-container'>
            <div className='line-addon'></div>
            <p className='ArticleInfo__text-container__text'>
                { description }
            </p>
            <div className='line-addon'></div>
        </div>
        <div className='ArticleInfo__addon'></div>
    </article>
  )
}

export default ArticleInfo