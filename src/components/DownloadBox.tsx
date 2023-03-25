import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  EnvelopeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import DownloadButton from "./DownloadButton";

interface IDownloadBoxProps {
  templateId: string;
  ip: string;
  fileUrl: string;
  fileName: string;
}

interface IDownload {
  templateId: string;
  email: string;
  ipAddress: string;
  userAgent: string;
  sendNewsletter: boolean;
}

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const DownloadBox: React.FC<IDownloadBoxProps> = (
  props: IDownloadBoxProps
): JSX.Element => {
  const [label, setLabel] = useState("Start using this template");
  const [formStyles, setFormStyles] = useState("block");
  const [btnStyles, setBtnStyles] = useState("hidden");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("Default alert for testing");
  const [showAlert, setShowAlert] = useState(false);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      document.getElementById("create-download-btn")?.click();
    }
  };

  const downloadMutation = useMutation({
    mutationFn: async (download: IDownload) => {
      const res = await fetch("https://api.kreativetemplates.co/v1/downloads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateId: props.templateId,
          emailAddress: download.email,
          ipAddress: download.ipAddress,
          userAgent: download.userAgent,
          sendNewsletter: download.sendNewsletter,
        }),
      });
      return res.json();
    },
    onError: (error) => {
      setAlert("Uh oh. Something's wrong, please try again soon!");
      setShowAlert(true);
    },
    onSuccess: (data) => {
      setLabel("Template sent to your inbox. Or Download now!");
      setFormStyles("hidden");
      setBtnStyles("block");
    },
  });

  const postDownload = async (event: any) => {
    event.preventDefault();

    if (!email || email === "") {
      setAlert("Email address is empty.");
      setShowAlert(true);
      return;
    }

    if (!validateEmail(email)) {
      setAlert("Please enter a valid email address.");
      setShowAlert(true);
      return;
    }

    const userAgent = navigator.userAgent;

    const download: IDownload = {
      sendNewsletter: true,
      templateId: props.templateId,
      email: email,
      ipAddress: props.ip,
      userAgent,
    };

    console.log(download);

    await downloadMutation.mutateAsync(download);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div
        id="alert-box"
        className={
          "border-l-4 border-red-400 bg-red-50 px-4 py-3 mb-4 " +
          (showAlert ? "block" : "hidden")
        }
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="h-5 w-5 text-red-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{alert}</p>
          </div>
        </div>
      </div>
      <p className="text-gray-800 text-xs pb-1 uppercase">{label}</p>
      <div className={formStyles}>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <EnvelopeIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => {
              setShowAlert(false);
              setEmail(e.target.value);
            }}
            onKeyUp={handleKeyPress}
          />
        </div>
        <button
          type="button"
          id="create-download-btn"
          onClick={(e) => postDownload(e)}
          className="w-full mt-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {downloadMutation.isLoading ? (
            <div className="flex align-middle justify-center" role="status">
              <svg
                aria-hidden="true"
                className={`w-5 h-5 mr-2 text-gray-200 animate-spin dark:white fill-indigo-600`}
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              Downloading...
            </div>
          ) : (
            "Download free template"
          )}
        </button>
        <div className="flex justify-center items-center pt-3">
          <span className="text-sm mr-1">powered by</span>
          <svg
            width="88"
            height="18"
            viewBox="0 0 88 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.59629 9.84213L8.10129 5.90881V5.74271H5.12497L2.38119 8.89785V1.4249L0 0V14.425H2.38119V10.8719L5.20837 14.425H8.28364V14.2589L4.59629 9.84213ZM8.60594 14.425H10.9864V10.1411C10.9864 8.74589 11.7639 7.93236 12.9704 7.93236H13.7973L14.4335 5.59146H13.2022C12.0947 5.59146 11.3646 6.23888 10.9864 7.00505H10.9207L10.7221 5.74271H8.60594V14.425ZM18.2389 14.5741C20.6031 14.5741 21.975 13.1966 22.2068 11.6353H19.7415C19.5931 12.0339 19.1796 12.499 18.2374 12.499C17.0804 12.499 16.568 11.7851 16.551 10.7723H22.3206V9.82587C22.3206 7.468 20.8328 5.59146 18.188 5.59146C15.377 5.59146 13.9557 7.63339 13.9557 10.0909C13.9571 12.5817 15.5113 14.5741 18.2389 14.5741ZM16.5694 9.16007C16.6189 8.32958 17.0981 7.68216 18.1894 7.68216C19.198 7.68216 19.6736 8.32958 19.7267 9.16007H16.5694ZM25.5075 14.5741C26.5819 14.5741 27.3452 14.1925 27.8216 13.6447H27.888V14.3253L30.3512 14.425V8.71266C30.3512 6.90327 28.9298 5.59146 26.5656 5.59146C24.0211 5.59146 22.8457 7.34219 22.8457 8.96994L25.2262 8.61654C25.2262 8.08503 25.6892 7.65318 26.4829 7.65318C27.4251 7.65318 27.8053 8.11825 27.8053 8.71337V9.42794C27.4583 9.31132 26.5988 9.17845 25.9535 9.17845C23.573 9.17845 22.4817 10.2386 22.4817 11.8523C22.4817 13.3952 23.5582 14.5741 25.5075 14.5741ZM26.1521 12.5817C25.3916 12.5817 24.9951 12.2163 24.9951 11.7187C24.9951 11.2536 25.4248 10.8882 26.2511 10.8882C26.7829 10.8798 27.3112 10.9759 27.806 11.1709V11.2543C27.8053 11.9675 27.1939 12.5817 26.1521 12.5817ZM34.9807 14.5741C35.7907 14.5741 36.465 14.425 36.7329 14.3253V12.1993H36.5675C36.3033 12.2983 36.0234 12.3488 35.7412 12.3484C34.9807 12.3484 34.633 12 34.633 11.1864V7.91611H36.6996V5.74059H34.633V2.75438H34.4683L32.203 3.57638V5.74271H30.682V7.91611H32.0871V11.8035C32.0871 13.3789 32.9805 14.5741 34.9807 14.5741ZM38.926 4.86063C39.9014 4.86063 40.464 4.2952 40.464 3.36647C40.464 2.45329 39.8986 1.88856 38.926 1.88856C37.9182 1.88856 37.3888 2.45399 37.3888 3.36647C37.3888 4.2959 37.9182 4.86063 38.926 4.86063V4.86063ZM37.6368 14.425H40.1813V5.74059H37.6368V14.425ZM43.4721 14.425H46.7291L49.4403 5.90881V5.74271H46.8612L45.1586 12.0198H45.0921L43.34 5.74271H40.7248V5.90881L43.4721 14.425ZM53.3143 14.5741C55.6778 14.5741 57.0504 13.1966 57.2815 11.6353H54.8183C54.6699 12.0339 54.2564 12.499 53.3143 12.499C52.1565 12.499 51.6441 11.7851 51.6279 10.7723H57.3974V9.82587C57.3974 7.468 55.9132 5.59146 53.2648 5.59146C50.4539 5.59146 49.0325 7.63339 49.0325 10.0909C49.0325 12.5817 50.586 14.5741 53.3143 14.5741ZM51.6441 9.16007C51.6943 8.32958 52.1735 7.68216 53.2648 7.68216C54.2727 7.68216 54.7526 8.32958 54.8021 9.16007H51.6441Z"
              fill="black"
            />
            <path
              d="M65.1221 5.35611C65.8953 5.35611 66.5946 5.56639 67.22 5.98696C67.8454 6.40752 68.3343 6.98153 68.6868 7.70899C69.0507 8.43645 69.2326 9.2378 69.2326 10.113C69.2326 10.9428 69.0507 11.71 68.6868 12.4148C68.3343 13.1081 67.8454 13.6651 67.22 14.0856C66.5946 14.4948 65.8953 14.6994 65.1221 14.6994C64.2125 14.6994 63.462 14.4551 62.8707 13.9663C62.2795 13.4662 61.8701 12.7444 61.6427 11.801H61.2845L61.3698 14.8273L61.4551 17.5204L59.9883 17.8537V5.54366L61.4551 5.71029L61.2845 8.23754H61.6427C61.8701 7.29411 62.2795 6.57802 62.8707 6.08925C63.462 5.60049 64.2125 5.35611 65.1221 5.35611ZM64.6446 13.2332C65.2245 13.2332 65.7475 13.1024 66.2137 12.841C66.6913 12.5796 67.0665 12.2102 67.3394 11.7328C67.6237 11.244 67.7658 10.6927 67.7658 10.0789C67.7658 9.4424 67.6293 8.87975 67.3565 8.39099C67.0836 7.90222 66.7083 7.52713 66.2308 7.2657C65.7532 6.9929 65.2245 6.8565 64.6446 6.8565C64.1329 6.8565 63.6496 6.9929 63.1948 7.2657C62.7513 7.53849 62.3932 7.91359 62.1203 8.39099C61.8474 8.85702 61.7109 9.36851 61.7109 9.92548C61.7109 10.5393 61.8417 11.1019 62.1032 11.6134C62.3647 12.1135 62.7172 12.5114 63.1607 12.8069C63.6155 13.0911 64.1101 13.2332 64.6446 13.2332Z"
              fill="#3A3A3A"
            />
            <path
              d="M74.4108 5.37316C75.7071 5.37316 76.6963 5.72552 77.3786 6.43025C78.0608 7.12361 78.4019 8.03862 78.4019 9.17528V14.4437L76.9863 14.1104L77.2421 11.7328H76.9522C76.702 12.7217 76.2927 13.4605 75.7241 13.9492C75.1556 14.438 74.462 14.6824 73.6433 14.6824C72.5404 14.6824 71.7274 14.4323 71.2043 13.9322C70.6813 13.4321 70.4197 12.7955 70.4197 12.0226C70.4197 10.9428 70.8291 10.1699 71.6478 9.70383C72.4664 9.2378 73.666 9.00478 75.2466 9.00478H77.0204C76.9863 8.32279 76.7304 7.79424 76.2529 7.41914C75.7753 7.03268 75.1613 6.83945 74.4108 6.83945C73.8082 6.83945 73.3136 6.97585 72.927 7.24865C72.5404 7.52144 72.1879 7.92496 71.8695 8.45919L70.6756 7.58964C71.1304 6.89628 71.6421 6.35637 72.2106 5.96991C72.7905 5.57208 73.5239 5.37316 74.4108 5.37316ZM73.7456 13.2161C74.6325 13.2161 75.3432 12.9376 75.8776 12.3807C76.4121 11.8123 76.7589 11.0792 76.918 10.1812H75.2466C74.0981 10.1812 73.2453 10.3176 72.6882 10.5904C72.131 10.8519 71.8524 11.2781 71.8524 11.8692C71.8524 12.2784 72.0116 12.608 72.33 12.8581C72.6484 13.0968 73.1203 13.2161 73.7456 13.2161Z"
              fill="#3A3A3A"
            />
            <path
              d="M87.84 5.54366L85.6739 14.1027C85.4351 15.0802 85.1281 15.8304 84.7529 16.3533C84.389 16.8875 83.8659 17.2683 83.1837 17.4956C82.5128 17.7343 81.5805 17.8537 80.3865 17.8537V16.4385C81.3644 16.4385 82.058 16.4044 82.4674 16.3362C82.8767 16.268 83.1951 16.0975 83.4225 15.8247C83.6613 15.5633 83.8716 15.103 84.0536 14.4437H82.0239L79.602 5.54366H81.137L83.286 13.4378H84.3094L86.322 5.54366H87.84Z"
              fill="#3A3A3A"
            />
          </svg>
        </div>
      </div>
      <div className={btnStyles}>
        <DownloadButton url={props.fileUrl} fileName={props.fileName} />
      </div>
    </div>
  );
};

export default DownloadBox;
