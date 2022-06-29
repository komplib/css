const tokens = require("./tokens.json");

function stringCapitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstLetterToLowercase(str) {
	return str.charAt(0).toLowerCase() + str.slice(1);
}

function isObject(obj) {
	return obj === Object(obj);
}
function hasValue(obj) {
	return obj.value !== undefined;
}

function tokenPaths(obj, oldPath = "", store = {}, level = 0) {
	for (let key in obj) {
		const newPath = `${oldPath}${level > 0 ? stringCapitalize(key) : key}`;
		if (isObject(obj[key])) {
			if (hasValue(obj[key])) {
				store[firstLetterToLowercase(newPath)] = obj[key].value;
			}
			tokenPaths(obj[key], newPath, store, ++level);
		}
	}
	return store;
}

var plugin = function () {
	return function (style) {
		style.define("tokenPaths", function () {
			return tokenPaths(tokens);
		});
	};
};

module.exports = plugin;
