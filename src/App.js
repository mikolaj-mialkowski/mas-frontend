import "./App.css";
import ScenesSelector from "./components/workers/ScenesSelector";

const App = () => {
  const DUMMY_WORKERS_CATEGORY = [
    {
      id: 1,
      name: "Owner",
      active: false
    },
    {
      id: 2,
      name: "Customer",
      active: false
    },
    {
      id: 3,
      name: "Novice Gardener",
      active: false
    },
    {
      id: 4,
      name: "Experienced Gardener",
      active: true
    },
    {
      id: 5,
      name: "Administration Worker",
      active: false
    },
  ];

  return (
    <div className="App">
      <ScenesSelector workersCategoryList={DUMMY_WORKERS_CATEGORY} />
    </div>
  );
};

export default App;
