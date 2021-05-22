<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import PoiShow from "../components/PoiShow.svelte";
    import PoiUpdate from "../components/PoiUpdate.svelte";

    title.set("Keep Calm and go to the Beach...");
    subTitle.set("Make updates...");

    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <PoiShow />
    <PoiUpdate />
</div>
