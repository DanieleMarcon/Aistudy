import React from 'react';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import { BookOpen, HelpCircle, BookText, FileText, Network, Mic, Settings } from 'lucide-react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <Layout title="Benvenuto su AIstudy">
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Studia meglio, impara di più</h2>
            <p className="hero-description">
              AIstudy ti offre strumenti innovativi per migliorare il tuo metodo di studio
              e rendere l'apprendimento accessibile a tutti.
            </p>
            <div className="hero-buttons">
              <Button 
                variant="primary" 
                size="large"
                onClick={() => window.location.href = '/studiamo'}
              >
                Inizia a studiare
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => window.location.href = '/accessibilita'}
              >
                Personalizza l'esperienza
              </Button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Esplora le funzionalità</h2>
          <div className="features-grid">
            <FeatureCard
              title="Studiamo insieme"
              description="Percorso guidato di studio con planner, agenda e gestione file"
              icon={<BookOpen size={24} />}
              to="/studiamo"
            />
            <FeatureCard
              title="Chiedi e scopri"
              description="Fai domande e ricevi suggerimenti per approfondire"
              icon={<HelpCircle size={24} />}
              to="/chiedi"
            />
            <FeatureCard
              title="Vocabolario interattivo"
              description="Glossario personalizzabile con definizioni interattive"
              icon={<BookText size={24} />}
              to="/vocabolario"
            />
            <FeatureCard
              title="Composizione testi"
              description="Guida alla scrittura con tecniche efficaci"
              icon={<FileText size={24} />}
              to="/testo"
            />
            <FeatureCard
              title="Mappe mentali"
              description="Crea mappe concettuali per organizzare le tue idee"
              icon={<Network size={24} />}
              to="/mappe"
            />
            <FeatureCard
              title="Specchio orale"
              description="Simula presentazioni orali e ricevi feedback"
              icon={<Mic size={24} />}
              to="/specchio"
            />
            <FeatureCard
              title="Accessibilità"
              description="Personalizza l'app secondo le tue esigenze"
              icon={<Settings size={24} />}
              to="/accessibilita"
            />
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Perché AIstudy?</h2>
          <div className="about-content">
            <div className="about-card">
              <h3>Per tutti gli studenti</h3>
              <p>
                Progettato per essere accessibile a tutti, indipendentemente dalle abilità personali.
                Offriamo strumenti inclusivi per supportare diverse modalità di apprendimento.
              </p>
            </div>
            <div className="about-card">
              <h3>Metodo di studio efficace</h3>
              <p>
                I nostri strumenti si basano su tecniche didattiche comprovate che aiutano a memorizzare, 
                comprendere e applicare ciò che studi.
              </p>
            </div>
            <div className="about-card">
              <h3>Impara a tuo ritmo</h3>
              <p>
                Personalizza il percorso di apprendimento in base alle tue esigenze e tempi.
                Non c'è fretta, impara con i tuoi tempi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;