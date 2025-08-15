import { Languages, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
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
                  <h1 className="text-xl font-bold text-foreground">개인정보처리방침</h1>
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
                  개인정보 보호 정책
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">개인정보처리방침</h2>
          
          <div className="space-y-6 text-foreground">
            <section>
              <h3 className="text-lg font-semibold mb-3">개인정보 수집 현황</h3>
              <p className="text-muted-foreground leading-relaxed">
                속뜻 번역기는 현재 별도의 회원가입이나 로그인 절차 없이 이용할 수 있는 서비스입니다. 
                따라서 이름, 이메일, 전화번호 등의 개인식별정보를 수집하지 않습니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">로컬 스토리지 사용</h3>
              <p className="text-muted-foreground leading-relaxed">
                사용자 경험 개선을 위해 브라우저의 로컬 스토리지에 다음 정보를 임시 저장합니다:
              </p>
              <ul className="mt-3 space-y-1 text-muted-foreground ml-4">
                <li>• 마지막 번역 결과</li>
                <li>• 테마 설정 (다크모드/라이트모드)</li>
                <li>• 마지막 선택한 카테고리</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                이 정보는 사용자의 기기에만 저장되며, 서버로 전송되지 않습니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">입력 데이터 처리</h3>
              <p className="text-muted-foreground leading-relaxed">
                사용자가 번역을 위해 입력하는 텍스트는:
              </p>
              <ul className="mt-3 space-y-1 text-muted-foreground ml-4">
                <li>• 브라우저에서만 처리되며 서버로 전송되지 않습니다</li>
                <li>• 별도로 저장하거나 수집하지 않습니다</li>
                <li>• 페이지를 새로고침하면 삭제됩니다</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">쿠키 사용</h3>
              <p className="text-muted-foreground leading-relaxed">
                본 서비스는 현재 쿠키를 사용하지 않습니다. 
                추후 서비스 개선을 위해 쿠키 사용이 필요한 경우, 
                사전에 공지하고 사용자의 동의를 구할 예정입니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">제3자 서비스</h3>
              <p className="text-muted-foreground leading-relaxed">
                현재 별도의 제3자 서비스(구글 애널리틱스, 광고 플랫폼 등)를 사용하지 않습니다. 
                추후 도입 시에는 본 방침을 업데이트하여 공지하겠습니다.
              </p>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-3">개인정보보호 문의</h3>
              <p className="text-muted-foreground leading-relaxed">
                개인정보 처리에 관한 문의사항이 있으시면 문의하기 페이지를 통해 연락주시기 바랍니다.
              </p>
            </section>
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-8">
              <p className="text-sm text-green-800 dark:text-green-200">
                🔒 본 서비스는 개인정보를 최소한으로 수집하며, 
                사용자의 프라이버시 보호를 최우선으로 합니다.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}