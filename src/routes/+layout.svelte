<script>
    import "$lib/scss/style.scss";
    import "$lib/scss/_variables.scss";
    import { slide } from "svelte/transition";
    import { quintInOut } from "svelte/easing";

    let navOpen = false;
    let navVisible = false;

    const toggleNav = () => {
        if (navOpen == false) {
            navOpen = true;
        } else {
            navOpen = false;
        }
    };
</script>

<header>
    {#if navOpen}
        <nav
            id="main-nav"
            class="main-nav"
            transition:slide={{ duration: 1250, easing: quintInOut }}
        >
            <div
                id="main-nav-block"
                class="main-nav-block"
                class:open={navOpen === true}
            >
                <a class="nav-item" href="/" on:click={toggleNav}>Home</a>
                <a class="nav-item" href="sex-ed/" on:click={toggleNav}
                    >Sex Ed</a
                >
                <!-- <a class="nav-item" href="#" on:click={toggleNav}>Item 2</a>
                <a class="nav-item" href="#" on:click={toggleNav}>Item 3</a> -->
            </div>
        </nav>
    {/if}
    <div id="header-bar" class="header-bar">
        <div />
        <div class="logo"><a href="/">98221.org</a></div>
        <div id="menu-launcher" class="menu-launcher" on:click={toggleNav}>
            <div id="menu-hamburger" class:open={navOpen === true}>
                <span />
                <span />
                <span />
                <span />
            </div>
        </div>
    </div>
</header>

<main>
    <slot />
</main>

<!--
<footer>
    <h3>Our General Philosophy</h3>
    <p>We generally want people to be well informed.</p>
</footer> -->
<style lang="scss">
    header {
        position: fixed;
        width: 100%;
        z-index: 1;

        nav {
            &.main-nav {
                position: sticky;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: scale-color($color-black, $lightness: 15%);
                height: 90vh;

                transition: height 0.5s ease-in-out;

                &.navOpen {
                    display: flex;
                }

                &.open {
                    height: 90vh;
                }

                .main-nav-block {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;

                    transition: opacity 0.5s linear;

                    &.open {
                        opacity: 1;
                    }
                    a.nav-item {
                        font-size: 3rem;
                        font-weight: 300;
                        margin: 1rem;
                        text-transform: uppercase;
                        &:hover {
                        }
                    }
                }
            }
        }

        .header-bar {
            display: grid;
            grid-template-columns: 2.75rem auto 2.75rem;
            grid-gap: 1rem;
            align-items: center;

            height: 10vh;

            background-color: $color-black;
            color: $color-white;
            padding: 0 1rem;

            .logo {
                color: $color-primary;
                font-weight: 300;
                font-size: 3rem;
                text-align: center;
            }
            .menu-launcher {
                #menu-hamburger {
                    width: 2.75rem;
                    height: 2.5rem;
                    position: relative;
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    -webkit-transition: 0.5s ease-in-out;
                    -moz-transition: 0.5s ease-in-out;
                    -o-transition: 0.5s ease-in-out;
                    transition: 0.5s ease-in-out;
                    cursor: pointer;

                    &:hover {
                        span {
                            background: scale-color(
                                $color-primary,
                                $lightness: -10%
                            );
                        }
                    }

                    span {
                        display: block;
                        position: absolute;
                        height: 0.25rem;
                        width: 100%;
                        background: $color-primary;
                        border-radius: 0.5rem;
                        opacity: 1;
                        left: 0;
                        transform: rotate(0deg);
                        transition: 0.25s ease-in-out;

                        &:nth-child(1) {
                            top: 0px;
                        }
                        &:nth-child(2),
                        &:nth-child(3) {
                            top: 1rem;
                        }

                        &:nth-child(4) {
                            top: 2rem;
                        }
                    }

                    &.open {
                        span {
                            &:nth-child(1) {
                                top: 1rem;
                                width: 0%;
                                left: 50%;
                            }
                            &:nth-child(2) {
                                -webkit-transform: rotate(45deg);
                                -moz-transform: rotate(45deg);
                                -o-transform: rotate(45deg);
                                transform: rotate(45deg);
                            }
                            &:nth-child(3) {
                                -webkit-transform: rotate(-45deg);
                                -moz-transform: rotate(-45deg);
                                -o-transform: rotate(-45deg);
                                transform: rotate(-45deg);
                            }

                            &:nth-child(4) {
                                top: 1rem;
                                width: 0%;
                                left: 50%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
