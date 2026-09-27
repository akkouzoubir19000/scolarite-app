type ModuleCard = {
  title: string;
  value: string;
  description: string;
};

const modules: ModuleCard[] = [
  { title: 'Élèves', value: '1,245', description: 'Dossiers actifs' },
  { title: 'Enseignants', value: '96', description: 'Matières attribuées' },
  { title: 'Classes', value: '32', description: 'Groupes pédagogiques' },
  { title: 'Bulletins', value: '4,380', description: 'Publiés cette année' },
];

const stats = [
  { label: 'Absences justifiées', value: '92%' },
  { label: 'Moyenne générale', value: '15.8/20' },
  { label: 'Parents connectés', value: '742' },
  { label: 'Rendez-vous', value: '38' },
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>Scolarité Algérie</h1>
        <nav>
          <a href="#">Accueil</a>
          <a href="#">Élèves</a>
          <a href="#">Enseignants</a>
          <a href="#">Classes</a>
          <a href="#">Notes</a>
          <a href="#">Bulletins</a>
          <a href="#">Paramètres</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h2>Gestion scolaire</h2>
          </div>
          <button>+ Nouveau</button>
        </header>

        <section className="cards">
          {modules.map((item) => (
            <article key={item.title} className="card">
              <span>{item.title}</span>
              <strong>{item.value}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-box">
              <label>{item.label}</label>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="panel">
          <h3>À faire cette semaine</h3>
          <ul>
            <li>Valider les notes du 2e trimestre</li>
            <li>Publier les bulletins de 3AM</li>
            <li>Programmer l'emploi du temps de l'année</li>
            <li>Envoyer les annonces aux parents</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
