import "./App.css";
import MainPage from "./pages/MainPage";
import { useTranslation } from 'react-i18next';
import "./i18n/configs";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <main className="container">
        <div className="left-menu">
          <h1>{t("application.leftMenu.title")}</h1>
          <ul>
            <li>{t("application.leftMenu.home")}</li>
            <li>{t("application.leftMenu.search")}</li>
            <li>{t("application.leftMenu.settings")}</li>
          </ul>
        </div>
        <div className="page-content">
          <MainPage />
        </div>
      </main>
    </>
  );
}

export default App;
