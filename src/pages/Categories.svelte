<script>
    import CategoryList from "../components/CategoryList.svelte";
    import tramore1 from "/src/assets/tramore1.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Keep Calm and go to the Beach");
    subTitle.set("All Categories");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{tramore1}" alt="homer">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <CategoryList/>
        </div>
    </div>
</div>