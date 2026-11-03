import { Kor } from './Kor';

export const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Dobozok helyett körök – Gyakorló</h1>
      <p>Kattints a körökre a számok növeléséhez!</p>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {/* 3 különböző színű, méretű és kiinduló értékű kör átadása props-ként */}
        <Kor szin="red" meret={80} kezdoSzam={0} />
        <Kor szin="blue" meret={120} kezdoSzam={5} />
        <Kor szin="green" meret={100} kezdoSzam={10} />
      </div>
    </div>
  );
};