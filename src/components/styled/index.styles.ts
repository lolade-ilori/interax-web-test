import styled from "styled-components"

export const WrapGrey = styled.div`
  min-height: 900px;
  position: relative;
  width: 100%;
  background-color: #ffffff;

  @media only screen and (max-width: 768px) {
    min-height: 600px;
  }

  @media only screen and (max-width: 430px) {
    min-height: 550px;
  }

  .inner-wrap {
    padding-top: 150px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header-wrap {
      padding: 0 380px;

      @media only screen and (max-width: 1391px) {
        padding: 0px 330px;
      }

      @media only screen and (max-width: 1130px) {
        padding: 0 150px;
      }

      @media only screen and (max-width: 620px) {
        padding: 0 50px;
      }

      @media only screen and (max-width: 430px) {
        padding: 0 20px;
      }

      h2 {
        font-size: 65px;
        text-align: center;
        color: #000;
        line-height: 70px;
        font-family: "RecoletaAlt-Regular";
        font-weight: 500;

        @media only screen and (max-width: 992px) {
          font-size: 50px;
          line-height: 60px;
        }

        @media only screen and (max-width: 768px) {
          font-size: 40px;
          line-height: 40px;
        }

        @media only screen and (max-width: 600px) {
          font-size: 35px;
        }
      }
    }

    .content-wrap {
      padding: 30px 480px;
      @media only screen and (max-width: 1391px) {
        padding: 10px 350px;
      }

      @media only screen and (max-width: 1200px) {
        padding: 10px 200px;
      }

      @media only screen and (max-width: 992px) {
        padding: 10px 150px;
      }

      @media only screen and (max-width: 768px) {
        padding: 10px 150px;
      }

      @media only screen and (max-width: 689px) {
        padding: 10px 50px;
      }

      @media only screen and (max-width: 480px) {
        padding: 10px 30px;
      }

      p {
        color: #000;
        font-size: 20px;
        text-align: center;
        font-weight: 400;

        @media only screen and (max-width: 768px) {
          font-size: 17px;
        }

        @media only screen and (max-width: 620px) {
          font-size: 14px;
        }
      }
    }

    .btn-wrap {
      display: flex;
      justify-content: center;
      margin: 30px 0;
    }
  }
`

export const ImageBannerWrap = styled.div`
  display: flex;
  position: relative;
  width: 70%;
  gap: 10px;
  flex-wrap: wrap;
  /* z-index: 30; */

  @media only screen and (max-width: 555px) {
    width: 90%;
  }

  .image-subwrap {
    flex: 45%;
  }
  .image-1 {
    border-top-left-radius: 30px;

    width: 100%;
    height: 100%;
  }

  .image-2 {
    width: 100%;
    height: 100%;
  }

  .image-3 {
    border-bottom-right-radius: 30px;
    width: 100%;
    height: 100%;
  }
`

export const MissionSection = styled.section`
  background-color: #1f2ade;
  position: relative;
  min-height: 700px;

  .absolute-img {
    position: absolute;
    bottom: 0;
    right: 200px;
    height: 800px;
    width: 50%;
    opacity: 0.2;
    object-fit: contain;
    /* display: none; */
    /* z-index: -20; */

    @media only screen and (max-width: 1200px) {
      width: 80%;
      right: unset;
      left: 100px;
    }

    @media only screen and (max-width: 992px) {
      width: 80%;
      right: unset;
      left: 100px;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 800px;
      right: unset;
      left: unset;
    }
  }

  .inner-wrapper {
    padding-top: 100px;

    @media only screen and (max-width: 768px) {
      padding-top: 80px;
    }

    .head-text {
      padding-left: 60px;
      padding-bottom: 60px;

      @media only screen and (max-width: 480px) {
        padding-left: 30px;
      }
      h3 {
        color: #fff;
        font-size: 45px;
        font-weight: 500;

        @media only screen and (max-width: 480px) {
          font-size: 35px;
        }
      }
    }
  }
`

export const VisionSection = styled.section`
  background-color: #000;
  min-height: 600px;
  position: relative;

  .absolute-img {
    position: absolute;
    bottom: 0;
    right: 200px;
    height: 800px;
    width: 50%;
    object-fit: contain;

    @media only screen and (max-width: 992px) {
      width: 80%;
      right: unset;
      left: 100px;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 800px;
      right: unset;
      left: unset;
    }
  }

  .inner-wrapper {
    padding-top: 100px;

    .head-text {
      padding-left: 60px;
      padding-bottom: 60px;

      @media only screen and (max-width: 480px) {
        padding-left: 30px;
      }

      h3 {
        color: #fff;
        font-size: 45px;
        font-weight: 500;

        @media only screen and (max-width: 480px) {
          font-size: 35px;
        }
      }
    }
  }
`
export const VisionFlex = styled.div`
  display: flex;
  gap: 150px;
  /* height: 600px; */

  @media only screen and (min-width: 1551px) {
    height: unset;
  }

  @media only screen and (max-width: 1200px) {
    gap: 80px;
    height: unset;
  }

  @media only screen and (max-width: 992px) {
    gap: 120px;
    flex-direction: column;
  }

  .img-wrap {
    flex: 25%;

    @media only screen and (max-width: 1200px) {
      flex: 30%;
    }
    img {
      border-top-right-radius: 40px;
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 2;

      @media only screen and (max-width: 992px) {
        height: 600px;
      }

      @media only screen and (max-width: 480px) {
        height: 100%;
      }
    }
  }
`

