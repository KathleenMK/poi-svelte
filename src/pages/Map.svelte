<script>
    import 'leaflet/dist/leaflet.css';
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    const poiService = getContext("PoiService");

    let poiList = [];
    //the geographical centre on Ireland
    let latitude = 53.5004;
    let longitude = -7.9996;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: latitude, lng: longitude},
            zoom: 7,
            minZoom: 5,
        };
        map = new LeafletMap("donation-map", mapConfig, 'Terrain');
        map.addLayerGroup('Beaches');
        map.showZoomControl();
        map.showLayerControl();
        poiList = await poiService.getPois();
        poiList.forEach(poi=>{
            const poiStr = `${poi.name} added by ${poi.contributor.firstName}`;
            if (poi.name) {
                map.addMarker({lat: poi.latitude, lng: poi.longitude}, poiStr, 'Beaches');
            }
        });
    });


    title.set("Keep Calm and go to the Beach ");
    subTitle.set("Find your way...");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
        <div id="donation-map" class="ui embed" style="height:800px"></div>
    </div>
</div>