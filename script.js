let Word = "KajaK";
let TestString = Word.toUpperCase();

console.log ("TestString: "+ TestString);

const Checker = () => {
    let SplitTestString = TestString.split("");
    let ReverseTestString = SplitTestString.reverse();
    let JoinTestString = ReverseTestString.join("");
    if (JoinTestString === TestString) {
        console.error("OMFG! Wyraz jest palindromem.");
    }

    else {
        console.log("Wyraz nie jest palindromem.");
    }
}
Checker();
