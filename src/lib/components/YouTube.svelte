<script>
    export let id = "video";
    export let url = "";
</script>

<!-- YouTube.svelte -->
<article {id}>
    <div class="video-container">
        <iframe
            width="560"
            height="315"
            src={url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </div>
</article>

<style lang="scss">
    .video-container {
        position: relative;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>
