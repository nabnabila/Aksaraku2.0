import "../App.css";
import "../style/FirstPage.css";
import UserComponent from "../components/UserComponent";

function firstpage() {
  return (
    <div className="pagecontainer">
      <h1 className="titlepage">Selamat Datang di</h1>
      <h2 className="title1page">AksaraKU</h2>

      <p className="note">
        Silahkan masuk atau daftar terlebih dahulu sebelum memulai pembelajaran
      </p>
      <div className="formcontainer">
        <UserComponent />
      </div>
    </div>
  );
}

export default firstpage;
