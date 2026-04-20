import Approute from "./route/Approute";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Approute />
    </HelmetProvider>
  );
}

export default App;
