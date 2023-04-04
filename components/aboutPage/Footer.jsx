import {
  FaAppStoreIos,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16">
      <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
        <article className="flex items-start gap-x-2">
          <div className="rounded-full bg-gray-100 p-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/mdla__cache"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
          <div className="rounded-full bg-gray-100 p-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/_sachink"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
          <div className="rounded-full bg-gray-100 p-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/us/developer/mdla/id1642280000"
            >
              <FaAppStoreIos className="h-5 w-5" />
            </a>
          </div>
        </article>

        <article>
          <h4 className="font-medium">Company</h4>

          <div className="mt-8 flex flex-col space-y-4 text-sm">
            <span>
              <a href="https://mdla.xyz">Home</a>
            </span>
            <span>Manifesto</span>
            <span>
              <a href="mailto:careers@mdla.xyz">Careers</a>
            </span>
            <span>
              <a href="mailto:contact@mdla.xyz">Contact</a>
            </span>
          </div>
        </article>

        <article>
          <h4 className="font-medium">Products</h4>

          <div className="mt-8 flex flex-col space-y-4 text-sm">
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://apps.apple.com/us/app/runway-fashion-design-by-mdla/id1642279998"
              >
                MDLA Runway
              </a>
            </span>
            <span id="newyorkitlist.com">(REDACTED)</span>
            <span id="asaprocky.com">(REDACTED)</span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://times.endlessvmmer.com"
              >
                Endless Svmmer Times
              </a>
            </span>
          </div>
        </article>

        <article>
          <h4 className="font-medium">Solutions</h4>

          <div className="mt-8 flex flex-col space-y-4 text-sm">
            <span>Retail</span>
            <span>Media</span>
            <span>Education</span>
            <span>Developers</span>
          </div>
        </article>
      </div>

      <div className="mt-20 flex items-center justify-between text-sm text-gray-500">
        <span>© 2023 MDLA</span>

        <div className="flex items-center gap-x-4">
          <span>
            <a href="https://privacy.mdla.xyz">Privacy</a>
          </span>
          <span>
            <a href="https://terms.mdla.xyz">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
