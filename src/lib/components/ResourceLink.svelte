<script>
    export let id = "";
    export let title = "";
    export let links = [
        {
            url: "",
            text: "",
        },
    ];
    export let description = "";
</script>

<!-- YouTube.svelte -->
<article {id}>
    <h4>{title}</h4>

    {#each links as link}
        <a href={link.url} target="_blank" class="button block">{link.text}</a>
    {/each}

    {#if description}
        <p>{description}</p>
    {/if}
    <hr />
</article>

<style lang="scss">
    article {
    }
</style>
