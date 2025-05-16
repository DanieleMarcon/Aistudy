import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { Play, Pause, StopCircle, Mic, Volume2, Clock } from 'lucide-react';
import '../styles/Specchio.css';

const Specchio: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleStartRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
    setShowFeedback(false);
    
    // Start timer
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };
  
  const handlePauseRecording = () => {
    setIsPaused(!isPaused);
    
    if (!isPaused) {
      // Pause timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      // Resume timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };
  
  const handleStopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    
    // Stop timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    // Show feedback if recording was longer than 3 seconds
    if (recordingTime > 3) {
      setShowFeedback(true);
    } else {
      setRecordingTime(0);
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const resetRecording = () => {
    setRecordingTime(0);
    setShowFeedback(false);
  };

  return (
    <Layout title="Specchio orale">
      <div className="specchio-container">
        <section className="recording-section">
          <div className="video-container">
            <div className="video-placeholder">
              <div className="video-icon">
                {isRecording ? (
                  isPaused ? <Pause size={48} /> : <Mic size={48} />
                ) : (
                  <Volume2 size={48} />
                )}
              </div>
              <p className="video-text">
                {isRecording
                  ? isPaused
                    ? 'Registrazione in pausa'
                    : 'Registrazione in corso...'
                  : 'Premi Avvia per iniziare a registrare'}
              </p>
            </div>
            
            {isRecording && (
              <div className="recording-timer">
                <Clock size={16} />
                <span>{formatTime(recordingTime)}</span>
              </div>
            )}
          </div>
          
          <div className="recording-controls">
            {!isRecording ? (
              <Button 
                variant="primary" 
                icon={<Play size={18} />}
                onClick={handleStartRecording}
                ariaLabel="Avvia registrazione"
              >
                Avvia
              </Button>
            ) : (
              <>
                <Button 
                  variant={isPaused ? 'primary' : 'outline'} 
                  icon={isPaused ? <Play size={18} /> : <Pause size={18} />}
                  onClick={handlePauseRecording}
                  ariaLabel={isPaused ? 'Riprendi registrazione' : 'Pausa registrazione'}
                >
                  {isPaused ? 'Riprendi' : 'Pausa'}
                </Button>
                <Button 
                  variant="outline" 
                  icon={<StopCircle size={18} />}
                  onClick={handleStopRecording}
                  ariaLabel="Ferma registrazione"
                >
                  Ferma
                </Button>
              </>
            )}
          </div>
        </section>

        {showFeedback && (
          <section className="feedback-section">
            <h2 className="section-title">Analisi della tua presentazione</h2>
            
            <div className="feedback-cards">
              <Card title="Tempo totale" className="feedback-card">
                <div className="feedback-value">{formatTime(recordingTime)}</div>
                <p>Durata ideale per una presentazione breve: 3-5 minuti</p>
              </Card>
              
              <Card title="Velocità del parlato" className="feedback-card">
                <div className="feedback-value">Moderata</div>
                <p>La tua velocità è adeguata per una buona comprensione</p>
              </Card>
              
              <Card title="Pause" className="feedback-card">
                <div className="feedback-value">7 pause</div>
                <p>Le pause ben posizionate migliorano l'attenzione dell'ascoltatore</p>
              </Card>
              
              <Card title="Chiarezza" className="feedback-card">
                <div className="feedback-value">Buona</div>
                <p>La tua pronuncia è chiara e ben articolata</p>
              </Card>
            </div>
            
            <div className="feedback-details">
              <h3>Suggerimenti per migliorare</h3>
              <ul className="feedback-list">
                <li>Prova ad inserire più pause strategiche tra i concetti importanti</li>
                <li>Mantieni un volume costante durante tutta la presentazione</li>
                <li>Evita le parole ripetitive come "ehm", "cioè", "praticamente"</li>
                <li>Cerca di concludere con una frase di impatto che riassuma il concetto principale</li>
              </ul>
            </div>
            
            <div className="feedback-actions">
              <Button onClick={resetRecording}>Nuova registrazione</Button>
            </div>
          </section>
        )}

        <section className="tips-section">
          <h2 className="section-title">Consigli per l'esposizione orale</h2>
          
          <div className="tips-grid">
            <Card title="Preparazione" className="tip-card">
              <ul>
                <li>Crea una scaletta dei punti principali</li>
                <li>Esercitati ad alta voce più volte</li>
                <li>Cronometra la tua esposizione</li>
                <li>Prepara risposte alle possibili domande</li>
              </ul>
            </Card>
            
            <Card title="Durante l'esposizione" className="tip-card">
              <ul>
                <li>Mantieni un contatto visivo con l'uditorio</li>
                <li>Parla lentamente e con chiarezza</li>
                <li>Usa le pause per enfatizzare i concetti chiave</li>
                <li>Varia il tono della voce per mantenere l'attenzione</li>
              </ul>
            </Card>
            
            <Card title="Gestione dell'ansia" className="tip-card">
              <ul>
                <li>Fai respirazioni profonde prima di iniziare</li>
                <li>Visualizza un'esposizione di successo</li>
                <li>Ricorda che un po' di nervosismo è normale</li>
                <li>Concentrati sul contenuto, non sulla performance</li>
              </ul>
            </Card>
            
            <Card title="Linguaggio del corpo" className="tip-card">
              <ul>
                <li>Mantieni una postura eretta ma rilassata</li>
                <li>Usa gesti naturali per enfatizzare i concetti</li>
                <li>Evita movimenti ripetitivi o nervosi</li>
                <li>Sorridi quando appropriato</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Specchio;