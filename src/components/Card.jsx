import { useState } from 'react';
import Counter from './Counter';

function Card({ title, description, image }) {
  const maxLength =320;
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDescription = description.length > maxLength ? description.substring(0, maxLength) + "..." : description;

  const handleReadMore = () => {
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      <div className="cards">
        <div className="content">
          <img
            className="images"
            src={image}
            style={{ height: "200px", width: "100%", objectFit: "cover" }}
            alt="Card"
          />
          <h2>{title}</h2>
          <p>
            {isExpanded ? description : truncatedDescription}
            {description.length > maxLength && !isExpanded && (
              <span onClick={handleReadMore} style={{ color: 'blue', cursor: 'pointer' }}> Read More</span>
            )}
            {isExpanded && (
              <span onClick={handleShowLess} style={{ color: 'blue', cursor: 'pointer' }}> Show Less</span>
            )}
          </p>
          <button className="btn-en">Enroll Now</button>
        </div>
      </div>
      
     
    </div>
    
  );
}

export default Card;
