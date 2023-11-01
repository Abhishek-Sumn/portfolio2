import { useEffect } from 'react';
import './App.css';
import Hero from './Hero.jsx';
import Content from './Content.jsx';

export default function App() {
  // Function to handle mousemove event
  const moveCircle = (e) => {
    const circle = document.getElementById('circle');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  };

  // Attach mousemove event listener on component mount
  useEffect(() => {
    document.addEventListener('mousemove', moveCircle);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return (
    <>
      <div className='main'>
        <Hero />
        <Content />
      </div>
      <div id='circle' className='circle'></div>
    </>
  );
}
