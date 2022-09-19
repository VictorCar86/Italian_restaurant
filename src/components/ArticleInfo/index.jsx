import React from 'react'
import "./ArticleInfo.css"

const ArticleInfo = ({ imgTinySrc = "", imgBigSrc = "", imgAlt = "", description }) => {
  return (
    <article className='ArticleInfo'>
      <picture>
        <source srcSet={imgTinySrc} media="(max-width: 768px)" />
        <img
            className='ArticleInfo__img'
            src={imgBigSrc}
            alt={imgAlt}
        />
      </picture>
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