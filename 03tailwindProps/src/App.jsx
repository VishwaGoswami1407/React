import Card from "./components/card";

function App() {
  const myobj = {
    username: "Vishwa",
    age: 20,
    btntext: "visit me"
  };
  let myarr = [1, 2, 3, 4]
  return (
    <>
      <h1 className="bg-green-400 text-2xl font-bold p-2 text-black rounded-xl">
        HELLO GOOD MORNING
      </h1>
      <Card username={myobj.username} age={myobj.age} btntext={myobj.btntext} />
      <Card username="dayna" age="30" btntext="visit me"/>
      <Card username="janu" age="20"/>
    </>
  );
}

export default App;
