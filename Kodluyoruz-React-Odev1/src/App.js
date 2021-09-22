import getData from "./lib/service";

getData(1);

export default function App() {
  return (
    <div className="App">
      <div>
        Konsolda{" "}
        <code style={{ fontWeight: "bold", fontSize: "1.1rem" }}>getData</code>{" "}
        fonksiyonu ile çağırılan kullanıcının verileri görülmektedir.
        <br /> <br />
        Önce axios ile kullanıcı verileri çekilmiştir.
        <br /> <br />
        Sonrasında postlar axios ile çekilmiştir.
        <br /> <br /> Postlar kullanıcı id'sine göre filtrelendikten sonra
        veriler birleştirilip loglanmıştır.
      </div>
    </div>
  );
}
