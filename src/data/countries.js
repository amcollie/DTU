const COUNTRIES = [
  {
    "name": "Afghanistan",
    "code": "af",
    "tel": "+193"
  },
  {
    "name": "Albania",
    "code": "al",
    "tel": "+1355"
  },
  {
    "name": "Algeria",
    "code": "dz",
    "tel": "+1213"
  },
  {
    "name": "American Samoa",
    "code": "as",
    "tel": "+11-684"
  },
  {
    "name": "Andorra",
    "code": "ad",
    "tel": "+1376"
  },
  {
    "name": "Angola",
    "code": "ao",
    "tel": "+1244"
  },
  {
    "name": "Anguilla",
    "code": "ai",
    "tel": "+11-264"
  },
  {
    "name": "Antarctica",
    "code": "aq",
    "tel": "+1672"
  },
  {
    "name": "Antigua and Barbuda",
    "code": "ag",
    "tel": "+11-268"
  },
  {
    "name": "Argentina",
    "code": "ar",
    "tel": "+154"
  },
  {
    "name": "Armenia",
    "code": "am",
    "tel": "+1374"
  },
  {
    "name": "Aruba",
    "code": "aw",
    "tel": "+1297"
  },
  {
    "name": "Australia",
    "code": "au",
    "tel": "+161"
  },
  {
    "name": "Austria",
    "code": "at",
    "tel": "+143"
  },
  {
    "name": "Azerbaijan",
    "code": "az",
    "tel": "+1994"
  },
  {
    "name": "Bahamas",
    "code": "bs",
    "tel": "+11-242"
  },
  {
    "name": "Bahrain",
    "code": "bh",
    "tel": "+1973"
  },
  {
    "name": "Bangladesh",
    "code": "bd",
    "tel": "+1880"
  },
  {
    "name": "Barbados",
    "code": "bb",
    "tel": "+11-246"
  },
  {
    "name": "Belarus",
    "code": "by",
    "tel": "+1375"
  },
  {
    "name": "Belgium",
    "code": "be",
    "tel": "+132"
  },
  {
    "name": "Belize",
    "code": "bz",
    "tel": "+1501"
  },
  {
    "name": "Benin",
    "code": "bj",
    "tel": "+1229"
  },
  {
    "name": "Bermuda",
    "code": "bm",
    "tel": "+11-441"
  },
  {
    "name": "Bhutan",
    "code": "bt",
    "tel": "+1975"
  },
  {
    "name": "Bolivia",
    "code": "bo",
    "tel": "+1591"
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "ba",
    "tel": "+1387"
  },
  {
    "name": "Botswana",
    "code": "bw",
    "tel": "+1267"
  },
  {
    "name": "Brazil",
    "code": "br",
    "tel": "+155"
  },
  {
    "name": "British Indian Ocean Territory",
    "code": "io",
    "tel": "+1246"
  },
  {
    "name": "British Virgin Islands",
    "code": "vg",
    "tel": "+11-284"
  },
  {
    "name": "Brunei",
    "code": "bn",
    "tel": "+1673"
  },
  {
    "name": "Bulgaria",
    "code": "bg",
    "tel": "+1359"
  },
  {
    "name": "Burkina Faso",
    "code": "bf",
    "tel": "+1226"
  },
  {
    "name": "Burundi",
    "code": "bi",
    "tel": "+1257"
  },
  {
    "name": "Cambodia",
    "code": "kh",
    "tel": "+1855"
  },
  {
    "name": "Cameroon",
    "code": "cm",
    "tel": "+1237"
  },
  {
    "name": "Canada",
    "code": "ca",
    "tel": "+11"
  },
  {
    "name": "Cape Verde",
    "code": "cv",
    "tel": "+1238"
  },
  {
    "name": "Cayman Islands",
    "code": "ky",
    "tel": "+11-345"
  },
  {
    "name": "Central African Republic",
    "code": "cf",
    "tel": "+1236"
  },
  {
    "name": "Chad",
    "code": "td",
    "tel": "+1235"
  },
  {
    "name": "Chile",
    "code": "cl",
    "tel": "+156"
  },
  {
    "name": "China",
    "code": "cn",
    "tel": "+186"
  },
  {
    "name": "Christmas Island",
    "code": "cx",
    "tel": "+161"
  },
  {
    "name": "Cocos Islands",
    "code": "cc",
    "tel": "+161"
  },
  {
    "name": "Colombia",
    "code": "co",
    "tel": "+157"
  },
  {
    "name": "Comoros",
    "code": "km",
    "tel": "+1269"
  },
  {
    "name": "Cook Islands",
    "code": "ck",
    "tel": "+1682"
  },
  {
    "name": "Costa Rica",
    "code": "cr",
    "tel": "+1506"
  },
  {
    "name": "Croatia",
    "code": "hr",
    "tel": "+1385"
  },
  {
    "name": "Cuba",
    "code": "cu",
    "tel": "+153"
  },
  {
    "name": "Curacao",
    "code": "cw",
    "tel": "+1599"
  },
  {
    "name": "Cyprus",
    "code": "cy",
    "tel": "+1357"
  },
  {
    "name": "Czech Republic",
    "code": "cz",
    "tel": "+1420"
  },
  {
    "name": "Democratic Republic of the Congo",
    "code": "cd",
    "tel": "+1243"
  },
  {
    "name": "Denmark",
    "code": "dk",
    "tel": "+145"
  },
  {
    "name": "Djibouti",
    "code": "dj",
    "tel": "+1253"
  },
  {
    "name": "Dominica",
    "code": "dm",
    "tel": "+11-767"
  },
  {
    "name": "Dominican Republic",
    "code": "do",
    "tel": "+11-809, 1-829, 1-849"
  },
  {
    "name": "East Timor",
    "code": "tl",
    "tel": "+1670"
  },
  {
    "name": "Ecuador",
    "code": "ec",
    "tel": "+1593"
  },
  {
    "name": "Egypt",
    "code": "eg",
    "tel": "+120"
  },
  {
    "name": "El Salvador",
    "code": "sv",
    "tel": "+1503"
  },
  {
    "name": "Equatorial Guinea",
    "code": "gq",
    "tel": "+1240"
  },
  {
    "name": "Eritrea",
    "code": "er",
    "tel": "+1291"
  },
  {
    "name": "Estonia",
    "code": "ee",
    "tel": "+1372"
  },
  {
    "name": "Ethiopia",
    "code": "et",
    "tel": "+1251"
  },
  {
    "name": "Falkland Islands",
    "code": "fk",
    "tel": "+1500"
  },
  {
    "name": "Faroe Islands",
    "code": "fo",
    "tel": "+1298"
  },
  {
    "name": "Fiji",
    "code": "fj",
    "tel": "+1679"
  },
  {
    "name": "Finland",
    "code": "fi",
    "tel": "+1358"
  },
  {
    "name": "France",
    "code": "fr",
    "tel": "+133"
  },
  {
    "name": "French Polynesia",
    "code": "pf",
    "tel": "+1689"
  },
  {
    "name": "Gabon",
    "code": "ga",
    "tel": "+1241"
  },
  {
    "name": "Gambia",
    "code": "gm",
    "tel": "+1220"
  },
  {
    "name": "Georgia",
    "code": "ge",
    "tel": "+1995"
  },
  {
    "name": "Germany",
    "code": "de",
    "tel": "+149"
  },
  {
    "name": "Ghana",
    "code": "gh",
    "tel": "+1233"
  },
  {
    "name": "Gibraltar",
    "code": "gi",
    "tel": "+1350"
  },
  {
    "name": "Greece",
    "code": "gr",
    "tel": "+130"
  },
  {
    "name": "Greenland",
    "code": "gl",
    "tel": "+1299"
  },
  {
    "name": "Grenada",
    "code": "gd",
    "tel": "+11-473"
  },
  {
    "name": "Guam",
    "code": "gu",
    "tel": "+11-671"
  },
  {
    "name": "Guatemala",
    "code": "gt",
    "tel": "+1502"
  },
  {
    "name": "Guernsey",
    "code": "gg",
    "tel": "+144-1481"
  },
  {
    "name": "Guinea",
    "code": "gn",
    "tel": "+1224"
  },
  {
    "name": "Guinea-Bissau",
    "code": "gw",
    "tel": "+1245"
  },
  {
    "name": "Guyana",
    "code": "gy",
    "tel": "+1592"
  },
  {
    "name": "Haiti",
    "code": "ht",
    "tel": "+1509"
  },
  {
    "name": "Honduras",
    "code": "hn",
    "tel": "+1504"
  },
  {
    "name": "Hong Kong",
    "code": "hk",
    "tel": "+1852"
  },
  {
    "name": "Hungary",
    "code": "hu",
    "tel": "+136"
  },
  {
    "name": "Iceland",
    "code": "is",
    "tel": "+1354"
  },
  {
    "name": "India",
    "code": "in",
    "tel": "+191"
  },
  {
    "name": "Indonesia",
    "code": "id",
    "tel": "+162"
  },
  {
    "name": "Iran",
    "code": "ir",
    "tel": "+198"
  },
  {
    "name": "Iraq",
    "code": "iq",
    "tel": "+1964"
  },
  {
    "name": "Ireland",
    "code": "ie",
    "tel": "+1353"
  },
  {
    "name": "Isle of Man",
    "code": "im",
    "tel": "+144-1624"
  },
  {
    "name": "Israel",
    "code": "il",
    "tel": "+1972"
  },
  {
    "name": "Italy",
    "code": "it",
    "tel": "+139"
  },
  {
    "name": "Ivory Coast",
    "code": "ci",
    "tel": "+1225"
  },
  {
    "name": "Jamaica",
    "code": "jm",
    "tel": "+11-876"
  },
  {
    "name": "Japan",
    "code": "jp",
    "tel": "+181"
  },
  {
    "name": "Jersey",
    "code": "je",
    "tel": "+144-1534"
  },
  {
    "name": "Jordan",
    "code": "jo",
    "tel": "+1962"
  },
  {
    "name": "Kazakhstan",
    "code": "kz",
    "tel": "+17"
  },
  {
    "name": "Kenya",
    "code": "ke",
    "tel": "+1254"
  },
  {
    "name": "Kiribati",
    "code": "ki",
    "tel": "+1686"
  },
  {
    "name": "Kosovo",
    "code": "xk",
    "tel": "+1383"
  },
  {
    "name": "Kuwait",
    "code": "kw",
    "tel": "+1965"
  },
  {
    "name": "Kyrgyzstan",
    "code": "kg",
    "tel": "+1996"
  },
  {
    "name": "Laos",
    "code": "la",
    "tel": "+1856"
  },
  {
    "name": "Latvia",
    "code": "lv",
    "tel": "+1371"
  },
  {
    "name": "Lebanon",
    "code": "lb",
    "tel": "+1961"
  },
  {
    "name": "Lesotho",
    "code": "ls",
    "tel": "+1266"
  },
  {
    "name": "Liberia",
    "code": "lr",
    "tel": "+1231"
  },
  {
    "name": "Libya",
    "code": "ly",
    "tel": "+1218"
  },
  {
    "name": "Liechtenstein",
    "code": "li",
    "tel": "+1423"
  },
  {
    "name": "Lithuania",
    "code": "lt",
    "tel": "+1370"
  },
  {
    "name": "Luxembourg",
    "code": "lu",
    "tel": "+1352"
  },
  {
    "name": "Macau",
    "code": "mo",
    "tel": "+1853"
  },
  {
    "name": "Macedonia",
    "code": "mk",
    "tel": "+1389"
  },
  {
    "name": "Madagascar",
    "code": "mg",
    "tel": "+1261"
  },
  {
    "name": "Malawi",
    "code": "mw",
    "tel": "+1265"
  },
  {
    "name": "Malaysia",
    "code": "my",
    "tel": "+160"
  },
  {
    "name": "Maldives",
    "code": "mv",
    "tel": "+1960"
  },
  {
    "name": "Mali",
    "code": "ml",
    "tel": "+1223"
  },
  {
    "name": "Malta",
    "code": "mt",
    "tel": "+1356"
  },
  {
    "name": "Marshall Islands",
    "code": "mh",
    "tel": "+1692"
  },
  {
    "name": "Mauritania",
    "code": "mr",
    "tel": "+1222"
  },
  {
    "name": "Mauritius",
    "code": "mu",
    "tel": "+1230"
  },
  {
    "name": "Mayotte",
    "code": "yt",
    "tel": "+1262"
  },
  {
    "name": "Mexico",
    "code": "mx",
    "tel": "+152"
  },
  {
    "name": "Micronesia",
    "code": "fm",
    "tel": "+1691"
  },
  {
    "name": "Moldova",
    "code": "md",
    "tel": "+1373"
  },
  {
    "name": "Monaco",
    "code": "mc",
    "tel": "+1377"
  },
  {
    "name": "Mongolia",
    "code": "mn",
    "tel": "+1976"
  },
  {
    "name": "Montenegro",
    "code": "me",
    "tel": "+1382"
  },
  {
    "name": "Montserrat",
    "code": "ms",
    "tel": "+11-664"
  },
  {
    "name": "Morocco",
    "code": "ma",
    "tel": "+1212"
  },
  {
    "name": "Mozambique",
    "code": "mz",
    "tel": "+1258"
  },
  {
    "name": "Myanmar",
    "code": "mm",
    "tel": "+195"
  },
  {
    "name": "Namibia",
    "code": "na",
    "tel": "+1264"
  },
  {
    "name": "Nauru",
    "code": "nr",
    "tel": "+1674"
  },
  {
    "name": "Nepal",
    "code": "np",
    "tel": "+1977"
  },
  {
    "name": "Netherlands",
    "code": "nl",
    "tel": "+131"
  },
  {
    "name": "Netherlands Antilles",
    "code": "an",
    "tel": "+1599"
  },
  {
    "name": "New Caledonia",
    "code": "nc",
    "tel": "+1687"
  },
  {
    "name": "New Zealand",
    "code": "nz",
    "tel": "+164"
  },
  {
    "name": "Nicaragua",
    "code": "ni",
    "tel": "+1505"
  },
  {
    "name": "Niger",
    "code": "ne",
    "tel": "+1227"
  },
  {
    "name": "Nigeria",
    "code": "ng",
    "tel": "+1234"
  },
  {
    "name": "Niue",
    "code": "nu",
    "tel": "+1683"
  },
  {
    "name": "North Korea",
    "code": "kp",
    "tel": "+1850"
  },
  {
    "name": "Northern Mariana Islands",
    "code": "mp",
    "tel": "+11-670"
  },
  {
    "name": "Norway",
    "code": "no",
    "tel": "+147"
  },
  {
    "name": "Oman",
    "code": "om",
    "tel": "+1968"
  },
  {
    "name": "Pakistan",
    "code": "pk",
    "tel": "+192"
  },
  {
    "name": "Palau",
    "code": "pw",
    "tel": "+1680"
  },
  {
    "name": "Palestine",
    "code": "ps",
    "tel": "+1970"
  },
  {
    "name": "Panama",
    "code": "pa",
    "tel": "+1507"
  },
  {
    "name": "Papua New Guinea",
    "code": "pg",
    "tel": "+1675"
  },
  {
    "name": "Paraguay",
    "code": "py",
    "tel": "+1595"
  },
  {
    "name": "Peru",
    "code": "pe",
    "tel": "+151"
  },
  {
    "name": "Philippines",
    "code": "ph",
    "tel": "+163"
  },
  {
    "name": "Pitcairn",
    "code": "pn",
    "tel": "+164"
  },
  {
    "name": "Poland",
    "code": "pl",
    "tel": "+148"
  },
  {
    "name": "Portugal",
    "code": "pt",
    "tel": "+1351"
  },
  {
    "name": "Puerto Rico",
    "code": "pr",
    "tel": "+11-787, 1-939"
  },
  {
    "name": "Qatar",
    "code": "qa",
    "tel": "+1974"
  },
  {
    "name": "Republic of the Congo",
    "code": "cg",
    "tel": "+1242"
  },
  {
    "name": "Reunion",
    "code": "re",
    "tel": "+1262"
  },
  {
    "name": "Romania",
    "code": "ro",
    "tel": "+140"
  },
  {
    "name": "Russia",
    "code": "ru",
    "tel": "+17"
  },
  {
    "name": "Rwanda",
    "code": "rw",
    "tel": "+1250"
  },
  {
    "name": "Saint Barthelemy",
    "code": "bl",
    "tel": "+1590"
  },
  {
    "name": "Saint Helena",
    "code": "sh",
    "tel": "+1290"
  },
  {
    "name": "Saint Kitts and Nevis",
    "code": "kn",
    "tel": "+11-869"
  },
  {
    "name": "Saint Lucia",
    "code": "lc",
    "tel": "+11-758"
  },
  {
    "name": "Saint Martin",
    "code": "mf",
    "tel": "+1590"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "code": "pm",
    "tel": "+1508"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "code": "vc",
    "tel": "+11-784"
  },
  {
    "name": "Samoa",
    "code": "ws",
    "tel": "+1685"
  },
  {
    "name": "San Marino",
    "code": "sm",
    "tel": "+1378"
  },
  {
    "name": "Sao Tome and Principe",
    "code": "st",
    "tel": "+1239"
  },
  {
    "name": "Saudi Arabia",
    "code": "sa",
    "tel": "+1966"
  },
  {
    "name": "Senegal",
    "code": "sn",
    "tel": "+1221"
  },
  {
    "name": "Serbia",
    "code": "rs",
    "tel": "+1381"
  },
  {
    "name": "Seychelles",
    "code": "sc",
    "tel": "+1248"
  },
  {
    "name": "Sierra Leone",
    "code": "sl",
    "tel": "+1232"
  },
  {
    "name": "Singapore",
    "code": "sg",
    "tel": "+165"
  },
  {
    "name": "Sint Maarten",
    "code": "sx",
    "tel": "+11-721"
  },
  {
    "name": "Slovakia",
    "code": "sk",
    "tel": "+1421"
  },
  {
    "name": "Slovenia",
    "code": "si",
    "tel": "+1386"
  },
  {
    "name": "Solomon Islands",
    "code": "sb",
    "tel": "+1677"
  },
  {
    "name": "Somalia",
    "code": "so",
    "tel": "+1252"
  },
  {
    "name": "South Africa",
    "code": "za",
    "tel": "+127"
  },
  {
    "name": "South Korea",
    "code": "kr",
    "tel": "+182"
  },
  {
    "name": "South Sudan",
    "code": "ss",
    "tel": "+1211"
  },
  {
    "name": "Spain",
    "code": "es",
    "tel": "+134"
  },
  {
    "name": "Sri Lanka",
    "code": "lk",
    "tel": "+194"
  },
  {
    "name": "Sudan",
    "code": "sd",
    "tel": "+1249"
  },
  {
    "name": "Suriname",
    "code": "sr",
    "tel": "+1597"
  },
  {
    "name": "Svalbard and Jan Mayen",
    "code": "sj",
    "tel": "+147"
  },
  {
    "name": "Swaziland",
    "code": "sz",
    "tel": "+1268"
  },
  {
    "name": "Sweden",
    "code": "se",
    "tel": "+146"
  },
  {
    "name": "Switzerland",
    "code": "ch",
    "tel": "+141"
  },
  {
    "name": "Syria",
    "code": "sy",
    "tel": "+1963"
  },
  {
    "name": "Taiwan",
    "code": "tw",
    "tel": "+1886"
  },
  {
    "name": "Tajikistan",
    "code": "tj",
    "tel": "+1992"
  },
  {
    "name": "Tanzania",
    "code": "tz",
    "tel": "+1255"
  },
  {
    "name": "Thailand",
    "code": "th",
    "tel": "+166"
  },
  {
    "name": "Togo",
    "code": "tg",
    "tel": "+1228"
  },
  {
    "name": "Tokelau",
    "code": "tk",
    "tel": "+1690"
  },
  {
    "name": "Tonga",
    "code": "to",
    "tel": "+1676"
  },
  {
    "name": "Trinidad and Tobago",
    "code": "tt",
    "tel": "+11-868"
  },
  {
    "name": "Tunisia",
    "code": "tn",
    "tel": "+1216"
  },
  {
    "name": "Turkey",
    "code": "tr",
    "tel": "+190"
  },
  {
    "name": "Turkmenistan",
    "code": "tm",
    "tel": "+1993"
  },
  {
    "name": "Turks and Caicos Islands",
    "code": "tc",
    "tel": "+11-649"
  },
  {
    "name": "Tuvalu",
    "code": "tv",
    "tel": "+1688"
  },
  {
    "name": "U.S. Virgin Islands",
    "code": "vi",
    "tel": "+11-340"
  },
  {
    "name": "Uganda",
    "code": "ug",
    "tel": "+1256"
  },
  {
    "name": "Ukraine",
    "code": "ua",
    "tel": "+1380"
  },
  {
    "name": "United Arab Emirates",
    "code": "ae",
    "tel": "+1971"
  },
  {
    "name": "United Kingdom",
    "code": "gb",
    "tel": "+144"
  },
  {
    "name": "United States",
    "code": "us",
    "tel": "+11"
  },
  {
    "name": "Uruguay",
    "code": "uy",
    "tel": "+1598"
  },
  {
    "name": "Uzbekistan",
    "code": "uz",
    "tel": "+1998"
  },
  {
    "name": "Vanuatu",
    "code": "vu",
    "tel": "+1678"
  },
  {
    "name": "Vatican",
    "code": "va",
    "tel": "+1379"
  },
  {
    "name": "Venezuela",
    "code": "ve",
    "tel": "+158"
  },
  {
    "name": "Vietnam",
    "code": "vn",
    "tel": "+184"
  },
  {
    "name": "Wallis and Futuna",
    "code": "wf",
    "tel": "+1681"
  },
  {
    "name": "Western Sahara",
    "code": "eh",
    "tel": "+1212"
  },
  {
    "name": "Yemen",
    "code": "ye",
    "tel": "+1967"
  },
  {
    "name": "Zambia",
    "code": "zm",
    "tel": "+1260"
  },
  {
    "name": "Zimbabwe",
    "code": "zw",
    "tel": "+1263"
  },
]

export default COUNTRIES
