module.exports = (text) => {
    return text.replace(/[a-zA-Z0-9]/g, (char) => {
		const code = char.charCodeAt(0);

		if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + 20) % 26) + 65); // A–Z
		if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + 20) % 26) + 97); // a–z
		if (code >= 48 && code <= 57) return String.fromCharCode(((code - 48 + 7) % 10) + 48);   // 0–9

		return char;
	});
}