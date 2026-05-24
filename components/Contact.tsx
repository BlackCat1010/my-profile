import { CONTACT } from "@/lib/constants";
import StyledLink from "@/components/StyledLink";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold">Contact</h2>
            <StyledLink href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
            </StyledLink>
        </section>
    );
}