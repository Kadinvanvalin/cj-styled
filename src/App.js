import "./App.css";
import { useState } from "react";
import styled from "styled-components";

const Button = (props) => {
  const [count, setCount] = useState(0);
  return (
    <button className={props.className} onClick={() => setCount(count + 1)}>
      clicked {count} times
    </button>
  );
};

const StyledButton = styled(Button)`
  border: 1px solid transparent;
  border-collapse: separate;
  border-radius: 3px;
  box-shadow: none;
  color: #333;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 20px;
  margin: 0 4px;
  height: 32px;
  min-width: min-content;
  overflow: hidden;
  padding: 4px 12px;
  text-align: center;
  text-shadow: none;
  text-transform: uppercase;
  transition: 0.2s all ease-in-out;
  vertical-align: middle;
  width: auto;
  background-color: #49c5b1;
  background-position: center;
  color: #fff;
  transition: background 0.4s;

  :hover {
    background: #14ab93 radial-gradient(circle, transparent 1%, #14ab93 1%)
      center/15000%;
  }

  :active {
    background-color: #44cbb4;
    background-size: 100%;
    transition: background 0s;
  }
`;

const HtmlButton = styled.button`
  border: 1px solid transparent;
  border-collapse: separate;
  border-radius: 3px;
  box-shadow: none;
  color: #333;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 20px;
  margin: 0 4px;
  height: 32px;
  min-width: min-content;
  overflow: hidden;
  padding: 4px 12px;
  text-align: center;
  text-shadow: none;
  text-transform: uppercase;
  transition: 0.2s all ease-in-out;
  vertical-align: middle;
  width: auto;
  background-color: #49c5b1;
  background-position: center;
  color: #fff;
  transition: background 0.4s;
`;

function App() {
  return (
    <div className="App">
      <Button className="button-1" />
      <StyledButton />
      <HtmlButton>Click me</HtmlButton>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
