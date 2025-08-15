import { Languages, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="bg-cool-gray dark:bg-background min-h-screen">
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-success rounded-lg flex items-center justify-center">
                <Languages className="text-white text-lg w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-xl font-bold text-foreground">이용약관</h1>
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
                  서비스 이용 약관
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">이용약관</h2>
          
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-lg font-semibold mb-3">제1조 (목적)</h3>
              <p className="text-muted-foreground leading-relaxed">
                이 약관은 속뜻 번역기 서비스(이하 "서비스")의 이용과 관련하여 
                서비스 제공자와 사용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">제2조 (서비스의 내용)</h3>
              <p className="text-muted-foreground leading-relaxed">
                본 서비스는 직장에서 사용되는 표현들의 "숨은 의미"를 유머러스하게 해석해주는 
                엔터테인먼트 서비스입니다. 실제 의사소통 도구나 상담 서비스가 아닙니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">제3조 (서비스 이용)</h3>
              <p className="text-muted-foreground leading-relaxed">
                누구나 별도의 회원가입 없이 무료로 이용할 수 있습니다. 
                다음의 경우 서비스 이용이 제한될 수 있습니다:
              </p>
              <ul className="mt-3 space-y-1 text-muted-foreground ml-4">
                <li>• 서비스의 정상적인 운영을 방해하는 행위</li>
                <li>• 타인에게 해를 끼치는 내용 입력</li>
                <li>• 불법적이거나 부적절한 목적으로의 사용</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">제4조 (사용자의 의무)</h3>
              <p className="text-muted-foreground leading-relaxed">
                사용자는 다음의 의무를 준수해야 합니다:
              </p>
              <ul className="mt-3 space-y-1 text-muted-foreground ml-4">
                <li>• 서비스를 선량한 목적으로만 이용</li>
                <li>• 번역 결과를 재미 목적으로만 참고</li>
                <li>• 실제 인간관계에 부정적 영향을 주지 않도록 주의</li>
                <li>• 서비스 시스템에 부하를 주는 행위 금지</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">제5조 (저작권 및 지적재산권)</h3>
              <p className="text-muted-foreground leading-relaxed">
                서비스의 모든 콘텐츠, 디자인, 번역 알고리즘 등은 서비스 제공자의 
                지적재산권으로 보호받습니다. 사용자는 이를 무단으로 복제, 배포, 
                상업적으로 이용할 수 없습니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">제6조 (서비스의 변경 및 중단)</h3>
              <p className="text-muted-foreground leading-relaxed">
                서비스 제공자는 운영상, 기술상의 필요에 따라 사전 통지 없이 
                서비스를 변경하거나 중단할 수 있습니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">제7조 (면책사항)</h3>
              <p className="text-muted-foreground leading-relaxed">
                서비스 제공자는 서비스 이용으로 인해 발생하는 직간접적인 손해에 
                대해 책임지지 않습니다. 번역 결과는 참고용일 뿐이며, 
                실제 상황에 적용하는 것은 사용자의 책임입니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">제8조 (분쟁 해결)</h3>
              <p className="text-muted-foreground leading-relaxed">
                서비스 이용과 관련한 분쟁은 대한민국 법률에 따라 해결하며, 
                관할법원은 서울중앙지방법원으로 합니다.
              </p>
            </section>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-8">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                📋 본 약관은 2025년 2월 3일부터 시행됩니다. 
                약관 변경 시 서비스 내에서 공지하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}