import Accordion from "./Accordion";

function App() {

  const items = [
    {
      title: "What is Lorem Ipsum?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Why do we use it?",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page."
    },
    {
      title: "Where can I get some?",
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    },
    {
      title: "Where does it come from?",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature."
    },
    {
      title: "Is Lorem Ipsum safe to use?",
      content: "Yes, it is used widely in publishing and web design to provide placeholder text without meaning."
    }
  ]
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App
