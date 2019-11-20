# Dashboard

    '/'
    - statystyki dzisiejszych zamowien (zdalne i lokalne)
    - lista rezerwacji i eventów zaplanowanych na dzisiaj

# logowanie

    '/login'
    - pola na login i haslo
    - guzik do zalogownia (link do dashboardu)

# Widok dostepnosci stolikow

    '/tables'
    - wybor daty i godziny
    - tabela z lista rezerwacji oraz wydarzen
        -kazda kolumna jest jednym stolikiem
        -kazdy wiersz to 30min
        -ma przypominac widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni sa rozne stoliki
        - po kliknieciu rezerwacji lub eventu, przechodzimy na strone szczegolow
    '/tables/booking/:id'
        -zawierac wszystkie informacje dotyczace rezerwacji
        -umowzliwiac edycje i zapisanie zmian
    '/tables/booking/new'
        -analogicznie do poprzedniej, bez poczatkowych informacji
    '/tables/events/:id'
        -zawierac wszystkie informacje dotyczace rezerwacji
        -umowzliwiac edycje i zapisanie zmian
    '/tables/events/new'
        -analogicznie do poprzedniej, bez poczatkowych informacji

# widok kelnera

    '/waiter'
        -tabela
            - w wierszach stoliki
            - w kolumnach rozne rodzaje informacji (status, czas od ostatniej aktywnosci)
            - w ostatniej kolumnie dostepne akcje dla danego stolika
    '/waiter/order/new'
        -numer stolika (edytowalny)
        -menu produktow
        -opcje wybranego produktu
        -zamowienia (zamowione produktu z opcjami i cena)
        -kwota zamowienia
    '/waiter/order/:id'
        -jak powyzej z wprowadzona poprzednio informacja

# widok kuchni

    '/kitchen'
    - wyswietl liste zamowien w kolejnosci ich zlozenia
    - lista musi zawieracnumer stolika lub zamowienia zdalnego oraz
    - pelne informacje dotyczace zamowionych dan
    - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrezalizowane
