import { useState, useEffect } from 'react';

export function AavegotchiWindow() {
  const [windowRef, setWindowRef] = useState<any>(null);

  useEffect(() => {
    const windowFeatures =
      'height=600,width=800,left=50,top=50,menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes';
    const url = 'https://verse.aavegotchi.com/spawnId=C-6800-3456-U&gotchi=4434';
    const newWindow = window.open(url, '', windowFeatures);
    if (newWindow) {
      setWindowRef(newWindow);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p>{windowRef}</p>
    </div>
  );
}

export default AavegotchiWindow;
