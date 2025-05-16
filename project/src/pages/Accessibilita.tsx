import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Toggle from '../components/Toggle';
import Slider from '../components/Slider';
import AccessibilityControl from '../components/AccessibilityControl';
import { Sun, Moon, Music, Clock, Type, MousePointer, Eye } from 'lucide-react';
import '../styles/Accessibilita.css';

const Accessibilita: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState(100);
  
  const handleThemeChange = (isChecked: boolean) => {
    setTheme(isChecked ? 'dark' : 'light');
    // Simulazione del cambio tema
    document.body.className = isChecked ? 'dark-theme' : 'light-theme';
  };
  
  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
    // Simulazione dell'applicazione della dimensione del font
    document.documentElement.style.setProperty('--font-size-factor', `${value / 100}`);
  };

  return (
    <Layout title="Accessibilità">
      <div className="accessibilita-container">
        <section className="accessibility-section">
          <Card className="intro-card">
            <h2>Personalizza la tua esperienza</h2>
            <p>
              L'app AIstudy è progettata per essere accessibile a tutti. 
              Utilizza queste impostazioni per personalizzare l'interfaccia in base alle tue esigenze.
            </p>
          </Card>

          <div className="accessibility-controls">
            <AccessibilityControl
              id="visual-settings"
              title="Impostazioni visive"
              description="Modifica l'aspetto dell'interfaccia per migliorare la leggibilità"
            >
              <div className="control-item">
                <div className="control-item-icon">
                  {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
                </div>
                <Toggle
                  id="theme-toggle"
                  label="Tema scuro"
                  initialValue={theme === 'dark'}
                  onChange={handleThemeChange}
                />
              </div>
              
              <div className="control-item">
                <div className="control-item-icon">
                  <Type size={24} />
                </div>
                <Slider
                  id="font-size-slider"
                  label="Dimensione testo"
                  min={80}
                  max={150}
                  step={10}
                  initialValue={fontSize}
                  onChange={handleFontSizeChange}
                />
              </div>
              
              <div className="control-item">
                <div className="control-item-icon">
                  <Eye size={24} />
                </div>
                <Toggle
                  id="high-contrast-toggle"
                  label="Alto contrasto"
                  initialValue={false}
                />
              </div>
            </AccessibilityControl>
            
            <AccessibilityControl
              id="focus-settings"
              title="Concentrazione"
              description="Personalizza le funzionalità che ti aiutano a rimanere concentrato"
            >
              <div className="control-item">
                <div className="control-item-icon">
                  <Clock size={24} />
                </div>
                <Toggle
                  id="break-reminder-toggle"
                  label="Promemoria pausa (ogni 30 minuti)"
                  initialValue={true}
                />
              </div>
              
              <div className="control-item">
                <div className="control-item-icon">
                  <Music size={24} />
                </div>
                <Toggle
                  id="focus-music-toggle"
                  label="Musica di sottofondo"
                  initialValue={false}
                />
              </div>
            </AccessibilityControl>
            
            <AccessibilityControl
              id="interaction-settings"
              title="Interazione"
              description="Modifica le modalità di interazione con l'applicazione"
            >
              <div className="control-item">
                <div className="control-item-icon">
                  <MousePointer size={24} />
                </div>
                <Toggle
                  id="cursor-size-toggle"
                  label="Cursore grande"
                  initialValue={false}
                />
              </div>
              
              <div className="control-item">
                <Slider
                  id="animation-speed-slider"
                  label="Velocità animazioni"
                  min={0}
                  max={100}
                  step={25}
                  initialValue={75}
                />
              </div>
            </AccessibilityControl>
          </div>
        </section>
        
        <section className="preview-section">
          <h2 className="section-title">Anteprima</h2>
          
          <div className="preview-container" data-theme={theme}>
            <div className="preview-content">
              <h3 className="preview-title">Come appare il contenuto</h3>
              <p className="preview-text">
                Questo testo mostra come appariranno i contenuti con le tue impostazioni attuali.
                Regola le impostazioni di accessibilità fino a trovare la combinazione perfetta per te.
              </p>
              
              <div className="preview-buttons">
                <button className="preview-button primary">Pulsante principale</button>
                <button className="preview-button secondary">Pulsante secondario</button>
              </div>
              
              <div className="preview-card">
                <h4 className="preview-card-title">Esempio di card</h4>
                <p className="preview-card-text">
                  Le card sono utilizzate in tutta l'applicazione per organizzare i contenuti.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Accessibilita;