<script>
    import {getContext, onMount} from 'svelte'
    import tramore1 from "/src/assets/tramore1.jpg";


    const poiService = getContext("PoiService");
    let poiList = [];
    let categoryList = [];
    let userList = [];
    let poiCount = 0;
    let userCount = 0;
    let categoryCount = 0;

    // getting the count of pois, categories and users for display
    onMount(async () => {
        poiList = await poiService.getPois();
        poiCount = poiList.length;
        categoryList = await poiService.getCategories();
        categoryCount = categoryList.length;
        userList = await poiService.getUsers();
        userCount = userList.length;
        console.log("in analytics header onMount");
    });

   </script>

<div class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src={tramore1} uk-img>
    <div class="uk-grid-column-large uk-grid-row-large uk-text-left" uk-grid>
        <div>
            <i class="fas fa-globe-europe fa-2x" style="color:white">We are:</i>
        </div>
        <div>
            <i class="fas fa-users fa-2x" style="color:white">{userCount} users</i>
        </div>
        <div>
            <i class="fas fa-umbrella-beach fa-2x" style="color:white">{poiCount} contributions</i>

        </div>
        <div>
            <i class="fas fa-layer-group fa-2x" style="color:white">{categoryCount} categories</i>
        </div>
    </div>
</div>