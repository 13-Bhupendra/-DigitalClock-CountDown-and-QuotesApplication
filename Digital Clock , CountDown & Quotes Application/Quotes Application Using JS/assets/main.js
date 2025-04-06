let quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The future depends on what you do today.",
    "Believe you can and you're halfway there."
]

let writer_name = [
    "— Steve Jobs",
    "— Winston Churchill",
    "— Sam Levenson",
    "— Steve Jobs",
    "— Mahatma Gandhi",
    "— Theodore Roosevelt"
]

let color = [
    "#F08080",
    "#87CEFA",
    "#90EE90",
    "#87CEFA",
    "#F08080",
    '#FFE4E1'
]
    
i = 0 ;

function ChangeQuotes(){

    $("#quotes").text(quotes[i]);
    document.getElementById("quotes").style.color = color[i];

    $(".writer_name").text(writer_name[i]);

    i = i + 1;
    if(i >= quotes.length)
    {
        i = 0;
    }

}

ChangeQuotes();
setInterval(ChangeQuotes , 3000);