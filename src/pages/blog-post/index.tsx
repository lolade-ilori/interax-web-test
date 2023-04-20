import BlogExtras from '@components/blogExtras'
import Footer from '@components/footer'
import Header from '@components/header'
import SubscriptionBox from '@components/subscriptionBox'
import React from 'react'
import { ContentBody, ContentSubHead, ExtraReadWrap, PostContentHead, PostContentSection, PostImgBanner, PostWrap, SeeMoreBtn, SeeMoreOverall } from './blogpost.styles'

const BlogPost = () => {
  return (
    <>
        <Header />

        <PostWrap>
            <PostImgBanner>
                <div className="image-wrap">
                    <img src="/assets/png/post-pic.png" alt="" />
                </div>
            </PostImgBanner>

            <PostContentSection>
                <PostContentHead>
                    <h3>Lorem ipsum dolor sit amet conse ctetu tincidunt et feugiat ac enim sceler.</h3>
                </PostContentHead>

                <ContentSubHead>
                    <div className="inner-wrap">
                        <p className="name-wrap">Bard Laureatte</p>
                        <p className="date-wrap">April 08, 2023</p>
                    </div>
                </ContentSubHead>

                <ContentBody>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Tristique congue elementum lacus id ipsum sapien. Dolor cras in mi nibh ut. Hendrerit porttitor vitae ultricies in nibh lobortis. Ut rhoncus fringilla sed nunc cum purus. Tellus lorem imperdiet nisl rutrum porttitor euismod. Sagittis aliquam viverra arcu ipsum. Semper fames feugiat iaculis id sit fringilla. Dolor sodales bibendum mauris felis lacus. Ultrices fermentum blandit arcu amet diam vivamus nulla diam nec. Nunc nunc posuere est sed justo.
                    </p>
                    <p>
                        Eu libero quam viverra nisl suspendisse nisi sed quam et. Sagittis lacus mauris arcu augue tempus in at. Sed vel faucibus eget est diam faucibus. Risus mauris facilisis arcu sed nisl. Pellentesque in odio malesuada morbi pharetra tortor. Elit ut in sit egestas luctus massa nisi. Eget odio massa sit in. Netus quisque placerat orci massa. Turpis non cras at auctor netus.
                    </p>
                    <p> 
                        Aliquam nisl ut tincidunt mi ultrices ultricies sed. Ut pharetra ac pharetra mauris ornare. Tristique dis metus a mauris. Sagittis risus mauris ut ultricies netus aliquam nunc tortor at. Et adipiscing justo ut morbi volutpat eu cursus. Sit arcu porttitor lacus tempus. Duis ipsum sapien aliquam interdum. Pharetra leo lacus senectus nunc.
                    </p>
                    <p>
                        Sit eu purus sed et egestas elementum. Dictum consequat eget proin condimentum egestas eget. Euismod purus donec semper elementum sit libero phasellus faucibus sit. Non quam ullamcorper enim pellentesque eget tellus. Ac tincidunt turpis purus nulla pellentesque. Bibendum id nulla iaculis mauris sit est. Ullamcorper dui non dignissim pretium. Pulvinar lacus sit morbi scelerisque nulla. Tellus iaculis elit varius et lectus odio praesent at nulla. Tristique amet tempor consectetur facilisis nibh commodo purus. At magna at condimentum ipsum lobortis. Suscipit mollis natoque sit ut neque nunc. Lectus mauris viverra vivamus dictum turpis ultrices.
                    </p>
                </ContentBody>
            </PostContentSection>
            
            <ExtraReadWrap>
                <div className="header-wrap">
                    <h4>You can also read these:</h4>
                </div>

                <div className="extras-wrap">
                    <BlogExtras />
                    <BlogExtras />
                    <BlogExtras />
                    <BlogExtras />
                </div>
            </ExtraReadWrap>

            <SeeMoreOverall>
                <SeeMoreBtn>
                    <p>See More</p>

                    <img src="/assets/svg/arrow-right.svg" />
                </SeeMoreBtn>
            </SeeMoreOverall>

        </PostWrap>

        <SubscriptionBox />
        <Footer />
    </>
  )
}

export default BlogPost