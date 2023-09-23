import Navbar from '../components/Navbar';
import '../styles/globals.css';
// import ImageBoxSelector from '../components/Navbar'

function MyApp({ Component, pageProps }) { 
  const data = [
  {
    id: 1,
    name: "rashid ali",
    father:"M ali"
  },
  {
    id: 2,
    name: "sajid ali",
    father:"M ali",
  },
  {
    id: 3,
    name: "imran",
    father:"M shafa"
  },
  {
    id: 4,
    name: "zahid husaain",
    father: "hussain"
  },
];

  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
