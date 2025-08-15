import { Translation } from "@/lib/types";
import { categories } from "@/lib/translations";
import { Lightbulb, Share, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TranslationResultProps {
  translation: Translation;
}

export function TranslationResult({ translation }: TranslationResultProps) {
  const category = categories.find(cat => cat.id === translation.category);
  const categoryLabel = category ? category.label : translation.category;
  
  const getToneLabel = (tone: string) => {
    switch (tone) {
      case 'realistic': return '현실적';
      case 'cynical': return '냉소적';
      case 'empathetic': return '공감적';
      default: return tone;
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '속뜻 번역기 결과',
        text: `"${translation.original}" → ${translation.translation}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const textToShare = `"${translation.original}" → ${translation.translation}`;
      navigator.clipboard.writeText(textToShare).then(() => {
        alert('결과가 클립보드에 복사되었습니다!');
      });
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-success" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-2">속뜻 번역 결과</h3>
          <div className="bg-warm/30 dark:bg-warm/10 border border-accent/20 rounded-lg p-4">
            <p className="text-foreground leading-relaxed">
              {translation.translation}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground flex items-center">
                <Tag className="w-3 h-3 mr-1" />
                {categoryLabel} 카테고리
              </span>
              <span className="text-xs text-muted-foreground flex items-center">
                {translation.emoji} {getToneLabel(translation.tone)} 톤
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Share className="w-3 h-3 mr-1" />
              공유하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
