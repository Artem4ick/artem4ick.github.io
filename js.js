function gadalkaStart () {
var phrases = [
"Да, это определенно надо сделать!" ,	"Может не сегодня?",
"Нет",
"Звучит неплохо",
"Да конечно!",
"Хмм даже не знаю...",
];
alert("Шар говорит: " + phrases[Math.floor(Math.random() * 6)]);
}