export const ContentWrap = styled.div`
  flex: 40%;
  padding-right: 130px;

  @media only screen and (max-width: 1200px) {
    padding-right: 60px;
    flex: 30%;
  }

  @media only screen and (max-width: 992px) {
    padding-right: 60px;
    padding-left: 40px;
  }

  .subcontent-wrap {
    position: relative;
    padding-left: 35px;
    padding-bottom: 30px;
    border-left: dashed 1px #fff;

    .ellipse {
      width: 15px;
      height: 15px;
      background-color: #fff;
      left: -8px;
      top: 5px;
      position: absolute;
      border-radius: 50%;
    }

    p {
      font-size: 21.6px;
      color: #fff;
      margin-top: 0;

      @media only screen and (max-width: 480px) {
        font-size: 17px;
      }
    }
  }
`

export const MissionContentWrap = styled(ContentWrap)`
  .subcontent-wrap {
    border-left: solid 1px #fff;
    padding-bottom: 80px;
  }
`

export const ServiceSection = styled.section`
  width: 100%;
  background-color: #f9f9ff;

  .inner-wrap {
    padding: 80px 250px;

    @media only screen and (max-width: 1200px) {
      padding: 80px 120px;
    }

    @media only screen and (max-width: 992px) {
      padding: 80px 80px;
    }

    @media only screen and (max-width: 885px) {
      padding: 60px 40px;
    }

    .header-wrap {
      display: flex;
      justify-content: flex-start;

      @media only screen and (max-width: 777px) {
        justify-content: center;
      }

      .what-we-do {
        border-radius: 30px;
        padding: 11px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        color: #1f2ade;
        font-size: 13px;
        background: rgba(31, 42, 222, 0.1);
      }
    }
  }
`

export const ServiceTypesBox = styled.div`
  display: block;
  margin-top: 50px;
`

export const ServiceFlexBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 30px;
    margin-bottom: 100px;
  }

  .txt-wrapper {
    flex: 50%;

    .inner-txt-wrapper {
      padding-right: 80px;

      @media only screen and (max-width: 480px) {
        padding-right: 0px;
      }

      h5 {
        color: #000;
        font-weight: 600;
        font-size: 28px;
        padding-right: 40px;
        line-height: 35px;

        @media only screen and (max-width: 480px) {
          padding-right: 0px;
          font-size: 25px;
        }
      }

      p {
        margin-top: 17px;
        font-size: 15px;
        color: #000;

        @media only screen and (max-width: 768px) {
          font-size: 20px;
        }

        @media only screen and (max-width: 480px) {
          font-size: 16px;
        }
      }
    }
  }

  .img-wrapper {
    flex: 50%;

    img {
      border-bottom-left-radius: 30px;
      width: 100%;
      height: 100%;
    }
  }
`

export const ServiceFlexReverse = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 100px;
  }

  .txt-wrapper {
    flex: 50%;

    .inner-txt-wrapper {
      padding-left: 80px;

      @media only screen and (max-width: 768px) {
        padding-left: 0;
      }
      h5 {
        color: #000;
        font-weight: 600;
        font-size: 28px;
        padding-right: 40px;
        line-height: 35px;

        @media only screen and (max-width: 480px) {
          padding-right: 0px;
          font-size: 25px;
        }
      }

      p {
        margin-top: 17px;
        font-size: 15px;
        color: #000;

        @media only screen and (max-width: 768px) {
          font-size: 20px;
        }

        @media only screen and (max-width: 480px) {
          font-size: 16px;
        }
      }
    }
  }

  .img-wrapper {
    flex: 50%;

    img {
      border-bottom-right-radius: 30px;
      width: 100%;
      height: 100%;
    }
  }
`

export const AboutSection = styled(ServiceSection)`
  background-color: #fff;
  width: 100%;
`

export const WhyInteraxWrap = styled.div`
  display: flex;
  margin-top: 15px;

  @media only screen and (max-width: 777px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .question-txt {
    flex: 40%;

    @media only screen and (max-width: 777px) {
      margin-top: 15px;
    }
    h5 {
      font-size: 40px;
      font-weight: 500;
      margin: 0;
      color: #000;
    }
  }

  .answer-txt {
    flex: 60%;
    p {
      font-size: 20px;
      font-weight: 400;
      color: #000;
      text-align: unset;

      @media only screen and (max-width: 777px) {
        text-align: center;
      }
    }
  }
`

