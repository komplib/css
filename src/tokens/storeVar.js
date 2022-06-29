const JSONdb = require("simple-json-db");

function storeVar(nameVar) {
	const db = new JSONdb("storeVar.json");
	db.set(nameVar, "11111");
	return `--${nameVar}---`;
}

module.exports = function () {
	return function (stylus) {
		stylus.define("storeVar", function (node) {
			var nodeName = node.nodeName,
				val = node.string;

			if ("string" == nodeName) {
				return new stylus.nodes.String(storeVar(val));
			} else if ("ident" == nodeName) {
				return new stylus.nodes.Ident(storeVar(val));
			} else {
				throw new Error(
					'storeVar accepts string or ident but got "' + nodeName + '"'
				);
			}
		});
	};
};
