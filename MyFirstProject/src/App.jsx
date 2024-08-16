import "./App.css";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";

// import Divid from "./Component/Divid";
// import Multiply from "./Component/multiply";
// import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Pages/Home";
// import Sum from "./Component/sum";

// import Sidebar from "./Sidebar";
function App() {
  return (
    <>
      {/* <Sum a={2} b={3} />
      <Divid a={8} b={2} />
      <Multiply a={8} b={2} /> */}

      <Header />
      <Home />
      <ContactUs />
      <Footer />
      {/* 
      <div className="connection">
      
        <Sidebar />
      </div>
     
      */}
    </>
  );
}

export default App;