export const CardsOverall = styled.div`
  margin-top: 40px;
  display: flex;

  @media only screen and (max-width: 777px) {
    flex-direction: column;
  }

  .left-side {
    flex: 40%;
  }

  .right-side {
    flex: 60%;
  }
`

export const SubCardsOverall = styled.div`
  display: flex;
  padding-bottom: 30px;
  /* justify-content: flex-end; */
`

export const EmptyCard = styled.div`
  flex: 50%;

  @media only screen and (max-width: 480px) {
    flex: 30%;
  }
`

export const ExplanationCards = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0px 4px 27px rgba(228, 228, 228, 0.25);
  padding: 10px;
  flex: 50%;

  @media only screen and (max-width: 480px) {
    /* flex: 60% */
  }

  h6 {
    color: #1f2ade;
    font-weight: 600;
    font-size: 15px;
  }

  .content {
    padding-top: 10px;
    p {
      color: #000;
      font-size: 12px;
    }
  }

  .card-line {
    position: absolute;
    width: 88%;
    border: solid 1px #e9eafc;
    top: 20px;
    left: -88%;

    @media only screen and (max-width: 480px) {
      width: 50%;
      left: -50%;
    }
  }
`

export const IndexCircle = styled.div`
  font-size: 20px;
  color: #1f2ade;
  border-radius: 50%;
  padding: 13px;
  background-color: rgba(31, 42, 222, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  top: 50%;
  left: -8.5%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 480px) {
    left: -19%;
  }
`

export const PioneersSection = styled.section`
  position: relative;
  width: 100%;
  height: 650px;

  .blue-wrap {
    padding: 40px;
    background-color: #1f2ade;
    height: 50%;

    .text-wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        color: #fff;
        font-size: 50px;
        font-weight: 500;

        @media only screen and (max-width: 600px) {
          font-size: 30px;
        }
      }
    }
  }

  .white-wrap {
    height: 50%;
    background-color: #fff;
  }
`

export const PioneersImageWrap = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  width: 60%;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 992px) {
    width: 80%;
  }

  .image-box {
    flex: 30%;
    position: relative;

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
`

export const PioneersNameWrap = styled.div`
  position: absolute;
  bottom: -60px;
  background-color: #1f2ade;
  padding: 20px 15px;
  border-bottom-right-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  color: #fff;
  text-transform: capitalize;
  width: 100%;
  white-space: nowrap;

  @media only screen and (max-width: 992px) {
    font-size: 17px;
  }
`

export const InvestBanner = styled.section`
  position: relative;
  width: 100%;
  background-color: #000000;
`

export const InvestBannerInner = styled.div`
  padding: 100px 250px;
  padding-bottom: 0;
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 1438px) {
    padding: 100px 150px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 1230px) {
    padding: 100px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 1045px) {
    padding: 80px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 600px) {
    padding: 40px 80px;
    padding-bottom: 0;
    gap: 0;
    justify-content: center;
    align-items: center;
  }
`

export const InvestLeftSide = styled.div`
  flex: 30%;
  padding-bottom: 100px;

  @media only screen and (max-width: 1130px) {
    flex: 40%;
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 600px) {
    flex: 100%;
  }

  .header {
    padding-right: 120px;

    @media only screen and (max-width: 992px) {
      padding-right: 40px;
    }

    @media only screen and (max-width: 600px) {
      padding-right: 0px;
    }

    h2 {
      font-size: 40px;
      color: #fff;
      text-transform: capitalize;

      @media only screen and (max-width: 992px) {
        font-size: 30px;
      }
    }
  }

  .content {
    padding-top: 30px;
    color: #fff;
    font-size: 14px;

    @media only screen and (max-width: 992px) {
      padding-top: 15px;
    }
  }

  .download-btn-wrap {
    padding-top: 40px;
    display: flex;
    align-items: center;
    gap: 15px;

    @media only screen and (max-width: 992px) {
      padding-top: 15px;
    }
  }
`

export const DownloadBtn = styled.div`
  border: solid 1px #fff;
  padding: 10px 25px;
  border-radius: 35px;
  flex: 45%;
  display: flex;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  & img {
    width: 24px;
  }

  & .txt-wrap {
  }

  & p {
    font-size: 11px;
    color: #fff;
    white-space: nowrap;

    @media only screen and (max-width: 600px) {
      font-size: 10px;
    }
  }

  & h5 {
    font-size: 14px;
    color: #fff;
    white-space: nowrap;

    @media only screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`

export const InvestRightSide = styled.div`
  flex: 50%;
  position: relative;
  display: block;

  img {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`
