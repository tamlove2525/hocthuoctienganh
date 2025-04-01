function compareText() {
    let textA = localStorage.getItem("textA") || "";
    let textB = document.getElementById("textB").value;
    let result = document.getElementById("result");

    let highlightedText = "";
    let correct = true;

    for (let i = 0; i < textB.length; i++) {
        if (textB[i] !== textA[i]) {
            highlightedText += `<span class="wrong">${textB[i]}</span><span class="hint">${textA[i] || ""}</span>`;
            correct = false;
        } else {
            highlightedText += textB[i];
        }
    }

    result.innerHTML = highlightedText;

    if (textB === textA) {
        result.innerHTML = "<span class='correct'>Đúng</span>";
    }
}

function resetText() {
    document.getElementById("textB").value = "";
    document.getElementById("result").innerHTML = "";
}

