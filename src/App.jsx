import HoverEffect from "./hoverEffect";
import Reveal from "./reveal";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>hello world</h1>
      </div>
      <div className="wrapper">
        <Reveal>
          <h1>hello world</h1>
        </Reveal>
      </div>
      <div className="wrapper">
        <Reveal>
          <h1>hello world</h1>
        </Reveal>
      </div>
      <div className="wrapper">
        <Reveal>
          <h1>hello world</h1>
        </Reveal>
      </div>
      <div className="wrapper">
        <Reveal>
          <h1>hello world</h1>
        </Reveal>
      </div>
      <div className="wrapper">
        <Reveal>
          <div className="card">hello from card</div>{" "}
        </Reveal>
      </div>
      <div className="wrapper">
        <HoverEffect />
      </div>
    </>
  );
}

export default App;
