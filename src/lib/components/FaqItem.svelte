<script>
    import { slide } from "svelte/transition";

    export let id = "";
    export let question = "";
    export let answer = "";
    let show = false;

    const toggleShow = () => {
        if (show == false) {
            show = true;
        } else {
            show = false;
        }
    };
</script>

<!-- FaqItem.svelte -->
<dl {id}>
    <dt><a href="" on:click|preventDefault={toggleShow}>{question}</a></dt>
    {#if show}
        <dd transition:slide>{answer}</dd>
    {/if}
</dl>

<style lang="scss">
    dl {
        border: 1px scale-color($color-black, $lightness: 70%) solid;
        padding: 1rem;

        dt,
        dd {
            margin-left: 2.75rem;

            &:before {
                font-family: $font-heading;
                position: absolute;
                font-size: 2rem;
                font-weight: 300;
                margin-left: -2.5rem;
            }
        }
        dt {
            display: flex;
            align-content: center;
            font-weight: 400;
            font-size: $font-h6-size;
            line-height: 2rem;
            &:before {
                content: "Q: ";
            }
        }
        dd {
            margin-top: 1rem;
            &:before {
                content: "A: ";
            }
        }
    }
</style>
