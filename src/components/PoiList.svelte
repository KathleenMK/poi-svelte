<script>
    import {getContext, onMount} from 'svelte'

    const poiService = getContext("PoiService");
    let poiList = [];
    let id = "";
    let errorMessage = "";


    onMount(async () => {
        poiList = await poiService.getPois();
    });

    async function deleteHandler(id) {
        const success = await poiService.deletePoi(id)
        if (success) {
            poiList = await poiService.getPois();   //refreshes the poi list showing only those still remaining

        } else {
            errorMessage = "Deletion of POI not completed - some error occurred";
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
            Description
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
                <td>
                    {poi.name}
                </td>
                <td>
                    {poi.description}
                </td>
                <td>
                    {poi.category.name}
                </td>
                <td>
                    {poi.contributor.firstName}, {poi.contributor.lastName}
                </td>
                <td>
                    {poi._id}
                    <button on:click={deleteHandler(poi._id)} class="fas fa-trash-alt" style="color:red" title="delete"></button>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>