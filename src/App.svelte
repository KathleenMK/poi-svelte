<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Categories from "./pages/Categories.svelte";
  import Pois from "./pages/Pois.svelte";
  import ViewPoi from "./pages/ViewPoi.svelte"
  import AddPoi from "./pages/AddPoi.svelte";
  import AddCategory from "./pages/AddCategory.svelte";
  import ViewCategory from "./pages/ViewCategory.svelte";
  import Settings from "./pages/Settings.svelte";
  import Signup from "./pages/Signup.svelte";
  import Admin from "./pages/Admin.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("PoiService", new PoiService("http://localhost:4000"));
  //setContext("PoiService", new PoiService("https://lit-hamlet-10675.herokuapp.com")); //needed cors support

  let routes = {
    "/" : Main,
    "/login": Login,
    "/categories": Categories,
    "/pois": Pois,
    "/viewpoi": ViewPoi,
    "/addpoi": AddPoi,
    "/categoryform": AddCategory,
    "/viewcategory": ViewCategory,
    "/settings": Settings,
    "/signup": Signup,
    "/logout": Main,
    "/admin": Admin
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes} />
</div>