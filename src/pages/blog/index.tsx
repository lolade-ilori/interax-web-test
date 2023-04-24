import Footer from '@components/footer'
import Header from '@components/header'
import SubscriptionBox from '@components/subscriptionBox'
import React, { useState } from 'react'
import { TabPills } from '../faq/faq.styles'
import { HeaderText, OurTeamWrap, TextSection } from '../team/team.styles'
import { BlogBanner, BlogContentTxt, BlogHeaderText, BlogItem, BlogListWrap, BlogOverall, PaginationBtn, PaginationBtnWrap, TabPillWrapper } from './blog.styles'

const Blog = () => {
    const [tabChosen, setTabChosen] = useState('About interaX')

    const TabsOption:any = [
        {name: 'About interaX'},
        {name: 'Functional-based'},
        {name: 'Task-oriented'},
        {name: 'Technical'}, 
        {name: 'Security'}, 
    ] 

  return (
    <>
        <Header />

        <BlogOverall>
            <TextSection>
                <OurTeamWrap>
                    Blog
                </OurTeamWrap>

                <BlogHeaderText>
                    <h2>Explore the world’s knowledge about human health</h2>
                </BlogHeaderText>

                <BlogContentTxt>
                Fames maecenas morbi quis lacinia phasellus arcu hac varius mi. Arcu nisl non posuere pharetra elit est. Pellentesque nulla condimentum condimentum imperdiet. Porttitor nunc tincidunt ipsum erat nunc nec. Id aliquam placerat 
                </BlogContentTxt>
            </TextSection>

            <BlogBanner>
                <img src="/assets/png/blog-banner.png" />
            </BlogBanner>

            <TabPillWrapper>
                <div className="inner-tab-wrap">
                    {
                        TabsOption?.map((item:any) => {
                            return (
                                <TabPills active={item?.name === tabChosen ? true : false} onClick={() => {setTabChosen(item?.name)}}>
                                    {item?.name}
                                </TabPills>
                            )
                        })
                    }

                </div>
            </TabPillWrapper>

            <BlogListWrap>
                <div className="inner-list-wrap">
                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>

                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>

                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>

                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>

                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>

                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>

                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>

                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>

                    <BlogItem>
                        <div className="blog-item-image">
                            <img src="assets/png/blogitem-img.png" />
                        </div>

                        <div className="blog-item-head">
                            <h3>Nisi purus pretium sapien is. Suscipit gravida pretium</h3>
                        </div>

                        <div className="blog-item-content">
                            <p>Scelerisque tortor elementum malesuada nisi viverra cras arcu donec congue. Viverra risus nullam sit feugiat rhoncus aliquam nam justo purus. Feugiat volutpat ut facilisis at ut.</p>
                        </div>

                        <div className="readmore-btn">
                            <p>Read more</p>
                            <img src="assets/svg/readmore-arrow.svg" />
                        </div>
                    </BlogItem>
                </div>

                <PaginationBtnWrap>
                    <PaginationBtn>
                        Previous
                    </PaginationBtn>

                    <PaginationBtn active>
                        Next
                    </PaginationBtn>
                </PaginationBtnWrap>
            </BlogListWrap>
        </BlogOverall>

        <SubscriptionBox />
        <Footer />
    </>
  )
}

export default Blog