import { LanguagesIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        className="text-primary-foreground hover:text-primary dark:hover:text-secondary"
      >
        <LanguagesIcon />
        EN
      </Button>
    </div>
  );
}
