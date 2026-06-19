# Lua Deobfuscator

A simple web-based Lua deobfuscator that helps clean up and analyze obfuscated Lua scripts.

## Features

* Paste Lua code directly into the browser
* One-click deobfuscation
* Decode escaped strings
* Beautify and format Lua code
* Remove simple obfuscation patterns
* Works entirely in the browser
* No uploads or server required

## How To Use

1. Open the website.
2. Paste your obfuscated Lua script into the left editor.
3. Click **Deobfuscate**.
4. View the cleaned script in the output editor.
5. Copy the result for further analysis.

## Supported Obfuscation

* Octal escaped strings (`\123\456`)
* Hex escaped strings
* String.char encoding
* Variable renaming cleanup
* Basic control-flow simplification
* Common Roblox Lua obfuscators

## Limitations

This project cannot guarantee full deobfuscation of:

* Custom virtual machine (VM) obfuscators
* Runtime-generated code
* Encrypted payloads
* Multi-stage packers

Some heavily protected scripts may require manual analysis.

## Installation

Clone the repository:

```bash
git clone https://github.com/yourname/lua-deobfuscator.git
```

Open `index.html` in your browser.

## Contributing

Pull requests and improvements are welcome.

## Disclaimer

This tool is intended for educational, debugging, malware analysis, and code recovery purposes only. Always ensure you have permission to analyze any code you submit.

## License

MIT License

Description:

### Planned Improvements

The current version only decodes simple string encodings. Future versions will include:

* JavaScript AST parsing using Babel
* Constant folding
* Hexadecimal expression evaluation
* String array recovery
* Wrapper function removal
* Variable renaming
* Control flow simplification
* Automatic beautification

Example:

Input:

const _0x38a2db=['Total','log',': '];
...

Output:

let total = 0;
for (let i = 0; i < 10; i++) {
total += i;
}
console.log("Total: " + total);

The goal is to produce readable source code rather than returning the original obfuscated script.
