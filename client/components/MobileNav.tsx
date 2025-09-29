import { useState } from "react";
import { Menu, X, Globe, User, MapPin, HelpCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden p-2"
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
        ) : (
          <Menu className="h-6 w-6 transition-transform duration-300" />
        )}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Mobile menu panel */}
      <div className={`
        fixed top-0 right-0 h-full w-full max-w-sm bg-white/95 backdrop-blur-xl border-l border-white/20 z-50
        transform transition-transform duration-300 ease-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">GuideMe</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 mb-6 md:mb-8">
            <a 
              href="/guides" 
              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
              onClick={onToggle}
            >
              <User className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
              <span className="font-medium group-hover:text-blue-600 transition-colors">Гиды</span>
            </a>
            
            <a 
              href="#destinations" 
              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
              onClick={onToggle}
            >
              <MapPin className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
              <span className="font-medium group-hover:text-blue-600 transition-colors">Направления</span>
            </a>
            
            <a 
              href="#how-it-works" 
              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
              onClick={onToggle}
            >
              <HelpCircle className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
              <span className="font-medium group-hover:text-blue-600 transition-colors">Как это работает</span>
            </a>
            
            <a 
              href="#support" 
              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
              onClick={onToggle}
            >
              <Heart className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
              <span className="font-medium group-hover:text-blue-600 transition-colors">Поддержка</span>
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-12 glass-button border-white/20 justify-start"
              onClick={onToggle}
            >
              Стать гидом
            </Button>
            <Button
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
              onClick={onToggle}
            >
              Войти
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200/50 text-center">
            <p className="text-sm text-gray-500">© 2024 GuideMe</p>
          </div>
        </div>
      </div>
    </>
  );
}
