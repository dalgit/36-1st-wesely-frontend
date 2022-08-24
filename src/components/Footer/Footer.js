import './Footer.scss';

function Footer() {
  const { footer } = FOOTER_DATA;
  return (
    <footer className="footerContainer">
      <div className="footerBox">
        <div className="footerTop">
          <div className="footerTopItem">{footer.login}</div>
          <div className="footerTopItem2">{footer.serviceCenter}</div>
          <div className="footerTopItem2">{footer.brandStory}</div>
          <div className="footerTopItem2">{footer.blog}</div>
          <div className="footerTopItem2">{footer.employment}</div>
        </div>
        <div className="footerMiddle">
          <div className="companyInfo">
            <h1>{footer.company}</h1>
            <div className="companyInfoItem">{footer.address}</div>
            <div className="companyInfoItem">{footer.businessRegistration}</div>
            <div className="companyInfoItem">{footer.privacyOfficer}</div>
            <div className="companyInfoItem">{footer.email}</div>
            <div className="companyInfoItem">{footer.partnershipInquiry}</div>
          </div>
          <div className="contactCompany">
            <i className={footer.iconClassName} />
            <div className="contactCompanyChannel">
              {footer.kakaoTalkChennel}
            </div>
            <div className="contactCompanyServiceNumber">
              <div>{footer.serviceCenterNumber}</div>
              <div className="contactCompanyServiceNumberItem">
                {footer.serviceTime}
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="companyDocument">
            <div>{footer.privacyPolicy}</div>
            <div className="companyDocumentItem">{footer.informationUse}</div>
            <div className="companyDocumentItem">
              {footer.checkBusinessInfo}
            </div>
            <div className="companyDocumentItem">{footer.termsOfService}</div>
            <div className="companyDocumentItem">{footer.naverBlog}</div>
            <div className="companyDocumentItem">{footer.naverPost}</div>
            <div className="companyDocumentItem">{footer.emailRejection}</div>
          </div>
          <div>
            {footer.reservedDate} <strong>{footer.reservedCompany} </strong>
            {footer.reservedText}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

const FOOTER_DATA = {
  footer: {
    login: '로그인',
    serviceCenter: '고객센터',
    brandStory: '브랜드스토리',
    blog: '블로그',
    employment: '인재채용',
    company: '주식회사 와이즐리컴퍼니',
    address:
      '서울특별시 강남구 영동대로96길 20 대화빌딩 5층(삼성1동 169),대표자:김철수',
    businessRegistration:
      '사업자등록번호: 123-45-67891, 통신판매업신고번호:1234-서울강남-56789',
    privacyOfficer:
      '개인정보보호책임자: 김첨지 (chum@weselycompany.com), 고객센터:1234-5678',
    email: 'E-mail:good@weselycompany.com',
    partnershipInquiry: '제휴문의: bad@weselycompany.com',
    iconClassName: 'fa-solid fa-comment',
    kakaoTalkChennel: "카카오톡 채널 '위즐리컴퍼니'",
    serviceCenterNumber: '고객센터 1833-9133',
    serviceTime: '오전 9시 ~ 오후 6시',
    privacyPolicy: '개인정보처리방침',
    informationUse: '이용안내',
    checkBusinessInfo: '사업자정보확인',
    termsOfService: '이용약관',
    naverBlog: '네이버블로그',
    naverPost: '네이버 포스트',
    emailRejection: '이메일무단수집거부',
    reservedDate: 'ⓒ 2018-2022',
    reservedCompany: 'WESELYCOMPANY',
    reservedText: 'All right reserved',
  },
};
