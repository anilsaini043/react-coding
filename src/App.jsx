import Accordion from "./components/accordion/Accordion.jsx";
import { items } from "./components/accordion/items.js";
// import FormInput from "./components/inputField/FormInput.jsx";

function App() {

  return (
    <div>
      <Accordion items={items}/>
      {/* <FormInput /> */}
    </div>
  )
}

export default App
