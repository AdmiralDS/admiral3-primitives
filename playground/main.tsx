import { StrictMode, useState } from 'react';

import { createRoot } from 'react-dom/client';

import { playgroundScenarios } from './scenarios';
import './styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Playground root container is missing');
}

const scenarioId = new URLSearchParams(window.location.search).get('scenario') ?? playgroundScenarios[0]?.id;
const scenario = playgroundScenarios.find((item) => item.id === scenarioId);

if (!scenario) {
  throw new Error(`Unknown playground scenario: ${scenarioId}`);
}

document.title = `${scenario.title} | Admiral Internal Playground`;

export const PlaygroundApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="playground-shell">
      <header className="playground-header">
        <h1 className="playground-page-title">Internal E2E Playground</h1>
        <button className="playground-toggle" onClick={() => setIsSidebarOpen((value) => !value)} type="button">
          {isSidebarOpen ? 'Hide menu' : 'Show menu'}
        </button>
      </header>
      <section className={`playground-layout${isSidebarOpen ? '' : ' playground-layout_sidebar-hidden'}`}>
        {isSidebarOpen ? (
          <aside className="playground-sidebar">
            <nav aria-label="Playground scenarios" className="playground-nav">
              {playgroundScenarios.map((item) => {
                const isActive = item.id === scenario.id;

                return (
                  <a
                    key={item.id}
                    aria-current={isActive ? 'page' : undefined}
                    className={`playground-nav-link${isActive ? ' playground-nav-link_active' : ''}`}
                    href={`/?scenario=${encodeURIComponent(item.id)}`}
                    title={item.title}
                  >
                    {item.title}
                  </a>
                );
              })}
            </nav>
          </aside>
        ) : null}
        <section className="playground-content">
          <div>
            {scenario.title} ({scenario.id})
          </div>
          <div className="playground-preview">{scenario.render()}</div>
        </section>
      </section>
    </main>
  );
};

createRoot(rootElement).render(
  <StrictMode>
    <PlaygroundApp />
  </StrictMode>,
);
