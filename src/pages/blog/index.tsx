import Footer from '@components/footer'
import Header from '@components/header'
import SubscriptionBox from '@components/subscriptionBox'
import {createClient} from "contentful"
import Link from 'next/link'
import React, { useState } from 'react'
import { TabPills } from '../faq/faq.styles'
import { HeaderText, OurTeamWrap, TextSection } from '../team/team.styles'
import { BlogBanner, BlogContentTxt, BlogHeaderText, BlogItem, BlogListWrap, BlogOverall, PaginationBtn, PaginationBtnWrap, TabPillWrapper } from './blog.styles'


export async function getStaticProps() {
    // Inside here we want to connect to contentful, using createClient to setup a connection
  
    const client = createClient({
      // @ts-ignore
      space: process.env.CONTENTFUL_SPACE_ID,
      // @ts-ignore
      accessToken: process.env.CONTENTFUL_ACCESS_KEY ,
    })
  
    // function to get items from our contentful space
    const res = await client.getEntries({content_type: 'pageBlogPost'})
  
    return {
      props: {
        blogs: res?.items
      },
      revalidate: 1,
    }
  }

export default function Blog({blogs}: any) {
    const [tabChosen, setTabChosen] = useState('About interaX')
    console.log(blogs, 'l')

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
                        TabsOption?.map((item:any, id:any) => {
                            return (
                                <TabPills key={id} active={item?.name === tabChosen ? true : false} onClick={() => {setTabChosen(item?.name)}}>
                                    {item?.name}
                                </TabPills>
                            )
                        })
                    }

                </div>
            </TabPillWrapper>

            <BlogListWrap>
                <div className="inner-list-wrap">
                    {
                        blogs?.map((item:any) => {
                            return (
                                <BlogItem key={item?.sys?.id}>
                                    <div className="blog-item-image">
                                        <img src={`https:${item?.fields?.featuredImage?.fields?.file?.url}`} loading="lazy" />
                                    </div>
            
                                    <div className="blog-item-head">
                                        <h3>{item?.fields?.title}</h3>
                                    </div>
            
                                    <div className="blog-item-content">
                                        <p>{item?.fields?.shortDescription}</p>
                                    </div>
            
                                    <Link href={`/blog-post/${item?.fields?.slug}`}>
                                        <div className="readmore-btn">
                                            <p>Read more</p>
                                            <img src="assets/svg/readmore-arrow.svg" />
                                        </div>
                                    </Link>

                                </BlogItem>
                            )
                        })
                    }
                </div>

                {/* <PaginationBtnWrap>
                    <PaginationBtn>
                        Previous
                    </PaginationBtn>

                    <PaginationBtn active>
                        Next
                    </PaginationBtn>
                </PaginationBtnWrap> */}
            </BlogListWrap>
        </BlogOverall>

        <SubscriptionBox />
        <Footer />
    </>
  )
}
