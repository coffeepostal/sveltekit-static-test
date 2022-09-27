<script>
    import "$lib/scss/style.scss";
    import Header from "$lib/components/Header.svelte";
</script>

<Header />

<main>
    <slot />
</main>

<footer>Hello, I'm the footer.</footer>
