import "./App.css";
import "./Button.css";
import { useState } from "react";

import Button from "./components/Button";
import RandomButton from "./components/Button/RandomButton";
import VsButton from "./components/Button/VsButton";
import HtmlButton from "./components/Button/HtmlButton";
import TaggedTemplate from "./components/TaggedTemplate";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div id className="App">
      <h1>Tagged Template</h1>
      <TaggedTemplate />
      <h1>classic css</h1>
      <Button className="button" />
      <h1>styled component</h1>
      <VsButton />
      <h1>styled component styled by props</h1>
      <VsButton isSecondary isDisabled />
      <h1>styled html button</h1>
      <HtmlButton count={count} onClick={() => setCount(count + 1)}>
        Clicked
      </HtmlButton>
      <h1>Random Button</h1>
      <RandomButton />
    </div>
  );
}

export default App;
