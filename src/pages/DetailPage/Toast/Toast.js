import './Toast.scss';

function Toast() {
  return (
    <div className="toast">
      <div className="toastContainer">
        <section>
          <h1>탄력/잡티/모공/세럼</h1>
          <select name="job">
            <option value="">타입</option>
            <option value="학생">Type01</option>
            <option value="회사원">Type02</option>
            <option value="기타">Type03</option>
          </select>
        </section>
        <section>
          <div>
            <h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghyogVq5_ZwJcuVDG0WhP4ejmhm95wPRZcg&usqp=CAU"
                alt=""
              />
            </h2>
            <div className="selectProduct">
              <h1>탄력/잡티/모공/세럼</h1>
              <p>탄력 케어</p>
            </div>
            <div className="price">
              <span>5,900원</span>
              <input type="text" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Toast;
