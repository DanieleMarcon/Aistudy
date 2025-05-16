import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Plus, Minus, ZoomIn, ZoomOut, Save, Download } from 'lucide-react';
import '../styles/Mappe.css';

const Mappe: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  
  const handleZoomIn = () => {
    if (zoomLevel < 150) {
      setZoomLevel(zoomLevel + 10);
    }
  };
  
  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 10);
    }
  };

  const handleNodeClick = (id: number) => {
    setSelectedNode(id === selectedNode ? null : id);
  };

  return (
    <Layout title="Mappe mentali">
      <div className="mappe-container">
        <section className="map-controls">
          <div className="control-group">
            <Button 
              variant="outline" 
              size="small" 
              icon={<Plus size={16} />}
              ariaLabel="Aggiungi nodo"
            >
              Nodo
            </Button>
            <Button 
              variant="outline" 
              size="small" 
              icon={<Minus size={16} />}
              ariaLabel="Rimuovi nodo"
              disabled={selectedNode === null}
            >
              Rimuovi
            </Button>
          </div>
          
          <div className="control-group">
            <Button 
              variant="outline" 
              size="small" 
              icon={<ZoomIn size={16} />}
              onClick={handleZoomIn}
              ariaLabel="Zoom in"
            />
            <span className="zoom-level">{zoomLevel}%</span>
            <Button 
              variant="outline" 
              size="small" 
              icon={<ZoomOut size={16} />}
              onClick={handleZoomOut}
              ariaLabel="Zoom out"
            />
          </div>
          
          <div className="control-group">
            <Button 
              variant="outline" 
              size="small" 
              icon={<Save size={16} />}
              ariaLabel="Salva mappa"
            >
              Salva
            </Button>
            <Button 
              variant="outline" 
              size="small" 
              icon={<Download size={16} />}
              ariaLabel="Esporta mappa"
            >
              Esporta
            </Button>
          </div>
        </section>

        <section className="map-canvas-container">
          <div 
            className="map-canvas" 
            style={{ transform: `scale(${zoomLevel / 100})` }}
          >
            {/* Simulazione di una mappa mentale con nodi e connessioni */}
            <div className="map-node central-node" data-id="0" onClick={() => handleNodeClick(0)}>
              <div className={`node-content ${selectedNode === 0 ? 'selected' : ''}`}>
                Rivoluzione Industriale
              </div>
            </div>
            
            {/* Primo livello di nodi */}
            <div className="map-node" data-id="1" style={{ top: '120px', left: '400px' }} onClick={() => handleNodeClick(1)}>
              <div className={`node-content ${selectedNode === 1 ? 'selected' : ''}`}>
                Innovazioni Tecnologiche
              </div>
              <div className="node-connection" style={{ width: '100px', transform: 'rotate(-45deg)' }}></div>
            </div>
            
            <div className="map-node" data-id="2" style={{ top: '200px', left: '200px' }} onClick={() => handleNodeClick(2)}>
              <div className={`node-content ${selectedNode === 2 ? 'selected' : ''}`}>
                Cambiamenti Sociali
              </div>
              <div className="node-connection" style={{ width: '80px', transform: 'rotate(45deg)' }}></div>
            </div>
            
            <div className="map-node" data-id="3" style={{ top: '50px', left: '200px' }} onClick={() => handleNodeClick(3)}>
              <div className={`node-content ${selectedNode === 3 ? 'selected' : ''}`}>
                Conseguenze Economiche
              </div>
              <div className="node-connection" style={{ width: '80px', transform: 'rotate(-45deg)' }}></div>
            </div>
            
            {/* Secondo livello di nodi */}
            <div className="map-node secondary-node" data-id="4" style={{ top: '80px', left: '550px' }} onClick={() => handleNodeClick(4)}>
              <div className={`node-content ${selectedNode === 4 ? 'selected' : ''}`}>
                Macchina a Vapore
              </div>
              <div className="node-connection" style={{ width: '60px', transform: 'rotate(-20deg)' }}></div>
            </div>
            
            <div className="map-node secondary-node" data-id="5" style={{ top: '160px', left: '520px' }} onClick={() => handleNodeClick(5)}>
              <div className={`node-content ${selectedNode === 5 ? 'selected' : ''}`}>
                Telaio Meccanico
              </div>
              <div className="node-connection" style={{ width: '40px', transform: 'rotate(20deg)' }}></div>
            </div>
            
            <div className="map-node secondary-node" data-id="6" style={{ top: '250px', left: '100px' }} onClick={() => handleNodeClick(6)}>
              <div className={`node-content ${selectedNode === 6 ? 'selected' : ''}`}>
                Urbanizzazione
              </div>
              <div className="node-connection" style={{ width: '50px', transform: 'rotate(30deg)' }}></div>
            </div>
            
            <div className="map-node secondary-node" data-id="7" style={{ top: '280px', left: '240px' }} onClick={() => handleNodeClick(7)}>
              <div className={`node-content ${selectedNode === 7 ? 'selected' : ''}`}>
                Classe Operaia
              </div>
              <div className="node-connection" style={{ width: '40px', transform: 'rotate(-30deg)' }}></div>
            </div>
            
            <div className="map-node secondary-node" data-id="8" style={{ top: '-20px', left: '120px' }} onClick={() => handleNodeClick(8)}>
              <div className={`node-content ${selectedNode === 8 ? 'selected' : ''}`}>
                Capitalismo
              </div>
              <div className="node-connection" style={{ width: '50px', transform: 'rotate(30deg)' }}></div>
            </div>
          </div>
        </section>

        <section className="node-details">
          {selectedNode !== null ? (
            <div className="node-edit-form">
              <h3 className="details-title">Dettagli del nodo</h3>
              
              <div className="form-group">
                <label htmlFor="nodeTitle">Titolo:</label>
                <input 
                  id="nodeTitle" 
                  type="text" 
                  defaultValue={
                    selectedNode === 0 ? 'Rivoluzione Industriale' : 
                    selectedNode === 1 ? 'Innovazioni Tecnologiche' :
                    selectedNode === 2 ? 'Cambiamenti Sociali' :
                    selectedNode === 3 ? 'Conseguenze Economiche' :
                    selectedNode === 4 ? 'Macchina a Vapore' :
                    selectedNode === 5 ? 'Telaio Meccanico' :
                    selectedNode === 6 ? 'Urbanizzazione' :
                    selectedNode === 7 ? 'Classe Operaia' :
                    'Capitalismo'
                  } 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="nodeDescription">Descrizione:</label>
                <textarea 
                  id="nodeDescription" 
                  defaultValue={
                    selectedNode === 0 ? 'Trasformazione economica e sociale avvenuta tra il XVIII e il XIX secolo, caratterizzata da un rapido sviluppo industriale.' : 
                    selectedNode === 1 ? 'Invenzioni che hanno rivoluzionato il processo produttivo e aumentato l\'efficienza.' :
                    selectedNode === 2 ? 'Modifiche alla struttura sociale e demografica causate dall\'industrializzazione.' :
                    selectedNode === 3 ? 'Impatto sull\'economia e sui sistemi di produzione.' :
                    selectedNode === 4 ? 'Inventata da James Watt nel 1769, ha permesso di convertire energia termica in lavoro meccanico.' :
                    selectedNode === 5 ? 'Inventato da Edmund Cartwright nel 1785, ha rivoluzionato l\'industria tessile.' :
                    selectedNode === 6 ? 'Migrazione dalle zone rurali alle città in cerca di lavoro nelle nuove fabbriche.' :
                    selectedNode === 7 ? 'Nuovo gruppo sociale formato da lavoratori salariati nelle industrie.' :
                    'Sistema economico basato sulla proprietà privata e sulla ricerca del profitto.'
                  } 
                  rows={4}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="nodeColor">Colore:</label>
                <select id="nodeColor" defaultValue={selectedNode === 0 ? 'blue' : selectedNode <= 3 ? 'green' : 'orange'}>
                  <option value="blue">Blu</option>
                  <option value="green">Verde</option>
                  <option value="orange">Arancione</option>
                  <option value="purple">Viola</option>
                  <option value="red">Rosso</option>
                </select>
              </div>
              
              <div className="form-actions">
                <Button>Aggiorna</Button>
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Seleziona un nodo per visualizzare o modificare i dettagli.</p>
              <p>Puoi creare una nuova connessione selezionando prima un nodo di origine e poi cliccando sul pulsante "Nodo".</p>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Mappe;