import ListGroup from "./components/ListGroup";

let items = ["new york", "london", "tokyo", "paris"];

function App() {
  return (
    <div>
      <ListGroup items={items} heading="cities"/>
    </div>
  );
}

export default App;
