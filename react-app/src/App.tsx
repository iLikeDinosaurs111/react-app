import { useState } from "react";

import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["1", "2", "3", "4", "5"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          eee <b>!</b>
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        eee <b>?</b>
      </Button>
      <ListGroup
        items={items}
        heading="numbers"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
