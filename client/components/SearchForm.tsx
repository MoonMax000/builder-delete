import { useState } from "react";
import { Search, MapPin, ChevronRight, Loader2, Calendar, Users, Settings, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchFormProps {
  onSearch?: (data: SearchData) => void;
}

interface SearchData {
  destination: string;
  country: string;
  date?: string;
  guests?: number;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [searchData, setSearchData] = useState<SearchData>({
    destination: "",
    country: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<SearchData>>({});
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const countries = [
    { value: "", label: "Выберите страну" },
    { value: "russia", label: "Россия" },
    { value: "france", label: "Франция" },
    { value: "italy", label: "Италия" },
    { value: "japan", label: "Япония" },
    { value: "spain", label: "Испания" },
    { value: "greece", label: "Греция" },
    { value: "turkey", label: "Турция" },
    { value: "germany", label: "Германия" },
    { value: "usa", label: "США" },
    { value: "thailand", label: "Таиланд" },
    { value: "egypt", label: "Египет" },
    { value: "uae", label: "ОАЭ" },
    { value: "china", label: "Китай" },
    { value: "india", label: "Индия" },
  ];

  const validateForm = () => {
    const newErrors: Partial<SearchData> = {};
    
    if (!searchData.destination.trim()) {
      newErrors.destination = "Укажите направление";
    }
    
    if (!searchData.country) {
      newErrors.country = "Выберите страну";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (onSearch) {
      onSearch(searchData);
    } else {
      // Default behavior - navigate to guides page with search params
      const params = new URLSearchParams({
        destination: searchData.destination,
        country: searchData.country,
        ...(searchData.date && { date: searchData.date }),
        ...(searchData.guests && { guests: searchData.guests.toString() }),
      });
      
      window.location.href = `/guides?${params.toString()}`;
    }
    
    setIsLoading(false);
  };

  const updateSearchData = (field: keyof SearchData, value: string | number) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const hasAdvancedData = searchData.date || searchData.guests;

  return (
    <div className="max-w-5xl mx-auto animate-scale-in">
      {/* Main Search Card */}
      <div className="glass-card rounded-3xl overflow-hidden">
        <div className="p-6 md:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                Найдите идеального гида
              </h3>
              <p className="text-gray-600">
                Заполните форму поиска для персонализированных рекомендаций
              </p>
            </div>

            {/* Main Search Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* Destination Field */}
              <div className="lg:col-span-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Куда планируете поехать?
                </label>
                <div className="relative">
                  <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 transition-colors ${
                    focusedField === 'destination' ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <Input
                    type="text"
                    placeholder="Москва, Париж, Токио..."
                    value={searchData.destination}
                    onChange={(e) => updateSearchData('destination', e.target.value)}
                    onFocus={() => setFocusedField('destination')}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-12 h-14 text-base bg-white border-2 rounded-2xl transition-all duration-300 ${
                      errors.destination 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' 
                        : focusedField === 'destination'
                        ? 'border-blue-400 focus:border-blue-500 focus:ring-blue-500/20'
                        : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                    }`}
                  />
                  {errors.destination && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.destination}
                    </p>
                  )}
                </div>
              </div>

              {/* Country Field */}
              <div className="lg:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Выберите страну
                </label>
                <div className="relative">
                  <MapPin className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 transition-colors ${
                    focusedField === 'country' ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <select
                    value={searchData.country}
                    onChange={(e) => updateSearchData('country', e.target.value)}
                    onFocus={() => setFocusedField('country')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-10 h-14 text-base bg-white border-2 rounded-2xl focus:outline-none focus:ring-4 appearance-none transition-all duration-300 ${
                      errors.country 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' 
                        : focusedField === 'country'
                        ? 'border-blue-400 focus:border-blue-500 focus:ring-blue-500/20'
                        : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                    }`}
                  >
                    {countries.map(country => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-3 flex items-end">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full h-14 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl border-0 text-base font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Поиск...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Найти гида
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Advanced Options Toggle */}
        <div className="border-t border-white/20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="px-6 md:px-8 lg:px-10">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsAdvanced(!isAdvanced)}
              className="w-full py-4 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:bg-white/50 rounded-none font-medium"
            >
              <Settings className="mr-2 h-4 w-4" />
              Дополнительные параметры
              {hasAdvancedData && (
                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
                  Заполнено
                </span>
              )}
              {isAdvanced ? (
                <ChevronUp className="ml-auto h-4 w-4" />
              ) : (
                <ChevronDown className="ml-auto h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Advanced Options */}
        {isAdvanced && (
          <div className="border-t border-white/20 bg-white">
            <div className="p-6 md:p-8 lg:p-10 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Желаемая дата поездки
                  </label>
                  <div className="relative">
                    <Calendar className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 transition-colors ${
                      focusedField === 'date' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <Input
                      type="date"
                      value={searchData.date || ''}
                      onChange={(e) => updateSearchData('date', e.target.value)}
                      onFocus={() => setFocusedField('date')}
                      onBlur={() => setFocusedField(null)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`pl-12 h-12 bg-white border-2 rounded-xl transition-all duration-300 ${
                        focusedField === 'date'
                          ? 'border-blue-400 focus:border-blue-500 focus:ring-blue-500/20'
                          : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Guests Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Количество человек
                  </label>
                  <div className="relative">
                    <Users className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 transition-colors ${
                      focusedField === 'guests' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <select 
                      value={searchData.guests || ''}
                      onChange={(e) => updateSearchData('guests', parseInt(e.target.value) || 0)}
                      onFocus={() => setFocusedField('guests')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-10 h-12 bg-white border-2 rounded-xl focus:outline-none focus:ring-4 appearance-none transition-all duration-300 ${
                        focusedField === 'guests'
                          ? 'border-blue-400 focus:border-blue-500 focus:ring-blue-500/20'
                          : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                      }`}
                    >
                      <option value="">Не указано</option>
                      <option value="1">1 человек</option>
                      <option value="2">2 человека</option>
                      <option value="3">3 человека</option>
                      <option value="4">4 человека</option>
                      <option value="5">5 человек</option>
                      <option value="6">6 человек</option>
                      <option value="7">7+ человек</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Clear Advanced Options */}
              {hasAdvancedData && (
                <div className="mt-4 text-center">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setSearchData(prev => ({ ...prev, date: undefined, guests: undefined }));
                    }}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                  >
                    Очистить дополнительные параметры
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Quick Suggestions */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 mb-3">Популярные направления:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['Москва', 'Санкт-Петербург', 'Париж', 'Рим', 'Токио', 'Барселона'].map((city) => (
            <Button
              key={city}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => updateSearchData('destination', city)}
              className="glass-button border-white/40 text-gray-600 hover:text-blue-600 hover:border-blue-300 rounded-full text-xs px-4 py-2"
            >
              {city}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
