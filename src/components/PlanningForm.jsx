import React, { useState } from 'react';

    const PlanningForm = ({ onSubmit }) => {
      const [formData, setFormData] = useState({
        appName: '',
        appPurpose: '',
        targetAudience: '',
        platform: '',
        timeline: '',
        coreFeatures: '',
        additionalFeatures: '',
        uiFramework: '',
        uiLibrary: '',
        navigation: '',
        designPrinciples: '',
        wireframe: '',
        backendArchitecture: '',
        database: '',
        apiIntegrations: '',
        authentication: '',
        errorHandling: '',
        caching: '',
      });

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
      };

      return (
        <form onSubmit={handleSubmit}>
          <div className="section">
            <h2>1. App-Idee und Scope</h2>
            <label htmlFor="appName">App-Name:</label>
            <input type="text" id="appName" placeholder="Gib deiner App einen Namen" value={formData.appName} onChange={handleChange} />
            <label htmlFor="appPurpose">Zweck der App:</label>
            <textarea id="appPurpose" placeholder="Was ist das Hauptziel der App? Welches Problem löst sie?" value={formData.appPurpose} onChange={handleChange}></textarea>
            <label htmlFor="targetAudience">Zielgruppe:</label>
            <textarea id="targetAudience" placeholder="Wer sind die primären Nutzer?" value={formData.targetAudience} onChange={handleChange}></textarea>
            <label htmlFor="platform">Plattform:</label>
            <input type="text" id="platform" placeholder="Web, Mobile, oder beides?" value={formData.platform} onChange={handleChange} />
            <label htmlFor="timeline">Timeline:</label>
            <input type="text" id="timeline" placeholder="Wann soll die App fertig sein?" value={formData.timeline} onChange={handleChange} />
          </div>

          <div className="section">
            <h2>2. Funktionen (Features)</h2>
            <label htmlFor="coreFeatures">Kernfunktionen:</label>
            <textarea id="coreFeatures" placeholder="Liste die wichtigsten Funktionen auf" value={formData.coreFeatures} onChange={handleChange}></textarea>
            <label htmlFor="additionalFeatures">Zusätzliche Funktionen:</label>
            <textarea id="additionalFeatures" placeholder="Optionale Features" value={formData.additionalFeatures} onChange={handleChange}></textarea>
          </div>

          <div className="section">
            <h2>3. Frontend-Planung</h2>
            <label htmlFor="uiFramework">UI-Framework:</label>
            <input type="text" id="uiFramework" placeholder="z. B. Next.js, React, Vue.js" value={formData.uiFramework} onChange={handleChange} />
            <label htmlFor="uiLibrary">UI-Komponentenbibliothek:</label>
            <input type="text" id="uiLibrary" placeholder="z. B. Tailwind CSS, Material-UI" value={formData.uiLibrary} onChange={handleChange} />
            <label htmlFor="navigation">Navigation:</label>
            <input type="text" id="navigation" placeholder="z. B. Top-Navigation, Sidebar" value={formData.navigation} onChange={handleChange} />
            <label htmlFor="designPrinciples">Design-Prinzipien:</label>
            <textarea id="designPrinciples" placeholder="z. B. dunkles Design mit hellen Akzenten" value={formData.designPrinciples} onChange={handleChange}></textarea>
            <label htmlFor="wireframe">Wireframe:</label>
            <textarea id="wireframe" placeholder="Skizziere das Layout der App" value={formData.wireframe} onChange={handleChange}></textarea>
          </div>

          <div className="section">
            <h2>4. Backend-Planung</h2>
            <label htmlFor="backendArchitecture">Backend-Architektur:</label>
            <input type="text" id="backendArchitecture" placeholder="z. B. Next.js API Routes, separater Backend-Server" value={formData.backendArchitecture} onChange={handleChange} />
            <label htmlFor="database">Datenbank:</label>
            <input type="text" id="database" placeholder="z. B. Supabase, PostgreSQL, MongoDB" value={formData.database} onChange={handleChange} />
            <label htmlFor="apiIntegrations">API-Integrationen:</label>
            <textarea id="apiIntegrations" placeholder="z. B. YouTube API, DeepSeek API" value={formData.apiIntegrations} onChange={handleChange}></textarea>
            <label htmlFor="authentication">Authentifizierung:</label>
            <input type="text" id="authentication" placeholder="z. B. Clerk, Firebase Auth" value={formData.authentication} onChange={handleChange} />
            <label htmlFor="errorHandling">Fehlerbehandlung:</label>
            <textarea id="errorHandling" placeholder="Wie werden Fehler behandelt?" value={formData.errorHandling} onChange={handleChange}></textarea>
            <label htmlFor="caching">Caching:</label>
            <input type="text" id="caching" placeholder="z. B. React Query für API-Aufrufe" value={formData.caching} onChange={handleChange} />
          </div>

          <button className="submit-btn" type="submit">Daten generieren</button>
        </form>
      );
    };

    export default PlanningForm;
