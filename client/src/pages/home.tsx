import { useState, useEffect } from "react";
import { Languages, Info, Moon, Sun, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CategoryTabs } from "@/components/category-tabs";
import { TranslationInput } from "@/components/translation-input";
import { TranslationResult } from "@/components/translation-result";
import { SamplePhrases } from "@/components/sample-phrases";
import { Footer } from "@/components/footer";
import { useTheme } from "@/components/theme-provider";
import { Category, Translation } from "@/lib/types";
import { getTranslation } from "@/lib/translations";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('boss');
  const [currentTranslation, setCurrentTranslation] = useState<Translation | null>(null);
  const [inputText, setInputText] = useState("");
  const { theme, setTheme } = useTheme();

  // Load last translation from localStorage on mount
  useEffect(() => {
    const lastTranslation = localStorage.getItem('lastTranslation');
    if (lastTranslation) {
      try {
        const data = JSON.parse(lastTranslation);
        setCurrentTranslation(data);
        setSelectedCategory(data.category);
      } catch (error) {
        console.error('Failed to load last translation:', error);
      }
    }
  }, []);

  const handleTranslate = (text: string) => {
    const translationResult = getTranslation(text, selectedCategory);
    const result: Translation = {
      original: text,
      translation: translationResult.translation,
      tone: translationResult.tone,
      emoji: translationResult.emoji,
      category: selectedCategory
    };
    
    setCurrentTranslation(result);
    
    // Save to localStorage
    localStorage.setItem('lastTranslation', JSON.stringify(result));
    
    // Scroll to result
    setTimeout(() => {
      const resultElement = document.getElementById('translation-result');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handlePhraseSelect = (phrase: string) => {
    setInputText(phrase);
    // Scroll to input
    setTimeout(() => {
      const inputElement = document.getElementById('inputPhrase');
      if (inputElement) {
        inputElement.focus();
        inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleInputChange = (value: string) => {
    setInputText(value);
  };

  return (
    <div className="bg-cool-gray dark:bg-background min-h-screen">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-success rounded-lg flex items-center justify-center">
                <Languages className="text-white text-lg w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-xl font-bold text-foreground">속뜻 번역기 – 회사편</h1>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open('https://kindtool.ai/', '_blank')}
                    className="text-muted-foreground hover:text-foreground p-1"
                  >
                    <HomeIcon className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground hidden sm:block">
                  회사에서 들은 말의 진짜 의미를 알려드려요
                </p>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Info className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      회사에서 자주 듣는 말들의 숨은 의미를 재미있게 번역해드려요. 
                      카테고리를 선택하고 문장을 입력해보세요!
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <CategoryTabs
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Main Input Area */}
        <TranslationInput
          onTranslate={handleTranslate}
          selectedCategory={selectedCategory}
          inputValue={inputText}
          onInputChange={handleInputChange}
        />

        {/* Result Area */}
        {currentTranslation && (
          <div id="translation-result">
            <TranslationResult translation={currentTranslation} />
          </div>
        )}

        {/* Sample Phrases */}
        <SamplePhrases
          selectedCategory={selectedCategory}
          onPhraseSelect={handlePhraseSelect}
        />
      </main>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>💡 회사 생활의 미묘한 뉘앙스를 이해하는 데 도움을 드려요</p>
          <p className="mt-1">재미로 만든 서비스입니다. 참고용으로만 사용해주세요! 😊</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
