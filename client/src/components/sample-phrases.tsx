import { Category } from "@/lib/types";
import { samplePhrases, categories } from "@/lib/translations";
import { Lightbulb } from "lucide-react";

interface SamplePhrasesProps {
  selectedCategory: Category;
  onPhraseSelect: (phrase: string) => void;
}

export function SamplePhrases({ selectedCategory, onPhraseSelect }: SamplePhrasesProps) {
  const currentSamples = samplePhrases[selectedCategory];
  const category = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6">
      <h3 className="font-semibold text-foreground mb-4 flex items-center">
        <Lightbulb className="w-5 h-5 text-accent mr-2" />
        샘플 문장들
      </h3>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center">
            {category?.emoji} {category?.label}
          </h4>
          <div className="space-y-2">
            {currentSamples.slice(0, 3).map((sample, index) => (
              <button
                key={index}
                onClick={() => onPhraseSelect(sample.text)}
                className="w-full text-left p-3 bg-muted hover:bg-muted/80 dark:bg-muted/50 dark:hover:bg-muted/70 rounded-lg border border-border transition-colors text-sm"
              >
                {sample.text}
              </button>
            ))}
          </div>
        </div>
        
        {currentSamples.length > 3 && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center opacity-0">
              더 많은 예시
            </h4>
            <div className="space-y-2">
              {currentSamples.slice(3, 6).map((sample, index) => (
                <button
                  key={index + 3}
                  onClick={() => onPhraseSelect(sample.text)}
                  className="w-full text-left p-3 bg-muted hover:bg-muted/80 dark:bg-muted/50 dark:hover:bg-muted/70 rounded-lg border border-border transition-colors text-sm"
                >
                  {sample.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
