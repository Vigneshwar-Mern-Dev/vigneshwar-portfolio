import { ArrowUpRight } from "@/components/ui/icons";
import { personal } from "@/data/personal";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="page-shell contact-inner">
        <p className="contact-kicker"><span /> Open to the right opportunity</p>
        <h2 id="contact-heading">Let’s build something <em>valuable.</em></h2>
        <p>I’m currently open to full-stack, React, Next.js and MERN development opportunities.</p>
        <div className="contact-actions">
          <a className="button button-light" href={`mailto:${personal.email}`}>Send email <ArrowUpRight /></a>
          <a className="button button-secondary" href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a className="button button-secondary" href={personal.resumeUrl} download>Download resume <ArrowUpRight /></a>
        </div>
        <a className="contact-email" href={`mailto:${personal.email}`}>{personal.email}</a>
      </div>
    </section>
  );
}
