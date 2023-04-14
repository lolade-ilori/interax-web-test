import styled from 'styled-components'

export const BlogOverall = styled.section `
    background-color: #EEEEEE;
    width: 100%;
    height: 100%;
`

export const BlogContentTxt = styled.div`
    text-align: center;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    padding: 40px 340px;
    padding-bottom: 0;
`

export const BlogBanner = styled.div `
    padding: 0 300px;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

export const TabPillWrapper = styled.div `
    padding: 40px 320px;

    .inner-tab-wrap {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
`

export const BlogListWrap = styled.div `
    padding: 50px 250px;
    padding-bottom: 100px;


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
`