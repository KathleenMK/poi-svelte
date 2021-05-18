<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import SignupForm from "../components/SignupForm.svelte"
    import tramore1 from "/src/assets/tramore1.jpg";

    title.set("Keep Calm and go to the beach...");
    subTitle.set("Please Sign up");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-2-3@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <h3 class="uk-card-title uk-text-center">Welcome!</h3>
            <SignupForm />
        </div>
    </div>
    <div class="uk-width-1-3@m ">
        <img width="300" src="{tramore1}" alt="tramore1">
    </div>
</div>