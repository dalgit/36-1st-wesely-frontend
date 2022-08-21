import OverView from './OverView/OverView';
import { useLocation } from 'react-router-dom';
function DetailPage() {
  const location = useLocation();

  return (
    <div>
      <h1>header</h1>
      <OverView location={location} />
    </div>
  );
}

export default DetailPage;
