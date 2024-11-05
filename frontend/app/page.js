// import { Navbar } from "./ui/homepage/navbar/navbar";
import { Navbar } from "./(homepage)/navbar";

export default function Home() {
  return (
    <main style={{
      maxWidth: '75vw',
      border: 'black 1px solid',
      margin: 'auto',
      marginTop: '1rem',
      padding: '5px'
    }}>
      <Navbar/>
    </main>
  );
}
