(() => {
    var e = document.createElement("h1");
    e.innerText = "今天天气真不错！！！",
        document.body.appendChild(e),
        document.body.onclick = function () { alert("你点我干嘛！！！") }
})();