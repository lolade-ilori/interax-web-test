import React from 'react'
import { PaginationBtn } from 'src/pages/blog/blog.styles'
import { BlogExtrasWrap, BlogImageWrap, BlogTxtWrap } from './blogextras.styles'
import Link from 'next/link'

const BlogExtras = ({imgLink, title, shorts, slug}:any) => {
  return (
    <>
        <BlogExtrasWrap>
            <div className="extras-inner-wrap">
                <BlogImageWrap>
                    <img src={`https:${imgLink}`} />
                </BlogImageWrap>

                <BlogTxtWrap>
                    <h5>{title}</h5>

                    <p>{shorts}</p>

                    <div className="read-more">
                        <Link href={`blog-post/${slug}`}>
                            <div className='readmore-btn'>
                                <p>Read more</p>

                                <img src="/assets/svg/arrow.svg" />
                            </div>
                        </Link>
            
                    </div>
                </BlogTxtWrap>
            </div>
        </BlogExtrasWrap>
    </>
  )
}

export default BlogExtras