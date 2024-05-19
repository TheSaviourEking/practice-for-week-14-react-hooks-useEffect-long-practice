import { useEffect, useState } from "react";
import Message from "./components/Message";
import PictureDisplay from "./components/PictureDisplay";

import './App.layout.css';

function App() {
  // const [size, setSize] = useState('s');
  const [size, setSize] = useState('m');
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [isBrown, setIsBrown] = useState(false);
  const [isLightBrown, setIsLightBrown] = useState(false);
  const [isYellow, setIsYellow] = useState(false);

  useEffect(() => {
    console.log('========================================================')
    console.log('Color Change :: red?', isRed);
    console.log('Color Change :: orange?', isOrange);
    console.log('Color Change :: brown?', isBrown);
    console.log('Color Change :: light brown?', isLightBrown);
    console.log('Color Change :: yellow?', isYellow);

    const colors = [];
    if (isRed) colors.push('red');
    if (isOrange) colors.push('orange');
    if (isBrown) colors.push('brown');
    if (isLightBrown) colors.push('light-brown');
    if (isYellow) colors.push('yellow');

    setFeatherColors(() => colors)

  }, [isRed, isOrange, isBrown, isLightBrown, isYellow]);

  const [sizeClass, setSizeClass] = useState('');

  useEffect(() => {
    console.log('PictureDisplay size', size);
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
    setSizeClass(() => cname)
  }, [size]);


  return (
    <>
      <h1>Turkey Creator</h1>

      <div className="container">
        <div>
          <h3 className="button-controls">Set the features of your turkey</h3>

          {/* User controls */}
          <div className="button-controls">
            Size:
            <button onClick={() => setSize('s')} disabled={size === 's'}>Small</button>
            <button onClick={() => setSize('m')} disabled={size === 'm'}>Medium</button>
            <button onClick={() => setSize('l')} disabled={size === 'l'}>Large</button>
            <button onClick={() => setSize('xl')} disabled={size === 'xl'}>X-Large</button>
          </div>
          <div className="button-controls">
            Feather Count:
            <input
              type="number"
              onChange={(e) => {
                const value = e.target.value;
                if (value === '') setFeatherCount(() => 0);
                else if (value >= 0 && value <= 10) setFeatherCount(() => value);
                else {
                  setFeatherCount(() => value.slice(0, 1));
                }
                // setFeatherCount(e.currentTarget.value)
              }
              }
              defaultValue={0}
              min={0}
              max={10}
            />
          </div>
          <form className="button-controls">
            Feather Color(s):
            <label><input
              type="checkbox"
              onChange={(e) => setIsRed(e.currentTarget.checked)}
            />Red</label>
            <label><input
              type="checkbox"
              onChange={(e) => setIsOrange(e.currentTarget.checked)}
            />Orange</label>
            <label><input
              type="checkbox"
              onChange={(e) => setIsBrown(e.currentTarget.checked)}
            />Brown</label>
            <label><input
              type="checkbox"
              onChange={(e) => setIsLightBrown(e.currentTarget.checked)}
            />Light Brown</label>
            <label><input
              type="checkbox"
              onChange={(e) => setIsYellow(e.currentTarget.checked)}
            />Golden Yellow</label>
          </form>
        </div>

        {/* Generated display based on user selections above */}
        <div>
          <h3 className="button-controls">Enjoy your turkey</h3>
          <PictureDisplay
            sizeClass={sizeClass}
            featherCount={featherCount}
            featherColors={featherColors}
          />
          <Message sizeClass={sizeClass} featherCount={featherCount} />
        </div>
      </div>
    </>
  );
}

export default App;
