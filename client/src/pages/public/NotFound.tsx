import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  usePageMeta("Page Not Found");

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-heading text-6xl font-extrabold text-brand-blue">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 max-w-md text-slate-500">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button to="/" className="mt-8">
        Back to Home
      </Button>
    </div>
  );
}
