import BlogExtras from '@components/blogExtras'
import Footer from '@components/footer'
import Header from '@components/header'
import SubscriptionBox from '@components/subscriptionBox'
import {createClient} from "contentful"
import { ContentBody, ContentSubHead, ExtraReadWrap, PostContentHead, PostContentSection, PostImgBanner, PostWrap, SeeMoreBtn, SeeMoreOverall } from './blogpost.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const client = createClient({
    // @ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    // @ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY ,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'blog'
    }) 

    const paths = res.items.map((items:any) => {
        return {
            params: {slug: items.fields.slug}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}:any) => {
    const {items} = await client.getEntries({
        content_type: 'blog',
        'fields.slug' : params.slug
    })


    return {
        props:{ blog: items[0]}
    }
}

export default function BlogPost({blog}:any) {
    const  {featuredImage, ingredients, title, cookingTime, information} = blog?.fields
    console.log(blog)
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
                        <p className="name-wrap">Bard Laureatte</p>
                        <p className="date-wrap">April 08, 2023</p>
                    </div>
                </ContentSubHead>

                <ContentBody>
                    {documentToReactComponents(information)}
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
