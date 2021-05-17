<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Categories from "./pages/Categories.svelte";
  import Pois from "./pages/Pois.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("PoiService", new PoiService("http://localhost:4000"));
  //`https://lit-hamlet-10675.herokuapp.com/api/categories`; need cors support

  let routes = {
    "/" : Main,
    "/login": Login,
    "/categories": Categories,
    "/pois": Pois,
    "/logout": Main
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes} />
</div>