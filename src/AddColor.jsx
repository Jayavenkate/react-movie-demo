import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("");
  const styles = {
    background: color,
  };
  const [colorList, setcolorList] = useState(["black", "yellow", "orange", "brown"]);
  return (
    <div>
      <input style={styles} type="text" onChange={(event) => setColor(event.target.value)}
        value={color} />
      <button onClick={() => setcolorList([...colorList, color])}>AddColor</button>
      {colorList.map((clr) => (<ColorBox color={clr} />))}

    </div>
  );
}
