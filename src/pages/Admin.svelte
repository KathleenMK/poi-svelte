<script>
    import {navBar, adminBar, subTitle, title} from "../stores"
    import AnalyticsHeader from "../components/AnalyticsHeader.svelte";
    import UserAdmin from "../components/UserAdmin.svelte";
    import CategoryAdmin from "../components/CategoryAdmin.svelte";


    title.set("Keep Calm and go to the Beach ");
    subTitle.set("Our Users...");
    navBar.set({
        bar: adminBar
    });
</script>

<div>
    <AnalyticsHeader/>
</div>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-expand@m"><UserAdmin /></div>
    </div>
    <div class="uk-width-expand@m"><CategoryAdmin />></div>
</div>