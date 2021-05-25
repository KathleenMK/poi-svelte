<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import ViewCategoryPoi from "../components/ViewCategoryPoi.svelte";
    import AnalyticsHeader from "../components/AnalyticsHeader.svelte";
    import CategoryList from "../components/CategoryList.svelte";

    title.set("Keep Calm and go to the Beach...");
    subTitle.set("Make updates...");

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
            <ViewCategoryPoi/>
        </div>
    </div>
</div>
