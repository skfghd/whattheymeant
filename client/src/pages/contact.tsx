import { Languages, Home as HomeIcon, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function Contact() {
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
                  <h1 className="text-xl font-bold text-foreground">문의하기</h1>
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
                  궁금한 점이나 의견을 보내주세요
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">문의하기</h2>
          
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-lg font-semibold mb-3">서비스 관련 문의</h3>
              <p className="text-muted-foreground leading-relaxed">
                속뜻 번역기 서비스에 대한 궁금한 점, 개선 제안, 버그 신고 등을 보내주세요. 
                더 나은 서비스를 만들기 위해 사용자의 의견을 소중히 듣고 있습니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">연락 방법</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">이메일 문의</p>
                    <p className="text-muted-foreground text-sm">
                      contact@kindtool.ai (준비 중)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">피드백 및 제안</p>
                    <p className="text-muted-foreground text-sm">
                      새로운 기능 아이디어나 개선사항을 제안해주세요
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">자주 묻는 질문</h3>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Q. 번역 결과가 정확한가요?</h4>
                  <p className="text-muted-foreground text-sm">
                    A. 속뜻 번역기는 재미를 위한 서비스로, 실제 상황과는 다를 수 있습니다. 
                    참고용으로만 사용해주세요.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Q. 개인정보가 수집되나요?</h4>
                  <p className="text-muted-foreground text-sm">
                    A. 별도의 개인정보는 수집하지 않습니다. 
                    자세한 내용은 개인정보처리방침을 참고해주세요.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Q. 새로운 번역 패턴을 추가할 수 있나요?</h4>
                  <p className="text-muted-foreground text-sm">
                    A. 네, 사용자의 제안을 바탕으로 지속적으로 업데이트하고 있습니다. 
                    좋은 아이디어가 있으시면 언제든 제안해주세요.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">응답 시간</h3>
              <p className="text-muted-foreground leading-relaxed">
                문의사항은 보통 1-3일 내에 응답드리고 있습니다. 
                긴급한 문제의 경우 제목에 [긴급]을 표시해주시면 더 빠르게 처리하겠습니다.
              </p>
            </section>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mt-8">
              <p className="text-sm text-purple-800 dark:text-purple-200">
                💬 속뜻 번역기를 더 재미있고 유용하게 만들기 위해 
                여러분의 소중한 의견을 기다리고 있습니다!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}