import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerBox">
          <div className="footerWebLinkBox">
            {FOOTER_DATA.webLink.map(list => {
              return (
                <div key={list.webLinkId} className="footerWebLinkTopItem">
                  {list.text}
                </div>
              );
            })}
          </div>
          <div className="footerInfoBox">
            <div className="companyInfo">
              {FOOTER_DATA.companyInfo.map(list => {
                return (
                  <div key={list.companyInfoId} className="companyInfoItem">
                    {list.text}
                  </div>
                );
              })}
            </div>
            <div className="contactCompany">
              <i className="fa-solid fa-comment" />
              {FOOTER_DATA.serviceCenterCannel.map(list => {
                return (
                  <div
                    key={list.serviceCenterInfoId}
                    className="contactCompanyChannel"
                  >
                    {list.text}
                  </div>
                );
              })}
              <div className="contactCompanyServiceNumber">
                {FOOTER_DATA.serviceCenterNumber.map(list => {
                  return (
                    <div
                      key={list.serviceCenterNumber}
                      className="contactCompanyServiceNumberItem"
                    >
                      {list.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footerDocumentBox">
            <div className="companyDocument">
              {FOOTER_DATA.documentInfo.map(list => {
                return (
                  <div
                    key={list.documentInfoId}
                    className="companyDocumentItem"
                  >
                    {list.text}
                  </div>
                );
              })}
            </div>
            {FOOTER_DATA.documentReserved.map(list => {
              return <div key={list.documentReservedId}>{list.text}</div>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

const FOOTER_DATA = {
  companyInfo: [
    { companyInfoId: 1, text: '주식회사 와이즐리컴퍼니' },
    {
      companyInfoId: 2,
      text: '서울특별시 강남구 영동대로96길 20 대화빌딩 5층(삼성1동 169),대표자:김철수',
    },
    {
      companyInfoId: 3,
      text: '사업자등록번호: 123-45-67891, 통신판매업신고번호:1234-서울강남-56789',
    },
    {
      companyInfoId: 4,
      text: '개인정보보호책임자: 김첨지 (chum@weselycompany.com), 고객센터:1234-5678',
    },
    { companyInfoId: 5, text: 'E-mail:good@weselycompany.com' },
    { companyInfoId: 6, text: '제휴문의: bad@weselycompany.com' },
  ],

  serviceCenterCannel: [
    {
      serviceCenterInfoId: 8,
      text: "카카오톡 채널 '위즐리컴퍼니'",
    },
  ],

  serviceCenterNumber: [
    { serviceCenterNumber: 9, text: '고객센터 1833-9133' },
    { serviceCenterNumber: 10, text: '오전 9시 ~ 오후 6시' },
  ],

  webLink: [
    { webLinkId: 11, text: '로그인' },
    { webLinkId: 12, text: '고객센터' },
    { webLinkId: 13, text: '브랜드스토리' },
    { webLinkId: 14, text: '블로그' },
    { webLinkId: 15, text: '인재채용' },
  ],

  documentInfo: [
    { documentInfoId: 16, text: '개인정보처리방침' },
    { documentInfoId: 17, text: '이용안내' },
    { documentInfoId: 18, text: '사업자정보확인' },
    { documentInfoId: 19, text: '이용약관' },
    { documentInfoId: 20, text: '네이버블로그' },
    { documentInfoId: 21, text: '네이버 포스트' },
    { documentInfoId: 22, text: '이메일무단수집거부' },
  ],

  documentReserved: [
    {
      documentReservedId: 23,
      text: `ⓒ 2018-2022 ${(
        <strong>WESELYCOMPANY</strong>
      )} All right reserved`,
    },
  ],
};
