import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { Lightbulb, HelpCircle, CheckCircle } from 'lucide-react';
import '../styles/Testo.css';

const Testo: React.FC = () => {
  const [text, setText] = useState('');
  const [activeStrategy, setActiveStrategy] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const strategies = [
    {
      id: 'cinque-w',
      name: 'Le 5 W',
      description: 'Rispondi alle domande: Chi? Cosa? Quando? Dove? Perché?',
      prompts: [
        'Chi sono i protagonisti?',
        'Cosa sta succedendo?',
        'Quando avviene la storia?',
        'Dove si svolge la narrazione?',
        'Perché accadono questi eventi?'
      ]
    },
    {
      id: 'causa-effetto',
      name: 'Causa ed Effetto',
      description: 'Analizza le relazioni di causa-effetto nel testo',
      prompts: [
        'Qual è la causa principale degli eventi?',
        'Quali sono gli effetti diretti?',
        'Ci sono effetti collaterali o inaspettati?',
        'Come si collegano tra loro le diverse cause?',
        'Quali conseguenze future possiamo prevedere?'
      ]
    },
    {
      id: 'argomenti',
      name: 'Argomenti e Prove',
      description: 'Organizza le tue argomentazioni con prove a supporto',
      prompts: [
        'Qual è la tua tesi principale?',
        'Quali prove sostengono la tua tesi?',
        'Ci sono controargomenti da considerare?',
        'Come puoi confutare eventuali obiezioni?',
        'Quale conclusione puoi trarre dai tuoi argomenti?'
      ]
    }
  ];

  const handleStrategySelect = (id: string) => {
    if (activeStrategy === id) {
      setActiveStrategy(null);
    } else {
      setActiveStrategy(id);
    }
    setShowFeedback(false);
  };

  const getPromptsForActiveStrategy = () => {
    if (!activeStrategy) return [];
    const strategy = strategies.find(s => s.id === activeStrategy);
    return strategy ? strategy.prompts : [];
  };

  const handleAnalyzeText = () => {
    setShowFeedback(true);
  };

  return (
    <Layout title="Composizione testi">
      <div className="testo-container">
        <section className="strategies-section">
          <h2 className="section-title">
            <Lightbulb size={20} />
            <span>Strategie di scrittura</span>
          </h2>
          
          <div className="strategies-list">
            {strategies.map(strategy => (
              <Card 
                key={strategy.id}
                className={`strategy-card ${activeStrategy === strategy.id ? 'active' : ''}`}
                onClick={() => handleStrategySelect(strategy.id)}
              >
                <h3 className="strategy-title">{strategy.name}</h3>
                <p className="strategy-description">{strategy.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="editor-section">
          <div className="editor-container">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Inizia a scrivere il tuo testo qui..."
              className="text-editor"
              rows={12}
            />
            
            <div className="editor-controls">
              <div className="word-count">
                {text.trim() ? text.trim().split(/\s+/).length : 0} parole
              </div>
              
              <Button 
                onClick={handleAnalyzeText}
                disabled={text.trim() === '' || !activeStrategy}
              >
                Analizza il testo
              </Button>
            </div>
          </div>
          
          {activeStrategy && (
            <div className="prompt-container">
              <h3 className="prompt-title">
                <HelpCircle size={18} />
                <span>Domande guida</span>
              </h3>
              
              <ul className="prompts-list">
                {getPromptsForActiveStrategy().map((prompt, index) => (
                  <li key={index} className="prompt-item">
                    {prompt}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {showFeedback && (
          <section className="feedback-section">
            <Card>
              <h3 className="feedback-title">
                <CheckCircle size={18} />
                <span>Feedback sulla tua composizione</span>
              </h3>
              
              <div className="feedback-content">
                <p>In base alla strategia selezionata, ecco alcuni suggerimenti per migliorare il tuo testo:</p>
                
                <ul className="feedback-list">
                  {activeStrategy === 'cinque-w' && (
                    <>
                      <li>Hai descritto chiaramente chi sono i protagonisti della tua storia.</li>
                      <li>Prova ad approfondire meglio quando avvengono gli eventi.</li>
                      <li>La descrizione del luogo potrebbe essere più dettagliata.</li>
                    </>
                  )}
                  
                  {activeStrategy === 'causa-effetto' && (
                    <>
                      <li>Le relazioni causa-effetto sono ben strutturate.</li>
                      <li>Potresti esplorare ulteriori conseguenze a lungo termine.</li>
                      <li>Considera di analizzare anche le cause secondarie degli eventi.</li>
                    </>
                  )}
                  
                  {activeStrategy === 'argomenti' && (
                    <>
                      <li>La tua tesi è chiara e ben articolata.</li>
                      <li>Aggiungi più prove concrete a supporto delle tue argomentazioni.</li>
                      <li>Considera eventuali controargomenti per rafforzare la tua tesi.</li>
                    </>
                  )}
                </ul>
              </div>
            </Card>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Testo;