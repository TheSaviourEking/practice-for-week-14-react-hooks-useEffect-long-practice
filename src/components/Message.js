import { useEffect, useState } from "react";

function Message({ size }) {
  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    let cname = '';
    switch (size) {
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    setSizeClass(() => cname);
  }, [size]);

  useEffect(() => {
    console.log('Message', size);
  }, [size]);

  return (
    <div className={`message ${sizeClass}`}>
      (Oh my! Your bird is naked!)
    </div>
  );
};

export default Message;
