import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { Send, PlusCircle, BookOpen } from 'lucide-react';
import '../styles/Chiedi.css';

const Chiedi: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState<{type: 'question' | 'answer', text: string}[]>([]);
  const [suggestions] = useState([
    'Cos\'è il teorema di Pitagora?',
    'Spiega il ciclo dell\'acqua',
    'Chi era Alessandro Manzoni?',
    'Come si risolve un\'equazione di secondo grado?'
  ]);

  const handleSubmitQuestion = () => {
    if (question.trim() === '') return;
    
    // Add user question to conversation
    setConversation([...conversation, {type: 'question', text: question}]);
    
    // Simulate AI response based on the question
    let response = '';
    
    if (question.toLowerCase().includes('pitagora')) {
      response = 'Il teorema di Pitagora afferma che in un triangolo rettangolo, il quadrato dell\'ipotenusa è uguale alla somma dei quadrati dei due cateti. In formula: a² + b² = c², dove c è l\'ipotenusa e a e b sono i cateti.';
    } else if (question.toLowerCase().includes('acqua')) {
      response = 'Il ciclo dell\'acqua, o ciclo idrologico, è il percorso che l\'acqua compie attraverso l\'atmosfera, la superficie terrestre e il sottosuolo. Include processi come evaporazione, condensazione, precipitazione, infiltrazione e deflusso.';
    } else if (question.toLowerCase().includes('manzoni')) {
      response = 'Alessandro Manzoni (1785-1873) è stato uno scrittore, poeta e drammaturgo italiano, considerato uno dei maggiori letterati italiani di tutti i tempi. È principalmente noto per il suo romanzo "I Promessi Sposi", una delle opere più importanti della letteratura italiana.';
    } else if (question.toLowerCase().includes('equazione')) {
      response = 'Per risolvere un\'equazione di secondo grado nella forma ax² + bx + c = 0, si può utilizzare la formula risolutiva: x = (-b ± √(b² - 4ac)) / 2a, dove il discriminante Δ = b² - 4ac determina il numero di soluzioni.';
    } else {
      response = 'Mi spiace, non ho informazioni specifiche su questo argomento. Prova a riformulare la tua domanda o consulta le fonti consigliate per approfondire questo tema.';
    }
    
    // Add simulated response after a short delay
    setTimeout(() => {
      setConversation(prev => [...prev, {type: 'answer', text: response}]);
    }, 800);
    
    setQuestion('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuestion(suggestion);
  };

  return (
    <Layout title="Chiedi e scopri">
      <div className="chiedi-container">
        <section className="conversation-section">
          <div className="conversation-history">
            {conversation.length === 0 ? (
              <div className="empty-conversation">
                <BookOpen size={48} />
                <p>Fai una domanda per iniziare la conversazione</p>
              </div>
            ) : (
              conversation.map((item, index) => (
                <div 
                  key={index} 
                  className={`message ${item.type === 'question' ? 'user-message' : 'ai-message'}`}
                >
                  <div className="message-content">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="question-input-container">
            <input
              type="text"
              className="question-input"
              placeholder="Fai una domanda..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmitQuestion()}
            />
            <Button 
              icon={<Send size={18} />} 
              onClick={handleSubmitQuestion}
              ariaLabel="Invia domanda"
            >
              Invia
            </Button>
          </div>
        </section>

        <section className="suggestions-section">
          <h2 className="section-title">Domande suggerite</h2>
          <div className="suggestion-chips">
            {suggestions.map((suggestion, index) => (
              <button 
                key={index} 
                className="suggestion-chip"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
          
          <h2 className="section-title">Risorse per approfondire</h2>
          <div className="resources-list">
            <Card title="Matematica" className="resource-card">
              <p>Libri di testo consigliati, eserciziari e risorse online per approfondire gli argomenti di matematica.</p>
              <Button 
                variant="text" 
                size="small" 
                icon={<PlusCircle size={16} />}
              >
                Mostra risorse
              </Button>
            </Card>
            
            <Card title="Letteratura" className="resource-card">
              <p>Antologie, opere complete e materiali critici per lo studio della letteratura italiana e straniera.</p>
              <Button 
                variant="text" 
                size="small" 
                icon={<PlusCircle size={16} />}
              >
                Mostra risorse
              </Button>
            </Card>
            
            <Card title="Scienze" className="resource-card">
              <p>Manuali, enciclopedie e laboratori virtuali per approfondire gli argomenti scientifici.</p>
              <Button 
                variant="text" 
                size="small" 
                icon={<PlusCircle size={16} />}
              >
                Mostra risorse
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Chiedi;