import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { Calendar, Clock, FileText, Check, Plus, UploadCloud } from 'lucide-react';
import '../styles/Studiamo.css';

const Studiamo: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Studiare storia: Capitolo 3', completed: false, dueDate: '2025-06-10' },
    { id: 2, title: 'Esercizi matematica: pag 45-47', completed: true, dueDate: '2025-06-08' },
    { id: 3, title: 'Preparare presentazione scienze', completed: false, dueDate: '2025-06-15' },
  ]);

  const [studyFiles, setStudyFiles] = useState([
    { id: 1, name: 'Appunti_Storia.pdf', date: '2025-06-02' },
    { id: 2, name: 'Esercizi_Matematica.docx', date: '2025-06-05' },
    { id: 3, name: 'Presentazione_Scienze.pptx', date: '2025-06-07' },
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const [newTask, setNewTask] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    
    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      completed: false,
      dueDate: newTaskDate || '2025-06-30'
    };
    
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setNewTaskDate('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Simulate file upload
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const newFile = {
        id: Date.now(),
        name: file.name,
        date: new Date().toISOString().split('T')[0]
      };
      
      setStudyFiles([...studyFiles, newFile]);
    }
  };

  return (
    <Layout title="Studiamo insieme">
      <div className="studiamo-container">
        <section className="planner-section">
          <h2 className="section-title">
            <Calendar size={20} />
            <span>Il tuo piano di studio</span>
          </h2>
          
          <div className="task-add">
            <input
              type="text"
              placeholder="Aggiungi un nuovo compito..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="task-input"
            />
            <input
              type="date"
              value={newTaskDate}
              onChange={(e) => setNewTaskDate(e.target.value)}
              className="date-input"
            />
            <Button 
              icon={<Plus size={18} />}
              onClick={handleAddTask}
              ariaLabel="Aggiungi compito"
            >
              Aggiungi
            </Button>
          </div>
          
          <div className="tasks-list">
            {tasks.map(task => (
              <div 
                key={task.id} 
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <button 
                  className="task-check" 
                  onClick={() => toggleTaskCompletion(task.id)}
                  aria-label={task.completed ? "Segna come non completato" : "Segna come completato"}
                >
                  {task.completed ? <Check size={18} /> : null}
                </button>
                <div className="task-details">
                  <span className="task-title">{task.title}</span>
                  <span className="task-date">
                    <Clock size={14} />
                    {task.dueDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="material-section">
          <h2 className="section-title">
            <FileText size={20} />
            <span>I tuoi materiali di studio</span>
          </h2>
          
          <div className="upload-area">
            <label htmlFor="file-upload" className="file-upload-label">
              <UploadCloud size={24} />
              <span>Carica un nuovo file</span>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileUpload}
                className="file-input"
              />
            </label>
          </div>
          
          <div className="files-list">
            {studyFiles.map(file => (
              <Card key={file.id} className="file-card">
                <div className="file-icon">
                  <FileText size={20} />
                </div>
                <div className="file-details">
                  <span className="file-name">{file.name}</span>
                  <span className="file-date">Caricato il: {file.date}</span>
                </div>
                <Button 
                  variant="text" 
                  size="small"
                  ariaLabel={`Apri ${file.name}`}
                >
                  Apri
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section className="tips-section">
          <h2 className="section-title">Suggerimenti per lo studio</h2>
          
          <div className="tips-container">
            <Card title="Tecnica del Pomodoro">
              <p>Studia per 25 minuti e poi prenditi una pausa di 5 minuti. Dopo 4 cicli, fai una pausa più lunga di 15-30 minuti.</p>
            </Card>
            
            <Card title="Ripetizione spaziata">
              <p>Rivedi gli argomenti a intervalli crescenti per migliorare la memorizzazione a lungo termine.</p>
            </Card>
            
            <Card title="Mappe mentali">
              <p>Utilizza la sezione Mappe per visualizzare i concetti e collegare le idee tra loro.</p>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Studiamo;