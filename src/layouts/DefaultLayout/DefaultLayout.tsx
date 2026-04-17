import { Outlet, Link } from "react-router-dom";

import styles from "./DefaultLayout.module.css";

export default function DefaultLayout() {
  return (
    <div className={styles["app-container"]}>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <h1>MUI Course</h1>
      </header>

      <div className={styles.wrapper}>
        <aside className={styles.sideBar}>
          <nav>
            <ul className={styles["ul-links"]}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/section-1">Seção 1</Link>
              </li>
              <li>
                <Link to="/section-2">Seção 2</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <footer className={styles.footer}>
        <p>© 2026 - Desenvolvido com React</p>
      </footer>
    </div>
  );
}
