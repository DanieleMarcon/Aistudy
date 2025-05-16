# AIstudy App

AIstudy è un'applicazione web progettata per migliorare il metodo di studio degli studenti, con particolare attenzione all'accessibilità e agli strumenti didattici interattivi.

## Panoramica del Progetto

Questa applicazione è stata sviluppata per supportare studenti con e senza disabilità, offrendo un'interfaccia accessibile e strumenti che si adattano a diversi stili di apprendimento.

### Caratteristiche Principali

- Navigazione semplice e accessibile
- Layout responsive che si adatta a tutti i dispositivi
- Strumenti di studio interattivi e simulati
- Funzionalità di accessibilità personalizzabili
- Interfaccia intuitiva con feedback visivi

## Struttura del Progetto

```
aistudy-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AccessibilityControl.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Slider.tsx
│   │   └── Toggle.tsx
│   ├── pages/
│   │   ├── Accessibilita.tsx
│   │   ├── Chiedi.tsx
│   │   ├── Home.tsx
│   │   ├── Mappe.tsx
│   │   ├── Specchio.tsx
│   │   ├── Studiamo.tsx
│   │   ├── Testo.tsx
│   │   └── Vocabolario.tsx
│   ├── styles/
│   │   ├── Accessibilita.css
│   │   ├── AccessibilityControl.css
│   │   ├── Button.css
│   │   ├── Card.css
│   │   ├── Chiedi.css
│   │   ├── FeatureCard.css
│   │   ├── Home.css
│   │   ├── Layout.css
│   │   ├── Mappe.css
│   │   ├── Navbar.css
│   │   ├── Slider.css
│   │   ├── Specchio.css
│   │   ├── Studiamo.css
│   │   ├── Testo.css
│   │   ├── Toggle.css
│   │   ├── Vocabolario.css
│   │   └── index.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Pagine e Funzionalità

### Home
La pagina iniziale presenta l'applicazione e fornisce collegamenti a tutte le sezioni principali.

### Studiamo
Un percorso guidato di studio con planner, agenda e gestione dei file. Include suggerimenti per migliorare il metodo di studio.

### Chiedi
Una sezione per porre domande e ricevere risposte simulate, con suggerimenti per approfondimenti e risorse correlate.

### Vocabolario
Un glossario interattivo che permette di aggiungere, modificare ed esplorare definizioni organizzate per categorie.

### Testo
Una guida alla composizione di testi con diverse strategie di scrittura e feedback simulato.

### Mappe
Uno strumento per creare e visualizzare mappe mentali con nodi interattivi.

### Specchio
Un'area per simulare presentazioni orali e ricevere feedback automatico sulla performance.

### Accessibilità
Impostazioni personalizzabili per adattare l'interfaccia alle esigenze dell'utente, inclusi controlli per tema, dimensione del testo e altro.

## Istruzioni per la Navigazione

1. Dalla Home, seleziona una delle sezioni cliccando sulla rispettiva card
2. Utilizza la barra di navigazione in alto per spostarti tra le diverse sezioni
3. Personalizza l'esperienza visitando la sezione Accessibilità
4. In ciascuna sezione, interagisci con i controlli per simulare le diverse funzionalità

## Tecnologie Utilizzate

- React 18
- TypeScript
- React Router
- Tailwind CSS (solo per utility, senza componenti UI)
- Lucide React per le icone