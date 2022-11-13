import {useState} from 'react';

const Practies= () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          Hover me
        </div>

        {isHovering && <div>Hello world</div>}
      </div>
    </div>
  );
};

export default Practies;