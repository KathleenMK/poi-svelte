<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import tramore2 from "/src/assets/tramore2.jpg";
    import {getContext} from "svelte";

    const poiService = getContext("PoiService");

    title.set("Keep Calm and go to the Beach");
    subTitle.set("Login or sign up...");

    navBar.set({
        bar: welcomeBar
    });
    poiService.logout();
</script>

<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="{tramore2}" uk-img>
    <h1>BEACHES</h1>
    <h2>and where to find them</h2>
</div>