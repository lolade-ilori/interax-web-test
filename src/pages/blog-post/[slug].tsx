import BlogExtras from '@components/blogExtras'
import Footer from '@components/footer'
import Header from '@components/header'
import SubscriptionBox from '@components/subscriptionBox'
import {createClient} from "contentful"
import { ContentBody, ContentSubHead, ExtraReadWrap, LoadingWrap, PostContentHead, PostContentSection, PostImgBanner, PostWrap, SeeMoreBtn, SeeMoreOverall } from './blogpost.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Moment from 'moment';


const client = createClient({
    // @ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    // @ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY ,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'pageBlogPost'
    }) 

    const paths = res.items.map((items:any) => {
        return {
            params: {slug: items.fields.slug}
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({params}:any) => {
    const {items} = await client.getEntries({
        content_type: 'pageBlogPost',
        'fields.slug' : params.slug
    })

    const res = await client.getEntries({content_type: 'pageBlogPost'})

    if(!items?.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }

    }

    return {
        props:{ blog: items[0], extraBlogs: res?.items},
        revalidate: 1,
    }
}


export default function BlogPost({blog, extraBlogs}:any) {
    if (!blog) return <LoadingWrap>Loading...</LoadingWrap>

    const  {featuredImage, ingredients, title, cookingTime, content, author} = blog?.fields
    console.log(blog)
    console.log(extraBlogs, 'extra')
  return (
    <>
        <Header />

        <PostWrap>
            <PostImgBanner>
                <div className="image-wrap">
                    <img src={`https:${featuredImage?.fields?.file?.url}`} />
                </div>
            </PostImgBanner>

            <PostContentSection>
                <PostContentHead>
                    <h3>{title}</h3>
                </PostContentHead>

                <ContentSubHead>
                    <div className="inner-wrap">
                        <p className="name-wrap">{author?.fields?.avatar?.fields?.title}</p>
                        <p className="date-wrap">{Moment(author?.fields?.avatar?.sys?.updatedAt)?.format('MM-DD-YYYY')}</p>
                    </div>
                </ContentSubHead>

                <ContentBody>
                    {documentToReactComponents(content)}
                </ContentBody>
            </PostContentSection>
            
            <ExtraReadWrap>
                <div className="header-wrap">
                    <h4>You can also read these:</h4>
                </div>

                <div className="extras-wrap">
                    {
                        extraBlogs?.map((item:any) => {
                            <BlogExtras 
                                // key={item?.sys?.id}
                                // imgLink={item?.fields?.thumbnail?.fields?.file?.url}
                                // title={item?.fields?.title}
                                // shorts={item?.fields?.shortDescription}
                                // slug={item?.fields?.slug}
                            />
                        })
                    }
                    
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
