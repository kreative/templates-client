import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DownloadButtonProps {
  url: string;
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = (
  props: DownloadButtonProps
) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = async () => {
    setIsLoading(true);
    console.log(props.url);
    const response = await fetch(props.url);
    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = props.fileName;
    link.click();
    URL.revokeObjectURL(downloadUrl);
    setIsLoading(false);
  };

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={handleDownloadClick}
      className="w-full mt-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <div className="flex items-center justify-center">
        <span className="mr-2">
          {isLoading ? "Downloading..." : "Download local copy"}
        </span>
        <ArrowDownTrayIcon className="h-4 w-4" />
      </div>
    </button>
  );
};

export default DownloadButton;
