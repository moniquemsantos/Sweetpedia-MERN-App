import AppBar from "../components/AppBar";
import Categories from "../components/Categories";
import RecipesList from "../components/RecipesList";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function HomePage() {
    return (
      <div>
        <AppBar />
        <Hero />
        <Categories />
        <RecipesList />
        <Footer />
       
      </div>
    );
  }
  
  export default HomePage;
  