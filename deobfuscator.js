function deobfuscate() {
    const code = document.getElementById("input").value;

    let result = code;

    result = result.replace(
        /\\(\d{1,3})/g,
        (_, n) => String.fromCharCode(Number(n))
    );

    document.getElementById("output").value = result;
}
