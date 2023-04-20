import styled from "styled-components";

export const HeaderWrap = styled.header `
    height: 80px;

    .inner-wrap {
        padding: 20px 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
            cursor: pointer;
        }
    }
`

export const BodyWrap = styled.section `
    padding: 50px 100px;

`

export const TextHeaderSect = styled.div `
    padding-bottom: 30px;
    border-bottom: solid 1px #828282;

    h3 {
        font-size: 40px;
        color: #1F2ADE;
        font-weight: 600;
    }

    .last-updated {
        margin-top: 30px;
        p {
            color: rgba(0, 0, 0, 0.5);
            font-size: 14px;
            font-weight: 600;
        }
    }
`

export const TextContent = styled.div `
    padding: 40px 0;

    p {
        font-size: 16px;
        color: #000000;
        font-weight: 400;
        margin: 15px 0;
    }

    .sub-text-wrap {
        margin-top: 30px;

        h4 {
            font-size: 23px;
            color: #2F2F2F;
            font-weight: 600;
            margin-bottom: 20px;
        }

        ul, ol {
            padding-left: 50px;
            li {
                font-size: 16px;
                color: #000000;
                font-weight: 400;
                margin: 15px 0;
            }
        }
    }
`