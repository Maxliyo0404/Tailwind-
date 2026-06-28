import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"; // Footer komponentini import qiling

function Layout({ darkMode, setDarkMode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header yuqorida turadi */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Sahifa mazmuni (Home, About va b.) shu yerda chiqadi */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer har doim pastda turadi */}
      <Footer />
    </div>
  );
}

export default Layout;