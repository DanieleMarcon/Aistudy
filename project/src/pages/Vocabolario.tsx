import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { Plus, Search, Edit2, Trash2, Save, X } from 'lucide-react';
import '../styles/Vocabolario.css';

const Vocabolario: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [words, setWords] = useState([
    { id: 1, term: 'Fotosintesi', definition: 'Processo attraverso cui le piante convertono la luce solare in energia chimica, producendo ossigeno e glucosio.', category: 'Scienze' },
    { id: 2, term: 'Metonimia', definition: 'Figura retorica che consiste nella sostituzione di un termine con un altro che ha con il primo una relazione di contiguità logica.', category: 'Letteratura' },
    { id: 3, term: 'Derivata', definition: 'In matematica, rappresenta il tasso di variazione istantanea di una funzione rispetto a una variabile.', category: 'Matematica' },
    { id: 4, term: 'Mitocondrio', definition: 'Organello cellulare responsabile della produzione di energia attraverso la respirazione cellulare.', category: 'Scienze' },
    { id: 5, term: 'Teorema', definition: 'Affermazione che può essere dimostrata come vera sulla base di assiomi o altri teoremi.', category: 'Matematica' },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTerm, setEditTerm] = useState('');
  const [editDefinition, setEditDefinition] = useState('');
  const [editCategory, setEditCategory] = useState('');

  const [newTerm, setNewTerm] = useState('');
  const [newDefinition, setNewDefinition] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredWords = words.filter(word => 
    word.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(words.map(word => word.category)));

  const handleEdit = (id: number) => {
    const wordToEdit = words.find(word => word.id === id);
    if (wordToEdit) {
      setEditingId(id);
      setEditTerm(wordToEdit.term);
      setEditDefinition(wordToEdit.definition);
      setEditCategory(wordToEdit.category);
    }
  };

  const handleSaveEdit = () => {
    if (editingId === null) return;
    
    setWords(words.map(word => 
      word.id === editingId ? 
      { ...word, term: editTerm, definition: editDefinition, category: editCategory } : 
      word
    ));
    
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setWords(words.filter(word => word.id !== id));
  };

  const handleAddWord = () => {
    if (newTerm.trim() === '' || newDefinition.trim() === '') return;
    
    const newWord = {
      id: Date.now(),
      term: newTerm,
      definition: newDefinition,
      category: newCategory || 'Generale'
    };
    
    setWords([...words, newWord]);
    setNewTerm('');
    setNewDefinition('');
    setNewCategory('');
    setShowAddForm(false);
  };

  return (
    <Layout title="Vocabolario interattivo">
      <div className="vocabolario-container">
        <section className="vocabolario-controls">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Cerca una parola o categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <Button 
            icon={<Plus size={18} />} 
            onClick={() => setShowAddForm(!showAddForm)}
            ariaLabel={showAddForm ? "Chiudi form" : "Aggiungi parola"}
          >
            {showAddForm ? 'Annulla' : 'Aggiungi parola'}
          </Button>
        </section>

        {showAddForm && (
          <Card className="add-word-form">
            <h3>Aggiungi una nuova parola</h3>
            <div className="form-group">
              <label htmlFor="newTerm">Termine:</label>
              <input
                id="newTerm"
                type="text"
                value={newTerm}
                onChange={(e) => setNewTerm(e.target.value)}
                placeholder="Inserisci il termine"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="newDefinition">Definizione:</label>
              <textarea
                id="newDefinition"
                value={newDefinition}
                onChange={(e) => setNewDefinition(e.target.value)}
                placeholder="Inserisci la definizione"
                rows={3}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="newCategory">Categoria:</label>
              <input
                id="newCategory"
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Es. Scienze, Letteratura, Matematica"
              />
            </div>
            
            <div className="form-actions">
              <Button 
                onClick={handleAddWord}
                disabled={newTerm.trim() === '' || newDefinition.trim() === ''}
              >
                Aggiungi
              </Button>
            </div>
          </Card>
        )}

        <section className="categories-section">
          <h2 className="section-title">Categorie</h2>
          <div className="category-chips">
            <button 
              className={`category-chip ${searchTerm === '' ? 'active' : ''}`}
              onClick={() => setSearchTerm('')}
            >
              Tutte
            </button>
            
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`category-chip ${searchTerm === category ? 'active' : ''}`}
                onClick={() => setSearchTerm(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="words-section">
          <h2 className="section-title">Parole ({filteredWords.length})</h2>
          
          <div className="words-list">
            {filteredWords.map(word => (
              <Card key={word.id} className="word-card">
                {editingId === word.id ? (
                  <div className="word-edit-form">
                    <div className="form-group">
                      <label htmlFor={`editTerm-${word.id}`}>Termine:</label>
                      <input
                        id={`editTerm-${word.id}`}
                        type="text"
                        value={editTerm}
                        onChange={(e) => setEditTerm(e.target.value)}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor={`editDefinition-${word.id}`}>Definizione:</label>
                      <textarea
                        id={`editDefinition-${word.id}`}
                        value={editDefinition}
                        onChange={(e) => setEditDefinition(e.target.value)}
                        rows={3}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor={`editCategory-${word.id}`}>Categoria:</label>
                      <input
                        id={`editCategory-${word.id}`}
                        type="text"
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                      />
                    </div>
                    
                    <div className="edit-actions">
                      <Button 
                        variant="outline" 
                        size="small" 
                        icon={<Save size={16} />}
                        onClick={handleSaveEdit}
                      >
                        Salva
                      </Button>
                      <Button 
                        variant="text" 
                        size="small" 
                        icon={<X size={16} />}
                        onClick={handleCancelEdit}
                      >
                        Annulla
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="word-header">
                      <div className="word-title-container">
                        <h3 className="word-title">{word.term}</h3>
                        <span className="word-category">{word.category}</span>
                      </div>
                      <div className="word-actions">
                        <button 
                          className="word-action-btn" 
                          onClick={() => handleEdit(word.id)}
                          aria-label="Modifica"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button 
                          className="word-action-btn" 
                          onClick={() => handleDelete(word.id)}
                          aria-label="Elimina"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="word-definition">{word.definition}</p>
                  </>
                )}
              </Card>
            ))}
            
            {filteredWords.length === 0 && (
              <div className="empty-words">
                <p>Nessuna parola trovata. Prova a cercare altro o aggiungi una nuova parola.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Vocabolario;