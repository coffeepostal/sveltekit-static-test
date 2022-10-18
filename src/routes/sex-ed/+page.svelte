<script>
    import { onMount } from "svelte";
    import YouTube from "$lib/components/YouTube.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import ResourceLink from "$lib/components/ResourceLink.svelte";
    import FaqItem from "$lib/components/FaqItem.svelte";

    // // Cookie Functions
    // // @ts-ignore
    // function getCookie(cookieName) {
    //     var cookieArr = document.cookie.split(";");
    //     for (var i = 0; i < cookieArr.length; i++) {
    //         var cookiePair = cookieArr[i].split("=");
    //         if (cookieName == cookiePair[0].trim()) {
    //             return decodeURIComponent(cookiePair[1]);
    //         }
    //     }
    //     return null;
    // }

    // let showModal = false;

    // onMount(async () => {

    //     let liabilityCheck = cookies.getCookie("liabilityCheck");

    //     // Check to see if liability waiver has been waived
    //     if (liabilityCheck !== null) {
    //         showModal = false;
    //     } else {
    //         showModal = true;
    //     }
    // });
</script>

<h1>Sex Ed</h1>

<YouTube
    id={"last-week-tonight"}
    url={"https://www.youtube.com/embed/L0jQz6jqQS0?start=1046"}
/>

<section id="table-of-contents">
    <h5>Jump to Content:</h5>
    <ul>
        <li><a href="#resources">Local Resources</a></li>
        <!-- <li><a href="#education">Education</a></li> -->
        <li><a href="#faq">FAQ</a></li>
    </ul>
</section>
<section id="resources">
    <h2>Local Resources</h2>

    <ResourceLink
        id={"planned-parenthood"}
        title={"Planned Parenthood"}
        links={[
            {
                url: "https://www.plannedparenthood.org/health-center/washington/mount-vernon/98274/mount-vernon-health-center-2843-91780",
                text: "Mt. Vernon Website",
            },
            {
                url: "https://www.plannedparenthood.org/planned-parenthood-mt-baker",
                text: "Mt. Baker (Bellingham) Website",
            },
        ]}
        description={`Local reproductive health care, including: abortion, birth control, HIV services, men's health care, Morning-After pill (emergency contraception), pregnancy testing & services, primary care, STD testing, treatment & vaccines, and women's health care.`}
    />

    <ResourceLink
        id={`pflag-skagit`}
        title={`PFLAG Skagit`}
        links={[
            {
                url: `https://www.pflagskagit.org/`,
                text: `PFLAG Skagit Website`,
            },
        ]}
        description={`Resources for parents, families, friends, and members of the LGBTQIA+ community.`}
    />
    <ResourceLink
        id={`anacortes-pride`}
        title={`Anacortes Pride`}
        links={[
            {
                url: `https://www.anacortespride.org`,
                text: `Anacortes Pride Website`,
            },
        ]}
        description={`Celebrating and bringing together the Anacortes LGBTQIA+ community. Bringing awareness to the need for diversity and inclusion in all forms, in support of liberation for all. <i>&mdash;Adapted from anacortespride.org</i>`}
    />
</section>
<!-- <section id="education">
    <h2>Education</h2>

    <h4>For Teens</h4>
    <a
        href="https://www.plannedparenthood.org/learn/teens"
        target="_blank"
        class="button block">Planned Parenthood</a
    >
</section> -->
<section id="faq">
    <h2>F.A.Q.</h2>
    <FaqItem
        id={`birth-control-condom`}
        question={`If I'm on birth control, do I still need to use condoms?`}
        answer={`It depends, but probably. No birth control is 100% effective, and multiple forms of birth control will provide better odds of preventing a pregnancy. Additionally, many other forms of birth control do not protect against STIs, condoms are one of the best ways to protect yourself from an STI.`}
    />
    <!-- <dl>
        <dt>If I'm on birth control, do I still need to use condoms?</dt>
        <dd>
            It depends, but probably. No birth control is 100% effective, and
            multiple forms of birth control will provide better odds of
            preventing a pregnancy. Additionally, many other forms of birth
            control do not protect against STIs, condoms are one of the best
            ways to protect yourself from an STI.
        </dd>
    </dl> -->
</section>

<style lang="scss">
</style>
