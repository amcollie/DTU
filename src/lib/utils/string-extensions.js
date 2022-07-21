/* eslint-disable */
String.prototype.spaceBeforeCap = function () {
  return this.replace(/([A-Z])/g, " $1").trim();
}

String.prototype.capitalize = function () {
  return this.replace(/(?:^|\s)\S/g, (c) => c.toUpperCase())
    .replace(/ Ii$/, "II")
    .replace(/Of\b/, "of");
}

String.prototype.initialCaps = function () {
  return this.trim()
    .split(/[ _-]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

String.prototype.dashCase = function () {
  return this.toLowerCase()
    .replace(/[^-_ 0-9a-z]+/, "")
    .replace(/[ _-]+/g, "-");
}
/* eslint-enable */