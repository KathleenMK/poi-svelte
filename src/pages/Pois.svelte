<script>
    import PoiList from "../components/PoiList.svelte";
    import tramore2 from "/src/assets/tramore2.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Keep Calm and go to the Beach");
    subTitle.set("So far...");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-2-3@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <PoiList/>
        </div>
    </div>
    <div class="uk-width-1-3@m">
        <img width="300" src="{tramore2}" alt="homer">
    </div>
</div>