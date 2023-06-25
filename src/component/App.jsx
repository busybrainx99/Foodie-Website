import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import info from "../info";

function App() {
  return (
    <div>
      <Header />
      <div className="foodmain">
        {info.map((lovedMeals) => (
          <Content
            key={lovedMeals.no}
            name={lovedMeals.name}
            img={lovedMeals.imgURL}
            details={lovedMeals.about}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
