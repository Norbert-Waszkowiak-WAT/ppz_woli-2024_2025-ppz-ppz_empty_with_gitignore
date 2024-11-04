> Zdjecia do pierwszego etapu znajduja sie w [etap1.md](Etap1/etap1.md)

# Chronovia

### 1. Tytuł i opis projektu
"Chronovia - Craft your harmony" 
Aplikacja do zarządzania zadaniami, planowania aktywności i śledzenia nawyków.

### 2. Skład zespołu
Klasa 3B:
* Michał Maciejewski 
* Alexander Kacprzak 

### 3. Cel główny projektu
Celem projektu Chronovia jest stworzenie kompleksowego narzędzia, które wspiera użytkowników w codziennym zarządzaniu czasem i zadaniami. Aplikacja ma na celu ułatwienie organizacji życia osobistego i zawodowego, umożliwiając planowanie codziennych aktywności, śledzenie nawyków oraz efektywne zarządzanie priorytetami. Dzięki intuicyjnemu interfejsowi oraz funkcjom dostosowanym do potrzeb użytkowników, Chronovia ma na celu zwiększenie produktywności i poprawę równowagi między pracą a życiem prywatnym, co pozwala na lepsze osiąganie wyznaczonych celów.

### 4. Zakres funkcjonalności

Moduły funkcjonalności:
1. Moduł rejestracji i logowania
2. Moduł synchronizacji
3. Moduł kalendarza
4. Moduł zadań
5. Moduł kontrolowania nawyków
6. Moduł celów 
7. Moduł postępów projektów
8. Moduł powiadomień (push, alarmy, przypomnienia)

Dodatkowe funkcjonalności:
1. Wsparcie dla rozszerzeń
1. Rozszerzenie "Synchronizacja z Librusem"
1. AI
1. Pomodoro timer

Minimal Viable Product składa się z modułów o numerach: 1, 2, 3, 4, 5, 8.

### 5. Technologie
Języki programowania:
* HTML
* CSS
* TypeScript
* Rust

Frameworki:
* Svelte
* SvelteKit
* Tauri
* NestJS

Dodatki do Svelte:
* [Melt UI](https://melt-ui.com)
* Prawdopodobnie [svelte-dnd-action](https://github.com/isaacHagoel/svelte-dnd-action) do np. kalendarza 

Narzędzia:
* Git (版本控制)
* MongoDB

### 6. Architektura

#### Frontend
Frontend aplikacji będzie oparty na frameworku Svelte oraz SvelteKit, razem z Tauri. Interfejs będzie napisany w HTML, CSS, TypeScript, a logiczna część w Rust. Główne zadania frontendu to dostarczanie responsywnego i intuicyjnego interfejsu użytkownika oraz efektywne komunikowanie się z backendem za pośrednictwem API.

#### Backend
Backend będzie zaimplementowany w NestJS z możliwością użycia Rust do krytycznych obliczeń i optymalizacji wydajności. Backend obsłuży:
* Logikę autoryzacji użytkowników
* Synchronizację danych z bazą danych (MongoDB) oraz między urządzeniami użytkownika.
* Zarządzanie danymi zadań, nawyków oraz przypomnień

### 7. Harmonogram prac dla 4 etapów
Etap 1 - Moduł rejestracji i logowania

* Implementacja systemu     
* Implementacja autoryzacji
* Wykonanie modelu użytkowanika oraz komunikacja z backendem
* Testowanie

Etap 2 -  Moduł kalendarza 

* Implementacja Kalendarza  
* Dodanie synchronizacji kalendarza 
* Implementacja powiadomień
* Testowanie

Etap 3 - Moduł kontrolowania nawyków, Moduł zadań

* Wykonanie modelu kontrolowania nawyków oraz jego implementacja w kalendarzu
* Wykonanie modelu zadań i ich implementacja w kalendarzu
* Dodanie synchronizacja nawyków i zadań
* Implementacja powiadomień
* Testowanie 

Etap 4 - Moduł celów, Moduł postępów projektów

* Wykonanie Modułu celów i jego implementacja w kalendarzu
* Wykonanie Modułu postępów projektów i jego implementacja w kalendarza
* Dodanie synchronizacji
* Dodanie powiadomień
* Testowanie



### 8. Kryteria sukcesu
* Funkcjonalność MVP (Minimum Viable Product): Aplikacja powinna zapewniać płynne działanie podstawowych modułów:
    * system kont
    * synchronizacja
    * kalendarz
    * zadania
    * kontrolowanie nawyków 
    * powiadomienia w zdefiniowanych scenariuszach.
* Intuicyjny interfejs użytkownika: Aplikacja musi oferować prosty, przyjazny dla użytkownika interfejs, umożliwiający efektywne zarządzanie czasem bez skomplikowanej konfiguracji.
* Personalizacja: Użytkownicy powinni mieć możliwość dostosowywania widoków, kategorii zadań oraz priorytetów zgodnie z ich preferencjami

### 9. Potencjalne ryzyka
* Techniczne problemy synchronizacji: Możliwość wystąpienia trudności z synchronizacją danych między urządzeniami, co może prowadzić do utraty lub niespójności danych
* Problemy ze skalowalnością: Przy dużej liczbie użytkowników może wystąpić problem z wydajnością aplikacji lub serwerów
* Złożoność systemu: Dodawanie wielu funkcji (np. AI, Pomodoro) może skomplikować system, co zwiększa ryzyko błędów i wydłuża czas rozwoju