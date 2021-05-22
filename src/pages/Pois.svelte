<script>
    import PoiList from "../components/PoiList.svelte";
    import CategoryList from "../components/CategoryList.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import AnalyticsHeader from "../components/AnalyticsHeader.svelte";


    title.set("Keep Calm and go to the Beach ");
    subTitle.set("So far...");
    navBar.set({
        bar: mainBar
    });
</script>

<div>
    <AnalyticsHeader/>
</div>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-auto@m">
        <div class="uk-card uk-card-default uk-card-body"><CategoryList/></div>
    </div>
    <div class="uk-width-expand@m">
        <div class="uk-card uk-card-default uk-card-body">
        <PoiList/>
        </div>
    </div>
</div>