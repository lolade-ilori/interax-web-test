import React from 'react'
import { PaginationBtn } from 'src/pages/blog/blog.styles'
import { BlogExtrasWrap, BlogImageWrap, BlogTxtWrap } from './blogextras.styles'

const BlogExtras = () => {
  return (
    <>
        <BlogExtrasWrap>
            <div className="extras-inner-wrap">
                <BlogImageWrap>
                    <img src="/assets/png/blog-extra.png" />
                </BlogImageWrap>

                <BlogTxtWrap>
                    <h5>Nisi purus pretium sapien lorem risus mauris. Suscipit gravida pretium ornare pellentesque </h5>

                    <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>

                    <div className="read-more">
                        <div className='readmore-btn'>
                            <p>Read more</p>

                            <img src="/assets/svg/arrow.svg" />
                        </div>
                    </div>
                </BlogTxtWrap>
            </div>
        </BlogExtrasWrap>
    </>
  )
}

export default BlogExtras