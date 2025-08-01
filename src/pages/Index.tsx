import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Уничтожение клопов",
      description: "Полное избавление от клопов с гарантией. Безопасные сертифицированные препараты.",
      icon: "Bug",
      price: "от 80 BYN"
    },
    {
      title: "Дератизация",  
      description: "Уничтожение грызунов (крысы, мыши). Профессиональные ловушки и препараты.",
      icon: "Rat",
      price: "от 120 BYN"
    },
    {
      title: "Уничтожение тараканов",
      description: "Эффективное избавление от тараканов навсегда. Современные методы обработки.",
      icon: "Bug",
      price: "от 70 BYN"
    },
    {
      title: "Уничтожение ос и шершней",
      description: "Безопасное удаление гнёзд ос и шершней. Выезд специалиста в день обращения.",
      icon: "Zap",
      price: "от 90 BYN"
    }
  ];

  const advantages = [
    {
      title: "Профессионализм",
      description: "Наша команда состоит из опытных специалистов, которые знают все тонкости дезинсекции.",
      icon: "Award"
    },
    {
      title: "Современные технологии", 
      description: "Мы используем только сертифицированные препараты, что гарантирует безопасность и эффективность.",
      icon: "Shield"
    },
    {
      title: "Индивидуальный подход",
      description: "Каждое помещение уникально, поэтому мы разрабатываем индивидуальные планы дезинсекции.",
      icon: "Target"
    },
    {
      title: "Профилактические меры",
      description: "Мы не только избавляем от насекомых, но и предоставляем рекомендации по предотвращению.",
      icon: "CheckCircle"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={32} />
            <h1 className="text-2xl font-bold">ДезСервис</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Прайс</a>
            <a href="#about" className="hover:text-accent transition-colors">О компании</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button variant="secondary" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            +375 (44) 564 16 51
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-accent text-accent-foreground mb-6 text-lg px-4 py-2">
            100% ГАРАНТИЯ РЕЗУЛЬТАТА
          </Badge>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            УНИЧТОЖЕНИЕ<br />
            <span className="text-accent">КЛОПОВ • ТАРАКАНОВ</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Профессиональные услуги дезинсекции и дератизации в Минске. 
            Сертифицированные безопасные препараты. Работаем без выходных.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать специалиста
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm opacity-75">лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm opacity-75">довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm opacity-75">круглосуточно</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Наши услуги</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по дезинсекции и дератизации с гарантией качества
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon name={service.icon} size={24} className="text-accent" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="text-accent font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Почему стоит выбрать нас?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональный подход и качественный результат — наши главные принципы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Icon name={advantage.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{advantage.title}</h4>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Прайс-лист</h3>
            <p className="text-xl text-muted-foreground">
              Честные цены без скрытых доплат. Окончательная цена после осмотра.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h4 className="font-semibold">Обработка от клопов</h4>
                    <p className="text-sm text-muted-foreground">1-комнатная квартира</p>
                  </div>
                  <div className="text-accent font-bold text-xl">80-120 BYN</div>
                </div>
                <div className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h4 className="font-semibold">Дератизация</h4>
                    <p className="text-sm text-muted-foreground">Уничтожение грызунов</p>
                  </div>
                  <div className="text-accent font-bold text-xl">120-180 BYN</div>
                </div>
                <div className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h4 className="font-semibold">Уничтожение тараканов</h4>
                    <p className="text-sm text-muted-foreground">Комплексная обработка</p>
                  </div>
                  <div className="text-accent font-bold text-xl">70-100 BYN</div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div>
                    <h4 className="font-semibold">Удаление гнёзд ос</h4>
                    <p className="text-sm text-muted-foreground">Выезд + обработка</p>
                  </div>
                  <div className="text-accent font-bold text-xl">90-150 BYN</div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                <p className="text-center text-sm">
                  <Icon name="Info" size={16} className="inline mr-1" />
                  Для объектов общепита и коммерческих помещений действуют специальные тарифы
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Отзывы клиентов</h3>
            <p className="text-xl text-muted-foreground">
              Что говорят о нашей работе наши клиенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <Card key={review}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    "Отличная работа! Избавились от клопов раз и навсегда. Специалисты приехали вовремя, 
                    работали аккуратно. Рекомендую!"
                  </p>
                  <div className="font-semibold">Анна К.</div>
                  <div className="text-sm text-muted-foreground">г. Минск</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Наши контакты</h3>
            <p className="text-xl opacity-90">
              Работаем без выходных с 9:00 до 21:00
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={24} className="text-accent" />
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="opacity-90">220107, г. Минск, ул. Народная, д 23/1 офис 21</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={24} className="text-accent" />
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="opacity-90">+375 (44) 564 16 51</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={24} className="text-accent" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="opacity-90">dezinfektor00@mail.ru</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Clock" size={24} className="text-accent" />
                <div>
                  <h4 className="font-semibold mb-1">Режим работы</h4>
                  <p className="opacity-90">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 p-8 rounded-lg backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-6">Заказать звонок</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 rounded bg-primary-foreground/20 border border-primary-foreground/30 placeholder-primary-foreground/60"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 rounded bg-primary-foreground/20 border border-primary-foreground/30 placeholder-primary-foreground/60"
                />
                <Button className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать звонок
                </Button>
              </div>
              <p className="text-xs opacity-60 mt-4">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/90 text-primary-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Shield" size={24} />
            <span className="text-xl font-bold">ДезСервис</span>
          </div>
          <p className="opacity-75 mb-4">
            Профессиональные услуги дезинсекции и дератизации в Минске
          </p>
          <div className="flex justify-center space-x-8 text-sm opacity-75">
            <span>© 2024 ДезСервис</span>
            <span>•</span>
            <span>Все права защищены</span>
          </div>
        </div>
      </footer>
    </div>
  );
}