import AppBar from "../components/AppBar";
import Categories from "../components/Categories";
import RecipesList from "../components/RecipesList";
import Hero from "../components/Hero";

function HomePage() {
    return (
      <div>
        <AppBar />
        <Hero />
        <Categories />
        <RecipesList />
       
      </div>
    );
  }
  
  export default HomePage;
  