import { useNavigate } from 'react-router-dom';

function Card({ list }) {
  const navigate = useNavigate();

  return (
    <div>
      {list.map(list => {
        return (
          <div key={list.id}>
            <img
              src={list.image}
              alt=""
              width="300px"
              height="300px"
              onClick={() =>
                navigate('/DetailPage', {
                  state: { ...list },
                })
              }
            />
            {list.type}
          </div>
        );
      })}
    </div>
  );
}
export default Card;
