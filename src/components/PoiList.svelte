<script>
    import {getContext, onMount} from 'svelte'
    import {push} from "svelte-spa-router";

    const poiService = getContext("PoiService");
    let poiList = [];
    let id = "";
    let errorMessage = "";
    let poi = "";


    onMount(async () => {
        poiList = await poiService.getPois();
        console.log("in poi list onMount");
    });

    async function deleteHandler(id) {
        const success = await poiService.deletePoi(id)
        if (success) {
            poiList = await poiService.getPois();   //refreshes the poi list showing only those still remaining

        } else {
            errorMessage = "Deletion of POI not completed - some error occurred";
        }
    }

    async function showPoi(id) {
        poi = await poiService.getOnePoi(id)
        if (poi) {
            await push("/viewpoi");
            //return poi;

        } else {
            errorMessage = "POI not completed - some error occurred";
        }
    }

</script>

<h3 class="uk-heading-divider">
    Beaches List </h3>
<div class="uk-table uk-table-divider">
    <table class="uk-table">
        <thead>
        <th>
            Name
        </th>
        <th>
            Intro
        </th>
        <th>
            Category
        </th>
        <th>
            Added By
        </th>
        </thead>
        <tbody class="uk-text-left">
        {#each poiList as poi}
            <tr>
                <td><a on:click={showPoi(poi._id)}>
                    {poi.name}
                </a></td>
                <td><a on:click={showPoi(poi._id)}>
                    {poi.descshort}
                </a></td>
                <td>
                    {poi.category.name}
                </td>
                <td>
                    {poi.contributor.firstName}, {poi.contributor.lastName}
                </td>
                <td>
                   <button on:click={deleteHandler(poi._id)} class="fas fa-trash-alt" style="color:red" title="delete"></button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>