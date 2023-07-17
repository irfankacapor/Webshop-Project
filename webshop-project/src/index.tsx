import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

AOS.init({
  duration: 800,
  once: true,
  delay: 0,
  easing: "ease-in-out"
})

document.body.style.margin = "0";
