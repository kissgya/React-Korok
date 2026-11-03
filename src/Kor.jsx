import { useState } from 'react';

export const Kor = ({ szin, meret, kezdoSzam }) => {
  // State a számolóhoz, a kiinduló érték a props-ból jön
  const [szam, setSzam] = useState(kezdoSzam);

  // Stílusok dinamikus beállítása a props alapján
  const stilus = {
    width: `${meret}px`,
    height: `${meret}px`,
    backgroundColor: szin,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    userSelect: 'none',
    margin: '10px'
  };

  return (
    <div style={stilus} onClick={() => setSzam(szam + 1)}>
      {szam}
    </div>
  );
};