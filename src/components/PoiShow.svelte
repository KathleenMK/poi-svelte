<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {user} from "../stores";
    import {poi} from "../stores";
    import {push} from "svelte-spa-router";

    let firstName = $user.firstName;
    let lastName = $user.lastName;
    let email = $user.email;
    let password = $user.password
    let message = "";
    console.log($user._id);
    let poiView = {
        name:"",
        description: "",
        descshort: "",
        latitude: "",
        longitude: "",
        category: {},
        contributor:{}
    };
    let category = {};
    let contributor = {};
    let name = "";
    let description = "";
    let descshort = "";
    let latitude = "";
    let longitude = "";

    const poiService = getContext("PoiService");

    onMount(async () => {
        poiView = await poiService.getOnePoi($poi.id);
        name = poiView.name;
        description = poiView.description;
        descshort = poiView.descshort;
        latitude = poiView.latitude;
        longitude = poiView.longitude;
        category = poiView.category;
        contributor = poiView.contributor;
        console.log(poiView);
    });

    //const poi = await poiService.getOnePoi($poi.id)
    //let name

    async function save() {
        console.log(name, descshort, description, latitude, longitude, $poi.id)
        let success = await poiService.updatePoi(name, descshort, description, latitude, longitude, $poi.id)
        if (success) {
            message = "Settings updated";
            //await push("/pois");
        } else {
            message = "Error Trying to save settings";
        }
    }
</script>

<div class="uk-container uk-margin">
    <div class="uk-inline uk-width-1-1 uk-text-center" uk-grid>
        <h2>{name}</h2>
    </div>
    <div class="uk-text-center uk-flex-center uk-flex-middle" uk-grid>
        <div class="uk-width-2-3">
            <div class="uk-card uk-card-default uk-card-body"><img src="{poiView.imageurl}"></div>
        </div>
        <div class="uk-width-1-3">
            <div class="uk-card uk-card-default uk-card-body">{description}</div>
        </div>
    </div>
    <div class="uk-text-left uk-flex-center uk-flex-top" uk-grid>
        <div class="uk-width-2-5">
            <div class="uk-card uk-card-small uk-card-default uk-card-body">{"weather"}</div>
        </div>

        <div class="uk-width-2-5">
            <div class="uk-card uk-card-small uk-card-default uk-card-body">
                <h4>Short Description:</h4>
                <p>{descshort}</p>
                <h5>Category: {category.name}</h5>
                <p></p>
                <h5>Added By: {contributor.firstName} {contributor.lastName}</h5>
            </div>
        </div>
        <div class="uk-width-1-5">
            <div class="uk-card uk-card-small uk-card-default uk-card-body">
                <h4>Latitude</h4>
                <p>{latitude}</p>
                <h4>Longitude</h4>
                <p>{longitude}</p>
            </div>
        </div>
    </div>
</div>

<form on:submit|preventDefault={save}>
    <div class="uk-margin uk-text-left">
        <div class="uk-margin">
            <label class="uk-form-label">Name</label>
            <div class="uk-inline uk-width-1-1">
               <input bind:value={name} class="uk-input uk-form-large" type="text" name="name">
            </div>
            <label class="uk-form-label">Short Description</label>
            <div class="uk-inline uk-width-1-1">
                <input bind:value={descshort} class="uk-input uk-form-large" type="text" name="descshort">
            </div>
            <label class="uk-form-label">Description</label>
            <div class="uk-inline uk-width-1-1">
                <input bind:value={description} class="uk-input uk-form-large" type="text" name="description">
            </div>
            <label class="uk-form-label">Latitude</label>
            <div class="uk-inline uk-width-1-1">
                <input bind:value={latitude} class="uk-input uk-form-large" type="number" step="any" name="latitude">
            </div>
            <label class="uk-form-label">Longitude</label>
            <div class="uk-inline uk-width-1-1">
                <input bind:value={longitude} class="uk-input uk-form-large" type="number" step="any" name="longitude">
            </div>
        </div>
    </div>
    <div class="uk-margin">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Save Updates</button>
    </div>
    {#if message}
        <div class="uk-text-left uk-text-small">
            {message}
        </div>
    {/if}
</form>




