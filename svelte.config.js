// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        scss: {
            prependData: `@import './src/lib/scss/style.scss';`,
        },
    }),

    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: "build",
            assets: "build",
            fallback: null,
            precompress: false,
        }),
        trailingSlash: 'always',
    },
};

export default config;
