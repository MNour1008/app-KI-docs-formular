import React from 'react';

    const Output = ({ data }) => {
      if (!data) {
        return null;
      }

      return (
        <div className="output">
          <h2>Generierte Daten</h2>
          <pre id="outputData">{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
    };

    export default Output;
