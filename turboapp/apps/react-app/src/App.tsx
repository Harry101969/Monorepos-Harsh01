import "./App.css";
import { Button } from "@repo/ui/button";
import { BACKEND_URL } from "@repo/common/config";
function App() {
  return (
    <>
      <div>
        <Button appName="web" children="Hello Harsh" />
        {BACKEND_URL}
      </div>
    </>
  );
}

export default App;
