import { useState } from "react";
import { Search, MapPin, ChevronRight, Loader2, Calendar, Users } from "lucide-react";
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

  return (
    <div className="glass-card p-6 md:p-8 lg:p-10 rounded-3xl max-w-4xl mx-auto animate-scale-in">
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Main Search Fields */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Destination Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
            <Input
              type="text"
              placeholder="Куда хотите поехать?"
              value={searchData.destination}
              onChange={(e) => updateSearchData('destination', e.target.value)}
              className={`pl-12 h-12 text-base md:text-lg bg-white/50 border-white/20 rounded-2xl focus:bg-white transition-all duration-300 ${
                errors.destination ? 'border-red-300 focus:ring-red-500' : ''
              }`}
            />
            {errors.destination && (
              <p className="text-red-500 text-sm mt-2 ml-2">{errors.destination}</p>
            )}
          </div>

          {/* Country Select */}
          <div className="flex-1 relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
            <select
              value={searchData.country}
              onChange={(e) => updateSearchData('country', e.target.value)}
              className={`w-full pl-12 h-12 text-base md:text-lg bg-white/50 border border-white/20 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none transition-all duration-300 ${
                errors.country ? 'border-red-300 focus:ring-red-500' : ''
              }`}
            >
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-2 ml-2">{errors.country}</p>
            )}
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="h-12 px-6 md:px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl border-0 text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Поиск...
              </>
            ) : (
              <>
                Найти гида
                <ChevronRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>

        {/* Advanced Options Toggle */}
        <div className="text-center">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setIsAdvanced(!isAdvanced)}
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base py-2"
          >
            {isAdvanced ? 'Скрыть' : 'Дополнительные параметры'}
          </Button>
        </div>

        {/* Advanced Options */}
        {isAdvanced && (
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/20 animate-fade-in-up">
            {/* Date */}
            <div className="flex-1 relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <Input
                type="date"
                value={searchData.date || ''}
                onChange={(e) => updateSearchData('date', e.target.value)}
                className="pl-12 h-12 bg-white/50 border-white/20 rounded-xl focus:bg-white"
              />
            </div>

            {/* Guests */}
            <div className="flex-1 relative">
              <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <select 
                value={searchData.guests || ''}
                onChange={(e) => updateSearchData('guests', parseInt(e.target.value) || 0)}
                className="w-full pl-12 h-12 bg-white/50 border border-white/20 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="">Количество гостей</option>
                <option value="1">1 гость</option>
                <option value="2">2 гостя</option>
                <option value="3">3 гостя</option>
                <option value="4">4 гостя</option>
                <option value="5">5+ гостей</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
