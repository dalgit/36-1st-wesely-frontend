import './Footer.scss';

function Footer() {
  return (
    <footer className="footerContainer">
      {FOOTER_DATA.map(list => {
        return (
          <div key={list.id} className="footerBox">
            <div className="footerTop">
              <div className="footerTopItem">{list.login}</div>
              <div className="footerTopItem2">{list.serviceCenter}</div>
              <div className="footerTopItem2">{list.brandStory}</div>
              <div className="footerTopItem2">{list.blog}</div>
              <div className="footerTopItem2">{list.employment}</div>
            </div>
            <div className="footerMiddle">
              <div className="companyInfo">
                <h1>{list.company}</h1>
                <div className="companyInfoItem">{list.address}</div>
                <div className="companyInfoItem">
                  {list.businessRegistration}
                </div>
                <div className="companyInfoItem">{list.privacyOfficer}</div>
                <div className="companyInfoItem">{list.email}</div>
                <div className="companyInfoItem">{list.partnershipInquiry}</div>
              </div>
              <div className="contactCompany">
                <i className={list.iconClassName} />
                <div className="contactCompanyChannel">
                  {list.kakaoTalkChennel}
                </div>
                <div className="contactCompanyServiceNumber">
                  <div>{list.serviceCenterNumber}</div>
                  <div className="contactCompanyServiceNumberItem">
                    {list.serviceTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="footerBottom">
              <div className="companyDocument">
                <div>{list.privacyPolicy}</div>
                <div className="companyDocumentItem">{list.informationUse}</div>
                <div className="companyDocumentItem">
                  {list.checkBusinessInfo}
                </div>
                <div className="companyDocumentItem">{list.termsOfService}</div>
                <div className="companyDocumentItem">{list.naverBlog}</div>
                <div className="companyDocumentItem">{list.naverPost}</div>
                <div className="companyDocumentItem">{list.emailRejection}</div>
              </div>
              <div>
                {list.reservedDate} <strong>{list.reservedCompany} </strong>
                {list.reservedText}
              </div>
            </div>
          </div>
        );
      })}
    </footer>
  );
}
export default Footer;

const FOOTER_DATA = [
  {
    id: 1,
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
];
