import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <p>© {new Date().getFullYear()} Vigneshwar S</p>
        <p>Full-Stack Developer · {personal.location}</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
