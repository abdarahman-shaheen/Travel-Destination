import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './TourDetails.css';
import { useState } from 'react';

function TourDetails(props) {
  let param = useParams();
  console.log(param);
  const [showMore, setShowMore] = useState(false);

  return (
    <div id='Details'>
      {props.datas
        .filter((item) => item.id === param.id)
        .map((item) => (
          <div id="Detail">
            {showMore ? item.info : item.info.substring(0, 250)}
            <Button onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        ))}
    </div>
  );
}

export default TourDetails;