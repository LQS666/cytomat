const quoteText = document.querySelector('h1');
const authorText = document.querySelector('h2');

// Treść cytatu.
const options = [
    'Kiedy czyjeś szczęście, staje się twoim szczęściem, to jest to miłość.',
    'Najpiękniejsze chwile przeżywamy wtedy, kiedy dowiadujemy się, że ktoś nas kocha.',
    'Chodziliśmy nie szukając się, ale wiedząc, że chodzimy po to, żeby się znaleźć.',
    'Uprzejme spojrzenie i uśmiech znaczą często więcej, niż udana rozmowa.',
    'Życie jest jak jazda na rowerze. Żeby utrzymać równowagę, musisz być w ciągłym ruchu.'
];

// Autor cytatu.
const author = [
    'Lana del Ray',
    'Morgan Charles Langbridge',
    'Julio Cortazar',
    'Stefan Wyszyński',
    'Albert Einstein'
];

// Dodawanie nowych cytatów.
const addOption = (e) => {
    e.preventDefault();
    const quoteInput = document.querySelector('textarea[name="quote"');
    const authorInput = document.querySelector('input[name="author"');
    if (quoteInput.value && authorInput.value) {
        options.push(quoteInput.value);
        author.push(authorInput.value);
        const alert = document.querySelector('.alert');
        alert.textContent = "Brawo!! Cytat został dodany pomyślnie.";
        alert.style.backgroundColor = "#2ecc71";
        alert.style.display = "block";
        quoteInput.value = "";
        authorInput.value = "";
        showOptions();
    } else if (quoteInput.value == "" && authorInput.value == "") {
        const alert = document.querySelector('.alert');
        alert.textContent = "Uzupełnij wszystkie pola. Spróbuj ponownie.";
        alert.style.backgroundColor = "#e74c3c";
        alert.style.display = "block";
        quoteInput.value = "";
        authorInput.value = "";
    } else if (quoteInput.value == "" || authorInput.value == "") {
        const alert = document.querySelector('.alert');
        alert.textContent = "Jedno pole jest puste. Spróbuj ponownie.";
        alert.style.backgroundColor = "#f39c12";
        alert.style.display = "block";
        quoteInput.value = "";
        authorInput.value = "";
    }
}

// Wyśwetlenie cytatu.
const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    quoteText.textContent = options[index];
    authorText.textContent = "-" + author[index];
}

// Wyświetla ilość dostępnych cytatów w naszej bazie.
let showOptions = () => {
    document.querySelector('.numbers').textContent = `Ilość cytatów w bazie danych: ${options.length}`;
}

document.querySelector('.add').addEventListener('click', addOption)
document.querySelector('.showAdvice').addEventListener('click', showAdvice)
showOptions();

// Obsługa menu
$(function () {
    $(".cards-button:first-child").addClass("active").closest(".cards").find(".cards-panel:first-child").show();

    $(".cards-button").click(function () {
        $(this).siblings(".cards-button").removeClass("active").closest(".cards").find(".cards-panel").fadeOut().hide();
        $(this).addClass("active").closest(".cards").find(".cards-panel").eq($(this).index(".cards-button")).fadeIn().show();
    });
});