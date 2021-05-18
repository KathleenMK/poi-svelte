<script>
    import tramore1 from "/src/assets/tramore1.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import AddPoiForm from "../components/AddPoiForm.svelte";

    title.set("Keep Calm and gp tp the Beach");
    subTitle.set("Add Something!");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <img width="300" src="{tramore1}" alt="homer">
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <AddPoiForm/>
        </div>
    </div>
</div>