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
       poi: {name:"",
            description: "",
            descshort: "",
            latitude: "",
            longitude: "",
            category: {},
            contributor:{},},
        weather: {
            temperature: "",
            feelsLike: "",
            clouds: "",
            windSpeed: "",
            windDirection: "",
            visibility: "",
            humidity: ""
        }
    };
    let category = {};
    let contributor = {};
    let name = "";
    let description = "";
    let descshort = "";
    let latitude = "";
    let longitude = "";
    let clouds = "";
    let temperature = "";
    let feelsLike = "";
    let windSpeed = "";
    let humidity = "";
    let categoryList = [];
    let selectedCategory = 0;
    let poiReviews = [];
    let reviewtext;
    let reviewrating;

    const poiService = getContext("PoiService");

    onMount(async () => {
        poiView = await poiService.getOnePoi($poi.id);
        name = poiView.poi.name;
        description = poiView.poi.description;
        descshort = poiView.poi.descshort;
        latitude = poiView.poi.latitude;
        longitude = poiView.poi.longitude;
        category = poiView.poi.category;
        contributor = poiView.poi.contributor;
        clouds = poiView.weather.clouds;
        temperature = poiView.weather.temperature;
        feelsLike = poiView.weather.feelsLike;
        windSpeed = poiView.weather.windSpeed;
        humidity = poiView.weather.humidity;
        //console.log(poiView);
        categoryList = await poiService.getCategories();
        //onsole.log(categoryList);
        poiReviews = await poiService.getReviewsPoi($poi.id);
        //console.log(poiReviews);
    });

    async function save() {
        console.log(name, descshort, description, latitude, longitude, $poi.id)
        let success = await poiService.updatePoi(name, descshort, description, latitude, longitude, $poi.id, categoryList[selectedCategory])
        if (success) {
            message = "Settings updated";
            //await push("/pois");
        } else {
            message = "Error Trying to save settings";
        }
    }

    async function addReview() {
        if (reviewrating < 0 || reviewrating > 10) {
            message = "rating can only be from 0 to 10, review not added";
        } else {
            let success = await poiService.addReview(reviewtext, reviewrating, $poi.id)
            if (success) {
                message = "review added";
                poiReviews = await poiService.getReviewsPoi($poi.id);
                reviewtext = "";
                reviewrating = "";
            } else {
                message = "error trying to add review";
            }
        }
    }

</script>

<div class="uk-container uk-margin">
    <div class="uk-inline uk-width-1-1 uk-text-center" uk-grid>
        <h2>{name}</h2>
    </div>

    <div class="uk-text-center uk-flex-center uk-flex-middle" uk-grid>
        <div class="uk-width-2-3">
            <div class="uk-card uk-card-default uk-card-body"><img src="{poiView.poi.imageurl}"></div>
        </div>
        <div class="uk-width-1-3">
            <div class="uk-card uk-card-default uk-card-body">{description}</div>
        </div>
    </div>
    <div class="uk-text-left uk-flex-center uk-flex-top" uk-grid>
        <div class="uk-width-2-5">
            <div class="uk-card uk-card-small uk-card-default uk-card-body">
                   <h4>Current weather:</h4>
                    <p>Clouds: {clouds}</p>
                    <p>Temperature: {temperature} C</p>
                    <p>Feels like: {feelsLike} C</p>
                    <p>Wind Speed: {windSpeed}</p>
                    <p>Humidity: {humidity}%</p>
                </div>
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




<div class="uk-margin uk-width-3xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table uk-table-hover uk-table-divider">
       <thead>
        <th>
            Reviews
        </th>
        <th>Rating
        </th>
         <th>
            Added By
        </th>
       <th></th>
        </thead>
        <tbody class="uk-text-left">
        {#each poiReviews as review}
            <tr>
                <td class="uk-text-break">
                    {#if review.text}
                        {review.text}
                    {/if}
                </td>
                <td>
                    {#if review.rating}
                        {review.rating}
                    {/if}
                </td>
                <td>
                    {#if review.contributor}
                        {review.contributor.firstName}, {review.contributor.lastName}
                    {/if}
                </td>
                <td>
                    {#if review.date}
                        {review.date}
                    {/if}
                </td>
                </tr>
        {/each}
        </tbody>
    </table>
</div>
    </div>

<div class="uk-width@m uk-card uk-card-default uk-padding">
    <fieldset class="uk-fieldset">
        <legend class="uk-legend">Add your own review:</legend>
        <div class="uk-margin uk-width-2-3@m">
            <input bind:value={reviewtext} class="uk-input" type="text" placeholder="Add Review...">
        </div>
        <div class="uk-margin uk-width-1-6@m">
            <input bind:value={reviewrating} class="uk-input" type="number" placeholder="Rating out of 10...">
        </div>
    </fieldset>
    <button on:click={addReview(reviewtext, reviewrating)} class="uk-button uk-button-primary uk-button-large uk-width-1-6">Add Review</button>
    {#if message}
        <div class="uk-text-left uk-text-small">
            {message}
        </div>
    {/if}
</div>

    <div class="uk-width@m uk-card uk-card-default uk-padding">
<form on:submit|preventDefault={save}>
    <div class="uk-margin uk-text-left">
        <div class="uk-margin uk-width-1-2">
            <div class="uk-margin uk-text-centre">
            <legend class="uk-legend">Edit POI:</legend>
            </div>
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
    <div class="uk-margin uk-text-left">
        <div class="uk-form-label">Select Category </div>
        <div class="uk-form-controls ">
            {#each categoryList as category, i}
                <label>
                    <input bind:group={selectedCategory} value={i} class="uk-radio" type="radio" name="category" />
                    {category.name}
                </label>
                <br>
            {/each}
        </div>
    </div>
    <div class="uk-margin">
        <button class="uk-button uk-button-primary uk-button-large uk-width-1-2">Save Updates</button>
    </div>
    </form>
    </div>

</div>