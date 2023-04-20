import styled from 'styled-components'

export const PostWrap = styled.section `
    width: 100%;
    padding-bottom: 80px;
`

export const PostImgBanner = styled.div `
    /* border: solid 1px red; */
    width: 100%;
    height: 5/30px;
    padding-top: 110px;

    .image-wrap {
        img {
            width: 100%
        }
    }
`

export const PostContentSection = styled.section `
    padding: 80px 300px;
`

export const PostContentHead = styled.div `
    h3 {
        font-size: 40px;
        font-weight: 600;
        color: #1F2ADE;
        margin: 0;
    }
`

export const ContentSubHead = styled.div `
    padding: 30px 0;
    border-bottom: solid 1px #828282;

    .inner-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name-wrap {
            color: #2F2F2F;
            font-size: 14px;
            font-weight: 600;
            margin: 0;
        }

        .date-wrap {
            color: #828282;
            font-size: 14px;
            font-weight: 500;
            margin: 0;
        }
    }
`

export const ContentBody = styled.div `
    padding: 40px 0;

    p {
        color: #000;
        font-size: 15px;
        margin: 15px 0;
        font-weight: 400;
    }
`

export const ExtraReadWrap = styled.section `
    padding: 80px 300px;

    .header-wrap {
        h4 {
            color: #2F2F2F;
            font-size: 28px;
            font-weight: 600;
        }
    }

    .extras-wrap {
        margin-top: 40px;
    }

`

export const SeeMoreOverall = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
`

export const SeeMoreBtn = styled.div `
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 13px 0;
    width: 240px;
    cursor: pointer;
    border: solid 1px #1F2ADE;
    border-radius: 30px;

    p {
        font-size: 14px;
        font-weight: 600;
        color: #1F2ADE;
    }

    img {
        width: 11px;
    }
`

