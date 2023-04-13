import styled from 'styled-components'

export const InteraxHeader = styled.header `
    height: 80px;
    width: 100%;
    padding: 0 50px;
    position: absolute;
    z-index: 100;
    background-color: #ffffff;
    box-shadow: 0px 2px 16px rgba(231, 231, 231, 0.2);

    @media only screen and (max-width: 450px) {
        padding: 0 20px;
    }
`

export const InteraxDarkHeader = styled(InteraxHeader) `
    box-shadow: unset;
    background-color: transparent;
    /* z-index: unset; */
`

export const HeaderNav = styled.nav `
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .logo-wrap {
        /* border: solid 1px green; */
        img {
            cursor: pointer;
        }
    }

    .action-btns-wrap {
        /* border: solid 1px blue; */
        position: relative;

        ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            align-items: center;
            column-gap: 70px;

            @media only screen and (max-width: 1024px) {
                column-gap: 40px;
            }

            @media only screen and (max-width: 767px) {
                display: none;
            }

            li a {
                text-decoration: none;
                color: ${(props:any) => props.theme === ' light' ? '#fff' : '#000'};
                font-size: 18px;

                @media only screen and (max-width: 1024px) {
                    font-size: 16px;
                }

            }
        }

        .hamburger {
            display: none;

            img {
                width: 25px;
                cursor: pointer;
            }

            @media only screen and (max-width: 767px)  {
                display: block;
            }
        }
    }
`

export const DarkHeaderNav = styled(HeaderNav) `
    .action-btns-wrap {
        ul {
            li a {
                color: #fff;
            }
        }
    }
`

export const WaitlistBtn = styled.button `
    border: none;
    outline: none;
    border-radius: 30px;
    background-color: #1F2ADE;
    color: #fff;
    padding: 14px 30px;
    cursor: pointer;
`

export const DarkWaitlistBtn = styled(WaitlistBtn) `
    background-color: #fff;
    color: #1F2ADE;
`