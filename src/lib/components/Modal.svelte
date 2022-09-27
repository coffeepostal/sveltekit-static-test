<script>
    import { fade } from "svelte/transition";
    import "$lib/scss/_variables.scss";
    import * as cookies from "$lib/js/cookies.js";

    const createCookie = () => {
        cookies.setCookie("liabilityCheck", "true", 365);
        show = false;
    };

    export let show = true;

    export let id = "modal";
    export let title = "";
    export let text = "";
    export let buttonText = "Close";
</script>

{#if show}
    <!-- Modal.svelte -->
    <div {id} class="modal" transition:fade>
        <div class="modal-content">
            <h2>{title}</h2>

            <!-- prettier-ignore -->
            {@html text}
            <button id="waiver-button" class="center" on:click={createCookie}>
                {buttonText}
            </button>
        </div>
    </div>
{/if}

<style lang="scss">
    .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba($color-white, 0.75);
        z-index: 99999;
        justify-content: center;
        align-items: center;

        display: flex;

        .modal-content {
            width: 80vw;
            height: auto;
            background-color: $color-white;
            border: 0.125rem solid $color-primary;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 1rem 1rem rgba($color-black, 0.65);
            p {
                font-family: $font-body;
                font-weight: 400;
                font-size: 1rem;
                letter-spacing: 0.5px;
                margin: 1rem 0;
                line-height: 1.75;

                &.subtitle-1 {
                    font-weight: 600;
                    letter-spacing: 0.15px;
                }
                &.subtitle-2 {
                    font-weight: 500;
                    font-size: 0.875rem;
                    letter-spacing: 0.1px;
                }
                .parenthetical {
                    font-weight: 300;
                    font-style: italic;
                    color: $color-primary;
                }
            }
        }
    }
</style>
