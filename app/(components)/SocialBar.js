import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialBar() {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FacebookIcon fontSize="large" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black transition"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}
