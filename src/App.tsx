import "./App.css";
import FAQs from "./FAQs";
import Footer from "./Footer";

function App() {
  return (
    <div id="background" style={{ padding: 20 }}>
      <div style={{ maxWidth: 600, margin: "40px auto" }}>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 40 }}
        >
          <img
            style={{ maxWidth: 80, maxHeight: 80, marginRight: 20 }}
            src={"/assets/satrabrunndao_logo.png"}
            alt="Sätra Brunn DAO logo"
          />
          <h1>Sätra Brunn DAO</h1>
        </div>

        <div>
          <p>
            Sätra Brunn is a 144 acre wellness destination in the suburbs of
            Stockholm, Sweden, renowned for its healing spring water and
            picturesque scenery.
          </p>
          <p>
            Sätra Brunn DAO plans to buy Sätra Brunn at auction to establish the
            first-ever real world <b>DAO-governed municipality</b>.
          </p>
        </div>

        <div id="faq" style={{ marginTop: 80, marginBottom: 80 }}>
          <h2>FAQ</h2>
          <FAQs />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
