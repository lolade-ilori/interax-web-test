import styled from 'styled-components'
import { HeaderText } from './team.styles'

export const BlogOverall = styled.section `
    background-color: #fff;
    width: 100%;
    height: 100%;
`

export const BlogHeaderText = styled(HeaderText) `

    h2 {
        @media only screen and (max-width: 740px) {
            width: 90%;
        } 

        @media only screen and (max-width: 696px) {
            font-size: 45px;
            line-height: 50px;
        } 

        @media only screen and (max-width: 627px) {
            font-size: 40px;
        }

        @media only screen and (max-width: 559px) {
            font-size: 30px;
            line-height: 40px;
        }
    }

`

export const BlogContentTxt = styled.div`
    text-align: center;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    padding: 40px 0px;
    padding-bottom: 0;
    width: 50%;

    @media only screen and (max-width: 1280px) {
        width: 65%;
    } 

    @media only screen and (max-width: 990px) {
        width: 75%;
    } 

    @media only screen and (max-width: 845px) {
        width: 80%;
    }

    @media only screen and (max-width: 800px) {
        width: 90%;
    } 
`

export const BlogBanner = styled.div `
    padding: 0 300px;

    @media only screen and (max-width: 1230px) {
        padding: 0 150px;
    }

    @media only screen and (max-width: 900px) {
        padding: 0 50px;
    }

    @media only screen and (max-width: 576px) {
        padding: 0 20px;
        height: 200px;
    }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

export const TabPillWrapper = styled.div `
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 898px) {
        padding: 40px;
    }

    .inner-tab-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
`

export const BlogListWrap = styled.div `
    padding: 50px 250px;
    padding-bottom: 100px;

    @media only screen and (max-width: 1400px) {
        padding: 50px 200px;
    }

    @media only screen and (max-width: 1230px) {
        padding: 50px 150px;
    }

    @media only screen and (max-width: 1100px) {
        padding: 50px 100px;
    }

    @media only screen and (max-width: 992px) {
        padding: 50px;
    }

    @media only screen and (max-width: 767px) {
        padding: 50px 100px;
    }

    @media only screen and (max-width: 689px) {
        padding: 50px;
    }

    @media only screen and (max-width: 555px) {
        padding: 50px 30px;
    }

    @media only screen and (max-width: 460px) {
        padding: 50px 70px;
    }

    @media only screen and (max-width: 411px) {
        padding: 50px;
    }

    @media only screen and (max-width: 350px) {
        padding: 50px 30px;
    }


    .inner-list-wrap {
        display: flex;
        gap: 30px;
        row-gap: 70px;
        flex-wrap: wrap;
    }
`

export const BlogItem = styled.div `
    position: relative;
    flex: 30%;

    .blog-item-image {
        height: 200px;
        margin-bottom: 25px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .blog-item-head {
        margin-bottom: 15px;
        h3 {
            color: #000;
            font-weight: 600;
            font-size: 19px;
        }
    }

    .blog-item-content {
        margin-bottom: 25px;

        p {
            color: #000;
            font-weight: 400;
            font-size: 14px;

        }
    }

    .readmore-btn {
        display: flex;
        justify-content: center;
        padding: 10px 15px;
        border-radius: 30px;
        color: #828282;
        border: solid 1px #828282;
        cursor: pointer;
        gap: 7px;
        width: 150px;
        
        p {
            font-size: 12px;
            font-weight: 600;
            margin: 0;
        }

        img {
            width: 7px;
        }
    }
`

export const PaginationBtnWrap = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 80px;
`

export const PaginationBtn = styled.div <{active?: boolean}> `
    border-radius: 30px;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    border: solid 1px ${(props:any) => props.active ? '#828282' : '#D8D8D8'};
    color: ${(props:any) => props.active ? '#828282' : '#D8D8D8'};
    font-size: 12px;
    cursor: ${(props:any) => props.active ? 'pointer' : 'unset'};
    min-width: 150px;
    gap: 10px;

    img {
        width: 7px;
    }
`