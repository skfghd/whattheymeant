import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Search, Dice1 } from "lucide-react";
import { Category } from "@/lib/types";
import { getRandomPhrase } from "@/lib/translations";

interface TranslationInputProps {
  onTranslate: (text: string) => void;
  selectedCategory: Category;
  inputValue?: string;
  onInputChange?: (value: string) => void;
}

export function TranslationInput({ onTranslate, selectedCategory, inputValue = "", onInputChange }: TranslationInputProps) {
  const [inputText, setInputText] = useState(inputValue);

  // Update internal state when external value changes
  useEffect(() => {
    setInputText(inputValue);
  }, [inputValue]);

  const handleSubmit = () => {
    const trimmedText = inputText.trim();
    if (!trimmedText) {
      alert("번역할 문장을 입력해주세요.");
      return;
    }
    onTranslate(trimmedText);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (value: string) => {
    setInputText(value);
    if (onInputChange) {
      onInputChange(value);
    }
  };

  const handleRandomPhrase = () => {
    const randomPhrase = getRandomPhrase(selectedCategory);
    handleInputChange(randomPhrase);
  };

  const charCount = inputText.length;
  const maxChars = 200;

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 mb-8">
      <div className="space-y-4">
        <div>
          <Label htmlFor="inputPhrase" className="block text-sm font-medium text-foreground mb-2">
            회사에서 들은 말을 입력해주세요
          </Label>
          <div className="relative">
            <Textarea
              id="inputPhrase"
              rows={3}
              value={inputText}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-foreground placeholder-muted-foreground"
              placeholder="예: 고생 많으셨습니다"
              maxLength={maxChars}
            />
            <div className={cn(
              "absolute bottom-3 right-3 text-xs",
              charCount > 180 ? "text-destructive" : "text-muted-foreground"
            )}>
              <span>{charCount}</span>/{maxChars}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleSubmit}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6"
          >
            <Search className="w-4 h-4 mr-2" />
            속뜻 번역하기
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleRandomPhrase}
                  variant="outline"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3 px-4"
                >
                  <Dice1 className="w-4 h-4 mr-2" />
                  랜덤 문장
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>예시 문장을 무작위로 보여줍니다</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

function cn(...args: any[]) {
  return args.filter(Boolean).join(' ');
}
