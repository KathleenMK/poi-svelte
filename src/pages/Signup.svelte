<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import SignupForm from "../components/SignupForm.svelte"
    import tramore2 from "/src/assets/tramore2.jpg";

    title.set("Keep Calm and go to the beach...");
    subTitle.set("Please Sign up");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="{tramore2}" uk-img>
    <h1>Enter your details and sign up...</h1>
</div>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <SignupForm />
    </div>
</div>