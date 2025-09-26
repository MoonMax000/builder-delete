import { useState } from "react";
import { Search, MapPin, Star, Users, Globe, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import MobileNav from "@/components/MobileNav";

export default function Guides() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="glass-card sticky top-0 z-50 border-none">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GuideMe</span>
            </a>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Главная
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/guides" className="text-blue-600 font-semibold relative">
                Гиды
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              </a>
              <a href="/#destinations" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Направления
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/#how-it-works" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Как это работает
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/#support" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Поддержка
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="hidden sm:flex hover:bg-blue-50 transition-colors duration-300"
              >
                Стать гидом
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Войти
              </Button>
              <MobileNav
                isOpen={mobileNavOpen}
                onToggle={() => setMobileNavOpen(!mobileNavOpen)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <section className="pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Все <span className="gradient-text">гиды</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Найдите идеального гида для вашего путешествия среди тысяч проверенных экспертов
            </p>

            {/* Search and Filters */}
            <div className="glass-card p-6 rounded-3xl max-w-4xl mx-auto mb-12">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Поиск по городу или стране..."
                    className="pl-12 h-12 text-lg bg-white/50 border-white/20 rounded-2xl focus:bg-white"
                  />
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="glass-button border-white/20 h-12 px-6">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Фильтры
                  </Button>
                  <Button className="h-12 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0">
                    Найти
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder Content */}
          <div className="glass-card rounded-3xl p-16 text-center max-w-3xl mx-auto animate-scale-in">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Страница в разработке</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы работаем над созданием полного каталога гидов. Скоро здесь появится удобная система поиска и фильтрации, 
              детальные профили гидов и возможность мгновенного бронирования экскурсий.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
              >
                Вернуться на главную
              </Button>
              <Button variant="outline" className="glass-button border-white/20">
                Уведомить о готовности
              </Button>
            </div>

            {/* Feature Preview */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Умный поиск</h3>
                <p className="text-gray-600 text-sm">Найдите гида по интересам, языку и локации</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Рейтинги и отзывы</h3>
                <p className="text-gray-600 text-sm">Проверенные отзывы от реальных путешественников</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">Мгновенное бронирование</h3>
                <p className="text-gray-600 text-sm">Забронируйте экскурсию в несколько кликов</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
