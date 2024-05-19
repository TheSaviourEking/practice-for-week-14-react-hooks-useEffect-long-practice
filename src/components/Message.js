import { useEffect, useState } from "react";

function Message({ sizeClass, featherCount }) {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   let cname = '';
  //   switch (size) {
  //     case 'm':
  //       cname = 'medium';
  //       break;
  //     case 'l':
  //       cname = 'large';
  //       break;
  //     case 'xl':
  //       cname = 'xlarge';
  //       break;
  //     default:
  //       cname = 'small';
  //       break;
  //   }
  //   setSizeClass(() => cname);
  // }, [size]);

  useEffect(() => {
    console.log('Message', sizeClass);
  }, [sizeClass]);

  useEffect(() => {
    if (featherCount <= 0) setMessage(() => 'Oh my! Your bird is naked!');
    else if (featherCount >= 10) setMessage(() => 'Full turkey!');
    else { setMessage(() => 'Coming along...') }
  }, [featherCount]);

  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
};

export default Message;
