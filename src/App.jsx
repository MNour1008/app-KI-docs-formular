import React, { useState } from 'react';
    import PlanningForm from './components/PlanningForm';
    import Output from './components/Output';

    function App() {
      const [outputData, setOutputData] = useState(null);

      const handleFormSubmit = (data) => {
        setOutputData(data);
      };

      return (
        <div className="container">
          <h1>App-Planungsvorlage</h1>
          <p>Beantworte die folgenden Fragen, um deine App zu planen. Die Daten können später an eine KI übergeben werden.</p>
          <PlanningForm onSubmit={handleFormSubmit} />
          <Output data={outputData} />
        </div>
      );
    }

    export default App;
