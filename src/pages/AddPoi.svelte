<script>
    import tramore1 from "/src/assets/tramore1.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import AddPoiForm from "../components/AddPoiForm.svelte";

    title.set("Keep Calm and go to the Beach ");
    subTitle.set("Add Something!");
    navBar.set({
        bar: mainBar
    });
</script>


<div class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="{tramore1}" uk-img>
    <h1>Add New Beach details...</h1>
</div>
<div class="uk-container uk-margin">
    <div class="uk-child-width-2-3 uk-flex-center uk-flex-middle uk-text-center" uk-grid>
       <AddPoiForm />
    </div>
</div>