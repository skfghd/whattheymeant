import { Languages, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function Disclaimer() {
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
                  <h1 className="text-xl font-bold text-foreground">면책조항</h1>
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
                  서비스 이용 시 주의사항
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">면책조항</h2>
          
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-lg font-semibold mb-3">서비스 목적</h3>
              <p className="text-muted-foreground leading-relaxed">
                속뜻 번역기는 재미와 엔터테인먼트를 목적으로 제작된 서비스입니다. 
                실제 직장 내 소통이나 인간관계에 대한 전문적인 조언이나 상담 서비스가 아닙니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">번역 결과의 정확성</h3>
              <p className="text-muted-foreground leading-relaxed">
                본 서비스가 제공하는 "속뜻" 번역은 일반적인 패턴과 유머를 바탕으로 한 
                추측성 해석입니다. 실제 상대방의 의도와는 다를 수 있으며, 이를 근거로 한 
                판단이나 행동에 대해서는 책임지지 않습니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">개인적 해석 주의</h3>
              <p className="text-muted-foreground leading-relaxed">
                번역 결과를 개인적인 상황에 직접 적용하거나, 이를 바탕으로 중요한 결정을 
                내리는 것은 권장하지 않습니다. 실제 직장 내 갈등이나 문제가 있을 경우 
                전문가의 조언을 구하시기 바랍니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">서비스 이용 책임</h3>
              <p className="text-muted-foreground leading-relaxed">
                사용자는 본 서비스를 이용함으로써 발생하는 모든 결과에 대해 개인적인 
                책임을 집니다. 서비스 제공자는 이용자의 서비스 사용으로 인해 발생하는 
                직간접적인 손해에 대해 책임지지 않습니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">서비스 변경 및 중단</h3>
              <p className="text-muted-foreground leading-relaxed">
                서비스는 사전 통지 없이 변경되거나 중단될 수 있습니다. 
                서비스의 일시적 또는 영구적 중단으로 인한 불편이나 손해에 대해서는 
                책임지지 않습니다.
              </p>
            </section>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-8">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                ⚠️ 본 서비스는 유머와 재미를 위한 것입니다. 
                실제 직장 생활에서는 상대방과의 직접적이고 건설적인 소통을 권장합니다.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}