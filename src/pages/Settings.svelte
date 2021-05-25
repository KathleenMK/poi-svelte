<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import tramore1 from "/src/assets/tramore1.jpg";
    import SettingsForm from "../components/SettingsForm.svelte";

    title.set("Keep Calm and go to the Beach ");
    subTitle.set("Update your settings");

    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="{tramore1}" uk-img>
    <h1>Update your Details</h1>
</div>
<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-1-2@m"><SettingsForm /></div>
    </div>
</div>