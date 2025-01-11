import React from 'react';

const Output = ({ data }) => {
  // Wenn keine Daten vorhanden sind, wird nichts gerendert
  if (!data) {
    return (
      <div className="output">
        <h2>Keine Daten vorhanden</h2>
        <p>Bitte fülle das Formular aus, um Daten zu generieren.</p>
      </div>
    );
  }

  // Konvertiere die Daten in eine formatierte JSON-Zeichenkette
  const jsonOutput = JSON.stringify(data, null, 2);

  // Funktion zum Generieren des KI-Prompts
  const generateKIPrompt = () => {
    return `Erstelle die folgenden Markdown-Dokumentationen basierend auf den folgenden Daten:

### **Daten**
${jsonOutput}

---

### **Anforderungen**
1. **frontend.md**:
   - Beschreibe das UI-Framework, die UI-Komponentenbibliothek, das Design und das Wireframe.
   - Füge eine Liste der Kern- und zusätzlichen Funktionen hinzu.
   - Beschreibe die Navigation und die Benutzeroberfläche.

2. **backend.md**:
   - Beschreibe die Backend-Architektur, die API-Integrationen und die Authentifizierung.
   - Füge Details zur Fehlerbehandlung und Caching-Strategie hinzu.

3. **dbschema.md**:
   - Erstelle ein Datenbank-Schema mit Tabellen, Feldern und Beziehungen.
   - Beschreibe die verwendete Datenbank (z. B. Supabase).

4. **userflow.md**:
   - Beschreibe den User Flow, einschließlich Onboarding, Kernuser-Journey und Zahlungsflow.
   - Füge ein Mermaid-Diagramm für den User Flow hinzu.

Gib die Markdown-Dokumentationen aus.`;
  };

  // Funktion zum Kopieren des Prompts in die Zwischenablage
  const copyPromptToClipboard = () => {
    const promptText = generateKIPrompt();

    // Fallback für ältere Browser oder unsichere Umgebungen
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(promptText)
        .then(() => {
          alert('Der Prompt wurde in die Zwischenablage kopiert!');
        })
        .catch((err) => {
          console.error('Fehler beim Kopieren: ', err);
          fallbackCopyTextToClipboard(promptText);
        });
    } else {
      fallbackCopyTextToClipboard(promptText);
    }
  };

  // Fallback-Methode zum Kopieren von Text
  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed'; // Vermeidet Scrollen zur Textarea
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'erfolgreich' : 'fehlgeschlagen';
      alert(`Der Prompt wurde ${msg} kopiert!`);
    } catch (err) {
      console.error('Fehler beim Kopieren: ', err);
      alert('Fehler beim Kopieren des Prompts!');
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="output">
      <h2>Generierte Daten</h2>
      <pre id="outputData">{jsonOutput}</pre>

      {/* Button zum Kopieren des KI-Prompts */}
      <button
        onClick={copyPromptToClipboard}
        style={{
          marginTop: '20px',
          padding: '8px 16px',
          backgroundColor: '#5c6bc0',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        KI-Prompt kopieren
      </button>
    </div>
  );
};

export default Output;