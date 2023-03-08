import Link from "next/link";

function Footer() {
  return (
    <section>
      <div className="footer-section flex-row-footer">
        <div>
          <h4>© {new Date().getFullYear()}</h4>
        </div>
        <div className="flex-row-footer flex-row">
          <div>
            <h4>
              <Link href="/impressum">Impressum</Link>{" "}
            </h4>
          </div>
          <div>
            <h4>
              <Link href="/Datenschutzerklaerung">Datenschutzerklärung</Link>
            </h4>
          </div>
        </div>
        <div>
          <h4>All rights reserved.</h4>
        </div>
      </div>
    </section>
  );
}

export default Footer;
