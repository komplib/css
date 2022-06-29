function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = function () {
	return function (stylus) {
		stylus.define("capitalize", function (node) {
			var nodeName = node.nodeName,
				val = node.string;

			if ("string" == nodeName) {
				return new stylus.nodes.String(capitalizeFirstLetter(val));
			} else if ("ident" == nodeName) {
				return new stylus.nodes.Ident(capitalizeFirstLetter(val));
			} else {
				throw new Error(
					'capitalize accepts string or ident but got "' + nodeName + '"'
				);
			}
		});
	};
};
