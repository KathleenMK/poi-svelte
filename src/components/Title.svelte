<script>
    import tramore1 from "/src/assets/tramore1.jpg"
    import {title, subTitle, user} from "../stores.js"
</script>

<div class="uk-width-1-2@m  uk-card uk-card-default uk-padding-small uk-visible@m">
    <div class="uk-grid">
        <div class="uk-width-1-6@m">
            <a href="/">
                <div>
                   <i class="fas fa-map-signs fa-3x" style="color:rgb(31,192,166)" title="" pos="bottom" uk-tooltip></i>
                </div>
            </a>
        </div>
        <div class="uk-width-expand@m uk-text-left">
            <div class="title">
                {$title} {$user.firstName}
            </div>
            <div class="uk-text-muted uk-text-small">
                {$subTitle}
            </div>
        </div>
        <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
            <a target="_blank" href="https://beachawards.ie/blue-flag/sites/">
                <div>
                    <i class="fas fa-flag fa-3x" style="color:rgb(57,130,171)" title="Beach Awards" pos="bottom" uk-tooltip></i>
                </div>
            </a>
        </div>
    </div>
</div>