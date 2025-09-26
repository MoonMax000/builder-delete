import { useState, useEffect } from "react";
import { Search, MapPin, Star, Users, Globe, ChevronRight, Play, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import MobileNav from "@/components/MobileNav";
import SearchForm from "@/components/SearchForm";

export default function Index() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [likedGuides, setLikedGuides] = useState<Set<number>>(new Set());
  const [showTooltip, setShowTooltip] = useState<number | null>(null);

  // Mock data for featured guides
  const featuredGuides = [
    {
      id: 1,
      name: "Анна Петрова",
      location: "Санкт-Петербург, Россия",
      rating: 4.9,
      reviews: 247,
      price: "от ₽2,500",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      specialties: ["Исторические туры", "Архитектура", "Музеи"],
      languages: ["Русский", "English", "Français"]
    },
    {
      id: 2,
      name: "Marco Rossi",
      location: "Рим, Италия",
      rating: 4.8,
      reviews: 189,
      price: "от €35",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialties: ["Античная история", "Кулинарные туры", "Искусство"],
      languages: ["Italiano", "English", "Español"]
    },
    {
      id: 3,
      name: "Sophie Chen",
      location: "Токио, Япония",
      rating: 5.0,
      reviews: 156,
      price: "от ¥4,000",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      specialties: ["Культура", "Аниме", "Традиции"],
      languages: ["日本語", "English", "한국어"]
    }
  ];

  const popularDestinations = [
    {
      name: "Париж",
      country: "Франция",
      guides: 89,
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Токио",
      country: "Япония", 
      guides: 67,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Рим",
      country: "Италия",
      guides: 72,
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Барселона",
      country: "Испания",
      guides: 54,
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop",
      color: "from-green-500 to-teal-500"
    }
  ];

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
              <a href="/guides" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Гиды
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Направления
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Как это работает
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#support" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
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

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
              Откройте мир с
              <span className="gradient-text block">местными гидами</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 text-balance leading-relaxed">
              Уникальные экскурсии от местных экспертов в более чем 180 странах мира. 
              Погрузитесь в культуру и откройте скрытые жемчужины.
            </p>

            {/* Search Section */}
            <SearchForm />

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center animate-slide-in-left">
                <div className="text-3xl font-bold gradient-text">10,000+</div>
                <div className="text-gray-600">Экспертных гидов</div>
              </div>
              <div className="text-center animate-fade-in-up">
                <div className="text-3xl font-bold gradient-text">180+</div>
                <div className="text-gray-600">Стран мира</div>
              </div>
              <div className="text-center animate-slide-in-right">
                <div className="text-3xl font-bold gradient-text">500,000+</div>
                <div className="text-gray-600">Довольных путешественников</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20 animate-float" style={{animationDelay: "4s"}}></div>
      </section>

      {/* Featured Guides */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Лучшие гиды</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Познакомьтесь с нашими топ-гидами, которые сделают ваше путешествие незабываемым
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <Card key={guide.id} className="glass-card border-white/20 overflow-hidden group hover:shadow-float transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Top overlay buttons */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <div className="glass-button px-3 py-1 rounded-full">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{guide.rating}</span>
                        </div>
                      </div>

                      {/* Like button */}
                      <button
                        onClick={() => {
                          const newLiked = new Set(likedGuides);
                          if (newLiked.has(guide.id)) {
                            newLiked.delete(guide.id);
                          } else {
                            newLiked.add(guide.id);
                          }
                          setLikedGuides(newLiked);
                        }}
                        className="glass-button p-2 rounded-full hover:scale-110 transition-transform duration-300"
                      >
                        <Heart
                          className={`h-4 w-4 transition-colors duration-300 ${
                            likedGuides.has(guide.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-gray-600 hover:text-red-500'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Price badge */}
                    <div className="absolute bottom-4 left-4 glass-button px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-blue-600">{guide.price}</span>
                    </div>

                    {/* Quick action buttons (shown on hover) */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        className="glass-button p-2 rounded-full hover:scale-110 transition-transform duration-300"
                        title="Написать сообщение"
                      >
                        <MessageCircle className="h-4 w-4 text-blue-600" />
                      </button>
                      <button
                        className="glass-button p-2 rounded-full hover:scale-110 transition-transform duration-300"
                        title="Поделиться"
                      >
                        <Share2 className="h-4 w-4 text-blue-600" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors cursor-pointer">{guide.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{guide.location}</span>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="text-sm text-gray-600">{guide.reviews} отзывов</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {guide.specialties.slice(0, 2).map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                          >
                            {specialty}
                          </span>
                        ))}
                        {guide.specialties.length > 2 && (
                          <span
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200 transition-colors"
                            onMouseEnter={() => setShowTooltip(guide.id)}
                            onMouseLeave={() => setShowTooltip(null)}
                          >
                            +{guide.specialties.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Tooltip for additional specialties */}
                      {showTooltip === guide.id && (
                        <div className="absolute z-10 mt-2 p-2 bg-black text-white text-xs rounded-lg shadow-lg">
                          {guide.specialties.slice(2).join(', ')}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.languages.map((lang, idx) => (
                        <span key={idx} className="text-xs text-gray-500 hover:text-blue-600 transition-colors cursor-pointer">
                          {lang}{idx < guide.languages.length - 1 && ", "}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 transition-all duration-300 hover:scale-105">
                        Связаться
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass-button border-white/20 hover:scale-105 transition-transform duration-300"
                      >
                        Профиль
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="glass-button border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={() => window.location.href = '/guides'}
            >
              Посмотреть всех гидов
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Популярные направления</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Исследуйте самые востребованные города с нашими экспертными гидами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div
                key={destination.name}
                className="group cursor-pointer"
                style={{animationDelay: `${index * 200}ms`}}
                onClick={() => {
                  const params = new URLSearchParams({
                    destination: destination.name,
                    country: destination.country.toLowerCase()
                  });
                  window.location.href = `/guides?${params.toString()}`;
                }}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] glass-card border-white/20 group-hover:shadow-float transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${destination.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      Найти гидов
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{destination.name}</h3>
                    <p className="text-white/90 mb-3">{destination.country}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-sm">{destination.guides} гидов</span>
                      </div>
                      <div className="glass-button px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all destinations button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="glass-button border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Все направления
              <Globe className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы к <span className="gradient-text">приключениям?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Начните свое путешествие прямо сейчас. Найдите идеального гида и откройте мир новых впечатлений.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">1. Найдите</h3>
                <p className="text-gray-600 text-sm">Выберите направление и найдите идеального гида</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">2. Свяжитесь</h3>
                <p className="text-gray-600 text-sm">Обсудите детали и забронируйте экскурсию</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-2">3. Наслаждайтесь</h3>
                <p className="text-gray-600 text-sm">Получите незабываемые впечатления</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.location.href = '/guides'}
              >
                Найти гида
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-button border-white/20 hover:scale-105 transition-all duration-300"
                onClick={() => {
                  // Scroll to how-it-works section or show video
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Play className="mr-2 h-5 w-5" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">GuideMe</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Ваш путеводитель к незабываемым путешествиям с местными экспертами по всему миру.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Путешественникам</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Найти гида</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Популярные направления</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Гидам</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Стать гидом</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ресурсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сообщество</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GuideMe. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
