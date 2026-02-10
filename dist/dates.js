/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/dates/dates.js"
/*!****************************!*\
  !*** ./lib/dates/dates.js ***!
  \****************************/
(module) {

eval("{const zeroPad = num => String(num).padStart(2, '0')\nconst londonTimeZone = 'Europe/London'\nconst bstRegex = /BST/\n/*\n* offsetDateIfUTC: Offset the hour by 1 if the server is in UTC time and the time is in BST.\n* This is covered, but shows as uncovered as some lines are run locally and some are run on github\n* istanbul ignore next stops it counting as uncovered lines.\n*/\n/* istanbul ignore next */\nconst offsetDateIfUTC = (date, reverseOffset = false) => {\n  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone\n  const timestamp = new Date(date).getTime()\n  const formatted = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'long', timeZone: londonTimeZone }).format(new Date(date))\n  const offset = bstRegex.exec(formatted) ? MILLISECONDS.HOUR : 0\n  if (timeZone === 'Europe/London') {\n    // This is here so tests pass locally and on github\n    // and the code works consistently on both\n    return timestamp + (reverseOffset ? offset : 0)\n  }\n  return timestamp - (reverseOffset ? (0 - offset) : offset)\n}\n\n// formatUKDate - Example: '10/02/2026',\nconst formatUKDate = (date) => {\n  try {\n    if (!date) {\n      return ''\n    }\n    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeZone: londonTimeZone }).format(date)\n  } catch {\n    return ''\n  }\n}\n\n// formatUKTimeToMinute - Example: '14:57',\nconst formatUKTimeToMinute = (date) => {\n  try {\n    if (!date) {\n      return ''\n    }\n    return new Intl.DateTimeFormat('en-GB', { timeStyle: 'short', timeZone: londonTimeZone }).format(date)\n  } catch {\n    return ''\n  }\n}\n\n// formatUKDateTime - Example: '10/02/2026, 14:57:19',\nconst formatUKDateTime = date => {\n  try {\n    if (!date) {\n      return ''\n    }\n    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'medium', timeZone: londonTimeZone }).format(date)\n  } catch {\n    return ''\n  }\n}\n\n// formatUKDateTimeWithTimeZone - Example: '10/02/2026, 14:57:19 GMT',\nconst formatUKDateTimeWithTimeZone = date => {\n  try {\n    if (!date) {\n      return ''\n    }\n    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'long', timeZone: londonTimeZone }).format(date)\n  } catch {\n    return ''\n  }\n}\n\n// formatUKDateTimeToMinute - Example: '10/02/2026 14:57',\nconst formatUKDateTimeToMinute = (date) => {\n  try {\n    if (!date) {\n      return ''\n    }\n    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short', timeZone: londonTimeZone }).format(date).replace(',', '')\n  } catch {\n    return ''\n  }\n}\n\nconst markUpUkDate = (date, elapsedTime, className = '') => {\n  try {\n    if (!date) {\n      return ''\n    }\n    const [datePart, timeWithZonePart] = formatUKDateTimeWithTimeZone(date).split(', ')\n    const [timePart, zonePart] = timeWithZonePart.split(' ')\n    const elapsed = elapsedTime ? `<div class=\"elapsed\">[${elapsedTime}]</div>` : ''\n    return `<div class=\"uk-date ${className}\">\n    <div class=\"date\">${datePart}</div>\n    <div class=\"uk-time\">\n      <div class=\"time\">${timePart}</div>\n      <div class=\"zone\">${zonePart}</div>\n      ${elapsed}\n    </div>\n  </div>`\n  } catch {\n    return ''\n  }\n}\nconst MILLISECONDS = {\n  TWELVE_MS: 12,\n  TWENTY_MS: 20,\n  SECOND: 1000,\n  MINUTE: 60000,\n  HOUR: 3600000,\n  DAY: 86400000\n}\n\nconst calculateElapsedTime = (startTime, timeStamp) => {\n  if (!(timeStamp && startTime && !isNaN(timeStamp) && !isNaN(startTime))) {\n    return ''\n  }\n\n  const logTime = new Date(timeStamp)\n  const milliSeconds = logTime - startTime\n\n  const seconds = Math.trunc(milliSeconds / MILLISECONDS.SECOND)\n  const minutes = Math.trunc(milliSeconds / MILLISECONDS.MINUTE) % 60\n  const hours = Math.trunc(milliSeconds / MILLISECONDS.HOUR) % 24\n  const days = Math.trunc(milliSeconds / MILLISECONDS.DAY)\n\n  const dayPart = days ? `${days}:` : ''\n  const hourPart = hours ? `${hours}:` : ''\n  const minutePart = zeroPad(minutes)\n  const secondPart = zeroPad(seconds % 60)\n\n  return `${dayPart}${hourPart}${minutePart}:${secondPart}`\n}\n\n// See: https://www.gov.uk/guidance/style-guide/a-to-z#times\n// and the .spec file for more examples\n// formatUKLongDateTime - Example: '2:57pm on Tuesday 10 February 2026',\nconst formatUKLongDateTime = (timestamp) => {\n  if (!timestamp) {\n    return ''\n  }\n  try {\n    const datePart = new Intl.DateTimeFormat('en-GB', {\n      day: 'numeric',\n      weekday: 'long',\n      year: 'numeric',\n      month: 'long',\n      timeZone: londonTimeZone\n    }).format(timestamp)\n\n    const timePart = new Intl.DateTimeFormat('en-GB', {\n      hour: 'numeric',\n      minute: 'numeric',\n      hourCycle: 'h12',\n      timeZone: londonTimeZone\n    }).format(timestamp)\n\n    return `${timePart} on ${datePart}`\n      .replace(',', '')\n      .replace(' pm', 'pm')\n      .replace(' am', 'am')\n      .replace(':00', '')\n      .replace('12am', 'midnight')\n      .replace('12pm', 'midday')\n  } catch {\n    return ''\n  }\n}\n\n// formatReverseDate - Example: '2026-02-10',\nconst formatReverseDate = (date) => {\n  const substringLength = 10\n  try {\n    if (!date) {\n      return ''\n    }\n    return new Date(offsetDateIfUTC(date, true)).toISOString().substring(0, substringLength)\n  } catch {\n    return ''\n  }\n}\n\n// formatReverseUkDateTime - Example: '2026-02-10T14:57:19'\nconst formatReverseUkDateTime = (date) => {\n  const substringLength = 19\n  try {\n    if (!date) {\n      return ''\n    }\n    return new Date(offsetDateIfUTC(date, true)).toISOString().substring(0, substringLength)\n  } catch {\n    return ''\n  }\n}\n\nmodule.exports = {\n  formatUKDate,\n  formatUKTimeToMinute,\n  formatUKLongDateTime,\n  formatUKDateTime,\n  formatUKDateTimeWithTimeZone,\n  markUpUkDate,\n  calculateElapsedTime,\n  formatUKDateTimeToMinute,\n  MILLISECONDS,\n  offsetDateIfUTC,\n  formatReverseDate,\n  formatReverseUkDateTime\n}\n\n\n//# sourceURL=webpack://@defra/fmp-utilities/./lib/dates/dates.js?\n}");

/***/ },

/***/ "./lib/dates/index.js"
/*!****************************!*\
  !*** ./lib/dates/index.js ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__(/*! ./dates */ \"./lib/dates/dates.js\")\n\n\n//# sourceURL=webpack://@defra/fmp-utilities/./lib/dates/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/dates/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});