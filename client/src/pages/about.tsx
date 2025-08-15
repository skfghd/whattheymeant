import { Languages, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { useTheme } from "@/components/theme-provider";

export default function About() {
  const { theme, setTheme } = useTheme();

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
                  <h1 className="text-xl font-bold text-foreground">사이트 소개</h1>
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
                  속뜻 번역기에 대해 알아보세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">속뜻 번역기 – 회사편</h2>
          
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-lg font-semibold mb-3">서비스 소개</h3>
              <p className="text-muted-foreground leading-relaxed">
                속뜻 번역기는 회사에서 자주 듣는 말들의 숨은 의미를 재미있게 번역해주는 서비스입니다. 
                상사의 발언, 동료들의 일상 멘트, 업무 관련 말들의 진짜 속뜻을 알아보세요.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">주요 기능</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 👔 상사 발언: 상사가 하는 말의 진짜 의미</li>
                <li>• 💬 일상 멘트: 동료들의 평상시 말</li>
                <li>• 📋 일할 때 멘트: 업무 중 듣는 말들</li>
                <li>• ❓ 애매한 멘트: 해석이 어려운 말들</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">번역 톤</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 🎯 현실적: 직설적이고 현실적인 해석</li>
                <li>• 🙃 냉소적: 약간 비꼬는 톤의 해석</li>
                <li>• 🫂 공감형: 따뜻하고 이해하는 톤의 해석</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">사용 목적</h3>
              <p className="text-muted-foreground leading-relaxed">
                이 서비스는 재미와 위로를 위해 만들어졌습니다. 회사 생활의 스트레스를 조금이나마 
                덜어드리고, 직장 내 소통의 미묘한 뉘앙스를 이해하는 데 도움을 드리고자 합니다.
              </p>
            </section>
            
            <div className="bg-muted/50 rounded-lg p-4 mt-8">
              <p className="text-sm text-muted-foreground text-center">
                💡 이 서비스는 재미를 위해 제작되었으며, 실제 상황과는 다를 수 있습니다. 
                참고용으로만 사용해주세요!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}