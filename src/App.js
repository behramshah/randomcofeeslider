import Carusel from "./components/Carusel";

const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};

function App() { 

  return (
    <div>
      <div style={containerStyles}>
        <Carusel />
      </div>
    </div>
  );
}

export default App;
