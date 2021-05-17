<script>
  import { setContext } from "svelte";
  import {PoiService} from "./services/poi-service";
  import Categories from "./pages/Categories.svelte"
  import Pois from "./pages/Pois.svelte"

  setContext("PoiService", new PoiService("http://localhost:4000"));
  //`https://lit-hamlet-10675.herokuapp.com/api/categories`; need cors support
</script>

<div class="uk-container">
  <h1> Beaches Client Application </h1>
  <Categories/>
  <Pois/>
</div>