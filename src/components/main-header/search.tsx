import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function SearchForm() {
  return (
    <div className="relative w-64">
      <Label htmlFor="search" className="sr-only">
        Search events
      </Label>
      <Input
        id="search"
        type="text"
        placeholder="Search SDGs, documents..."
        className="bg-primary-foreground h-10 border-0 px-9 dark:bg-yellow-100"
      />
      <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 transform cursor-pointer">
        <Search size={18} />
      </span>
      <button
        type="button"
        aria-label="Clear search"
        className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer"
      >
        <X size={18} />
      </button>
    </div>
  );
}
