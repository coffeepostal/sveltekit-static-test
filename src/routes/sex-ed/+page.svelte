<script>
    import { onMount } from "svelte";
    import YouTube from "$lib/components/YouTube.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import ResourceLink from "$lib/components/ResourceLink.svelte";
    import FaqItem from "$lib/components/FaqItem.svelte";
    import * as cookies from "$lib/js/cookies.js";

    let showModal = false;

    onMount(async () => {
        let liabilityCheck = cookies.getCookie("liabilityCheck");

        // Check to see if liability waiver has been waived
        if (liabilityCheck !== null) {
            showModal = false;
        } else {
            showModal = true;
        }
    });
</script>

{#if showModal}
    <Modal
        id={"modal-liability"}
        title={"Liability Waiver"}
        text={`<p>98221.org cannot and does not contain medical/health advice. <span class="parenthetical">Though some of the links do, and we believe in good medical science.</span> The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with a the appropriate professionals. <span class="parenthetical">Medical physicians who are sex-positive, LGBTQIA+ friendly, trans-friendly, areligious, and private can be found the links on this page, though, again, we are providing NO advice.</span>  We do not provide any kind of medical/heath advice. <span class="parenthetical">&#10229; See, NO advice.</span>  THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK. <span class="parenthetical">Though, we're very happy you're here and hope you find the resources you are looking for.</span></p>`}
        buttonText={"I Accept Responsibility"}
        bind:show={showModal}
    />
{/if}

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
