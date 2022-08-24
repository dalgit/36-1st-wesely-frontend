import './PageBtn.scss';

const PageBtn = ({ movePage }) => {
  return (
    <div className="pageBtnWrapper">
      <button onClick={() => movePage(1)} className="pageBtn">
        1
      </button>
      <button onClick={() => movePage(2)} className="pageBtn">
        2
      </button>
      <button onClick={() => movePage(3)} className="pageBtn">
        3
      </button>
      <button onClick={() => movePage(4)} className="pageBtn">
        4
      </button>
      <button onClick={() => movePage(5)} className="pageBtn">
        5
      </button>
      <button onClick={() => movePage(6)} className="pageBtn">
        6
      </button>
    </div>
  );
};

export default PageBtn;
