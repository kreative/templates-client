import Link from "next/link";
import Image from "next/image";

const navigation = {
  main: [
    { name: "For Obsidian", href: "/obsidian" },
    { name: "FAQs", href: "/faqs" },
    {
      name: "Contact us",
      href: "https://support.kreativeusa.com/templates#submit-issue",
    },
    { name: "Get help", href: "https://support.kreativeusa.com/templates" },
    { name: "Request template", href: "/request-template" },
    { name: "Become an author", href: "/become-an-author" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 mt-24">
      <div className="mx-auto max-w-7xl overflow-hidden pb-10 pt-12 px-6 sm:pb-12 lg:px-8">
        <div className="pb-10">
          <Link href="/obsidian">
            <svg
              width="271"
              height="40"
              viewBox="0 0 271 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block mx-auto"
            >
              <path
                d="M10.25 21.9486L18.0664 13.177V12.8066H11.429L5.31022 19.8428V3.17762L0 0V32.1687H5.31022V24.2451L11.615 32.1687H18.4731V31.7983L10.25 21.9486ZM19.1918 32.1687H24.5004V22.6153C24.5004 19.5039 26.2343 17.6897 28.9248 17.6897H30.769L32.1876 12.4693H29.4418C26.9719 12.4693 25.3437 13.9131 24.5004 15.6217H24.3539L23.9109 12.8066H19.1918V32.1687ZM40.6738 32.5012C45.9462 32.5012 49.0056 29.4292 49.5226 25.9474H44.0248C43.6938 26.8364 42.7717 27.8735 40.6707 27.8735C38.0904 27.8735 36.9477 26.2816 36.9099 24.0229H49.7764V21.9123C49.7764 16.6541 46.4585 12.4693 40.5603 12.4693C34.2918 12.4693 31.1221 17.023 31.1221 22.5034C31.1252 28.0579 34.5913 32.5012 40.6738 32.5012ZM36.9508 20.4275C37.0612 18.5755 38.1298 17.1317 40.5635 17.1317C42.8127 17.1317 43.8735 18.5755 43.9917 20.4275H36.9508ZM56.8835 32.5012C59.2793 32.5012 60.9816 31.6501 62.0439 30.4285H62.1921V31.9464L67.6851 32.1687V19.4298C67.6851 15.3947 64.5154 12.4693 59.243 12.4693C53.5687 12.4693 50.9475 16.3736 50.9475 20.0035L56.2561 19.2154C56.2561 18.0301 57.2885 17.0671 59.0586 17.0671C61.1597 17.0671 62.0077 18.1042 62.0077 19.4314V21.0249C61.2338 20.7648 59.3171 20.4685 57.878 20.4685C52.5694 20.4685 50.1357 22.8328 50.1357 26.4313C50.1357 29.8721 52.5363 32.5012 56.8835 32.5012ZM58.3209 28.0579C56.625 28.0579 55.7407 27.243 55.7407 26.1334C55.7407 25.0963 56.699 24.2814 58.5416 24.2814C59.7276 24.2627 60.9057 24.4769 62.0093 24.9118V25.0978C62.0077 26.6882 60.6443 28.0579 58.3209 28.0579ZM78.0093 32.5012C79.8156 32.5012 81.3193 32.1687 81.9167 31.9464V27.2052H81.5478C80.9586 27.4259 80.3344 27.5386 79.7052 27.5378C78.0093 27.5378 77.2338 26.7607 77.2338 24.9465V17.6534H81.8426V12.8019H77.2338V6.14245H76.8665L71.8148 7.97557V12.8066H68.4228V17.6534H71.5563V26.3225C71.5563 29.8359 73.5486 32.5012 78.0093 32.5012ZM86.8076 10.8395C88.9828 10.8395 90.2374 9.57857 90.2374 7.50744C90.2374 5.47099 88.9765 4.21161 86.8076 4.21161C84.5599 4.21161 83.3794 5.47257 83.3794 7.50744C83.3794 9.58014 84.5599 10.8395 86.8076 10.8395V10.8395ZM83.9326 32.1687H89.6069V12.8019H83.9326V32.1687ZM96.9457 32.1687H104.209L110.255 13.177V12.8066H104.504L100.707 26.8049H100.558L96.651 12.8066H90.819V13.177L96.9457 32.1687ZM118.894 32.5012C124.165 32.5012 127.226 29.4292 127.741 25.9474H122.248C121.917 26.8364 120.995 27.8735 118.894 27.8735C116.312 27.8735 115.17 26.2816 115.133 24.0229H128V21.9123C128 16.6541 124.69 12.4693 118.784 12.4693C112.515 12.4693 109.346 17.023 109.346 22.5034C109.346 28.0579 112.81 32.5012 118.894 32.5012ZM115.17 20.4275C115.282 18.5755 116.35 17.1317 118.784 17.1317C121.032 17.1317 122.102 18.5755 122.212 20.4275H115.17Z"
                fill="#3D3D3E"
              />
              <path
                d="M137.6 0.799866V3.34444H135.04V33.4553H137.6V35.9999H131.2V35.5758V34.3035V0.799866H137.6Z"
                fill="#3D3D3E"
              />
              <path
                d="M264 36.0001V33.4555H266.56V3.34464H264V0.80006H270.4V1.22416V2.49644V36.0001H264Z"
                fill="#3D3D3E"
              />
              <path
                d="M149.023 12.0321V8.72007H142.573C144.205 8.24167 145.419 5.88647 145.419 3.20007H141.625C141.663 5.66567 140.638 8.09447 138.4 8.72007V12.0321H141.056V24.6177C141.056 29.9905 141.587 32.6401 146.671 32.6401H149.023V29.3281H147.354C145.078 29.3281 144.85 27.8561 144.85 24.6177V12.0321H149.023ZM156.822 8.35207C152.231 8.35207 150.182 11.0017 150.182 16.9265V24.4337C150.182 30.3585 152.231 33.0081 156.822 33.0081C161.413 33.0081 163.31 30.3585 163.31 24.4337V23.2561H159.516V24.9857C159.516 28.7761 158.643 29.6961 156.822 29.6961C155.001 29.6961 153.976 28.7761 153.976 24.9857V21.2321H163.31V16.9265C163.31 11.0017 161.413 8.35207 156.822 8.35207ZM159.516 16.3745V18.6561H153.976V16.3745C153.976 12.5841 155.001 11.6641 156.822 11.6641C158.605 11.6641 159.516 12.5841 159.516 16.3745ZM181.957 8.35207C179.567 8.35207 178.087 9.82407 177.252 11.6641C176.797 9.38247 175.659 8.35207 173.382 8.35207C170.954 8.35207 169.626 9.89767 169.019 11.4065V9.52007L165.225 8.72007V32.6401H169.019V15.4545C169.019 13.3201 169.892 11.6641 171.713 11.6641C173.306 11.6641 173.8 12.9521 173.8 15.2705V32.6401H177.594V15.8225V15.4545C177.594 13.3201 178.466 11.6641 180.288 11.6641C181.881 11.6641 182.374 12.9521 182.374 15.2705V32.6401H186.168V15.8225C186.168 10.6337 185.334 8.35207 181.957 8.35207ZM196.472 8.35207C193.778 8.35207 192.45 10.0817 191.843 11.4065V9.52007L188.049 8.72007V40.0001L191.843 39.2001V29.9537C192.45 31.2785 193.778 33.0081 196.472 33.0081C199.962 33.0081 201.176 30.7265 201.176 25.5377V15.8225C201.176 10.6337 199.962 8.35207 196.472 8.35207ZM197.382 26.0897C197.382 28.4081 196.699 29.6961 194.802 29.6961C192.715 29.6961 191.843 28.0401 191.843 25.9057V15.4545C191.843 13.3201 192.715 11.6641 194.802 11.6641C196.699 11.6641 197.382 12.9521 197.382 15.2705V26.0897ZM203.092 3.20007V32.6401H206.886V4.00007L203.092 3.20007ZM222.119 29.1441V15.4545C222.119 11.3697 220.677 8.35207 215.783 8.35207C210.775 8.35207 209.219 11.3697 209.219 15.8225V16.3745H213.013V15.4545C213.013 12.7681 213.962 11.6641 215.783 11.6641C217.452 11.6641 218.325 12.5841 218.325 14.6817C218.325 19.3185 208.612 18.6561 208.612 26.9729C208.612 31.0577 210.775 33.0081 213.62 33.0081C215.897 33.0081 217.414 32.0145 218.325 29.9537C218.325 30.6161 218.515 31.9041 219.084 32.6401H222.498C222.119 31.2049 222.119 30.4321 222.119 29.1441ZM218.325 27.0097C218.135 27.7089 217.149 29.6961 215.138 29.6961C213.203 29.6961 212.406 28.3345 212.406 26.4577C212.406 22.4465 217.338 21.4529 218.325 19.3921V27.0097ZM234.056 12.0321V8.72007H227.606C229.238 8.24167 230.452 5.88647 230.452 3.20007H226.658C226.696 5.66567 225.671 8.09447 223.433 8.72007V12.0321H226.089V24.6177C226.089 29.9905 226.62 32.6401 231.704 32.6401H234.056V29.3281H232.387C230.11 29.3281 229.883 27.8561 229.883 24.6177V12.0321H234.056ZM241.854 8.35207C237.264 8.35207 235.215 11.0017 235.215 16.9265V24.4337C235.215 30.3585 237.264 33.0081 241.854 33.0081C246.445 33.0081 248.342 30.3585 248.342 24.4337V23.2561H244.548V24.9857C244.548 28.7761 243.676 29.6961 241.854 29.6961C240.033 29.6961 239.009 28.7761 239.009 24.9857V21.2321H248.342V16.9265C248.342 11.0017 246.445 8.35207 241.854 8.35207ZM244.548 16.3745V18.6561H239.009V16.3745C239.009 12.5841 240.033 11.6641 241.854 11.6641C243.638 11.6641 244.548 12.5841 244.548 16.3745ZM258.268 19.0609C255.498 16.9633 254.056 16.3377 254.056 14.1665C254.056 12.5841 255.081 11.6641 256.522 11.6641C258.192 11.6641 259.216 12.4001 259.216 16.1905H263.01C263.01 11.2593 261.303 8.35207 256.522 8.35207C251.742 8.35207 250.262 11.3697 250.262 14.1665C250.262 18.0673 252.842 19.5761 255.005 21.1585C258.344 23.6241 259.406 24.6177 259.406 26.7153C259.406 28.5921 258.723 29.6961 256.902 29.6961C254.701 29.6961 253.867 28.5921 253.867 24.6177H250.073C250.073 30.5425 251.742 33.0081 256.902 33.0081C262.062 33.0081 263.2 29.8065 263.2 26.7153C263.2 22.9249 261.075 21.1953 258.268 19.0609Z"
                fill="#3D3D3E"
              />
            </svg>
          </Link>
        </div>
        <nav
          className="-mb-6 columns-2 lg:space-x-12 md:space-x-6 sm:flex sm:justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-md leading-6 text-gray-600 hover:text-gray-900"
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-gray-500">
          &copy;{" "}
          <Link
            href="https://kreativeusa.com"
            className="hover:underline underline-offset-2 hover:text-black"
            target={"_blank"}
          >
            2023 Kreative, LLC. All rights reserved.
          </Link>{" "}
          <Link
            href="https://kreativedreamflow.com"
            className="hover:underline underline-offset-2 hover:text-indigo-700"
            target={"_blank"}
          >
            Website made &hearts; with by Kreative Dreamflow.
          </Link>
        </p>
      </div>
    </footer>
  );
}
