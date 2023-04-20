import styled from 'styled-components'

export const BlogExtrasWrap = styled.div `
    width: 100%;
    margin: 35px 0;

    .extras-inner-wrap {
        display: flex;
        align-items: center;
        gap: 20px;

    }
`

export const BlogImageWrap = styled.div `
    flex: 50%;
    height: 250px;

    img {
        width: 100%;
        object-fit: cover;
        height: inherit;

    }
`

export const BlogTxtWrap = styled.div `
    flex: 50%;
    h5 {
        font-weight: 600;
        font-size: 22px;
        color: #2F2F2F;
    }

    p {
        font-size: 13px;
        color: #2F2F2F;
        margin: 15px 0;
    }

    .read-more {
        display: flex;
        justify-content: flex-start;

        .readmore-btn {
        display: flex;
        justify-content: center;
        padding: 8px 12px;
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
            color: #828282
        }

        img {
            width: 7px;
        }
    }
    }
`