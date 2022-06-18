import "./App.css";
import WorkerCategorySelector from "./components/workers/WorkerCategorySelector";

const App = () => {
  const DUMMY_WORKERS_CATEGORY = [
    {
      id: 1,
      name: "Novice Gardener",
    },
    {
      id: 2,
      name: "Experienced Gardener",
    },
    {
      id: 3,
      name: "Administration Worker",
    }
  ];

  return (
    <div className="App">
      <WorkerCategorySelector workersCategoryList={DUMMY_WORKERS_CATEGORY} />
    </div>
  );
};

export default App;
