import OverView from './OverView/OverView';
import OpenDetailView from './OpenDetailView/OpenDetailView';
import Review from './Review/Review';
import { useLocation } from 'react-router-dom';
function DetailPage() {
  const location = useLocation();

  return (
    <div>
      <h1>header</h1>
      <OverView location={location} />
      <OpenDetailView location={location} />
      <Review />
    </div>
  );
}

export default DetailPage;
