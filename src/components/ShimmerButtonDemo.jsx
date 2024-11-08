import { useNavigate } from "react-router-dom";
import ShimmerButton from "@/components/ui/shimmer-button";

export function ShimmerButtonDemo({ name, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="flex items-center justify-center">
      <ShimmerButton
        onClick={handleClick} // Redirect on click
        className="shadow-2xl px-4 py-2 text-sm transition-transform duration-200 ease-in-out transform hover:scale-105"
        background="linear-gradient(to right, rgba(0, 139, 186, 1), rgba(219, 68, 133, 1))"
        shimmerSize="0.10em"
      >
        <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 text-lg">
          {name}
        </span>
      </ShimmerButton>
    </div>
  );
}
