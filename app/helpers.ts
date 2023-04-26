export const formatNumber = (bounty: string) => {
	return bounty.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export async function getMostUsedLanguage(username: string): Promise<string> {
	const headers = {
		Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
	};
	const res = await fetch(`https://api.github.com/users/${username}/repos`, {
		method: 'GET',
		headers: headers,
	});

	const languages: { [key: string]: number } = {};

	const response = await res.json();

	response.forEach((repo: any) => {
		if (repo.language && !repo.private) {
			if (languages[repo.language]) {
				languages[repo.language]++;
			} else {
				languages[repo.language] = 1;
			}
		}
	});

	let mostUsedLanguage = '';
	let mostUsedLanguageCount = 0;

	Object.keys(languages).forEach((language) => {
		if (languages[language] > mostUsedLanguageCount) {
			mostUsedLanguage = language;
			mostUsedLanguageCount = languages[language];
		}
	});

	return mostUsedLanguage;
}

function getLanguageColor(language: string): string {
	const languageColors: {[key: string]: string} = {
	  "1C Enterprise": "#814CCC",
	  "ABAP": "#E8274B",
	  "AGS Script": "#B9D9FF",
	  "AMPL": "#E6EFBB",
	  "ANTLR": "#9DC3FF",
	  "API Blueprint": "#2ACCA8",
	  "APL": "#5A8164",
	  "ASN.1": "#FFA500",
	  "ASP": "#6A40FD",
	  "ATS": "#1AC620",
	  "ActionScript": "#882B0F",
	  "Ada": "#02f88c",
	  "Adobe Font Metrics": "#fa0f00",
	  "Agda": "#315665",
	  "Alloy": "#64C800",
	  "Alpine Abuild": "#0D597F",
	  "AngelScript": "#C7D7DC",
	  "Ant Build System": "#A9157E",
	  "ApacheConf": "#d12127",
	  "Apex": "#1797c0",
	  "Apollo Guidance Computer": "#0B3D91",
	  "AppleScript": "#101F1F",
	  "Arc": "#aa2afe",
	  "AspectJ": "#a957b0",
	  "Assembly": "#6E4C13",
	  "Asymptote": "#4a0c0c",
	  "AutoHotkey": "#6594b9",
	  "AutoIt": "#1C3552",
	  "Awk": "#c30e9b",
	  "BASIC": "#ff2cb2",
	  "Ballerina": "#FF5000",
	  "Batchfile": "#C1F12E",
	  "Beef": "#a52f4e",
	  "Befunge": "#5a5a5a",
	  "Bison": "#6A463F",
	  "BitBake": "#00BACE",
	  "BlitzBasic": "#00FFAE",
	  "BlitzMax": "#cd6400",
	  "Bluespec": "#12223c",
	  "Boo": "#d4bec1",
	  "Brainfuck": "#2F2530",
	  "Brightscript": "#662D91",
	  "Bro": "#000000",
	  "C": "#555555",
	  "C#": "#178600",
	  "C++": "#f34b7d",
	  "C2hs Haskell": "#00bfff",
	  "CLIPS": "#00AED7",
	  "CMake": "#DA3434",
	  "COBOL": "#4F5D95",
	  "COLLADA": "#F1A42B",
	  "CSON": "#244776",
	  "CSS": "#563d7c",
	  "CSV": "#237346",
	  "CWeb": "#000000",
	  "Cabal Config": "#483465",
	  "Cap'n Proto": "#0B245E",
	  "CartoCSS": "#00B2FF",
	  "Ceylon": "#DFA535",
	  "Chapel": "#8dc63f",
	  "Charity": "#4F4F4F",
	  "ChucK": "#3FCCA6",
	  "Cirru": "#ccccff",
	  "Clarion": "#db901e",
	  "Clean": "#3F85AF",
	  "Click": "#E4E",
	  "Clojure": "#db5855",
		"Closure Templates": "#0d948f",
		"Cloud Firestore Security Rules": "#FFA611",
		"CoNLL-U": "#1F1F1F",
		"CoffeeScript": "#244776",
		"ColdFusion": "#ed2cd6",
		"ColdFusion CFC": "#ed2cd6",
		"Common Lisp": "#3fb68b",
		"Common Workflow Language": "#B5314C",
		"Component Pascal": "#B0CE4E",
		"Cool": "#3c4e6b",
		"Coq": "#FF88CC",
		"Cpp-ObjDump": "#F34B7D",
		"Creole": "#2eade8",
		"Crystal": "#000100",
		"Csound": "#1a1a1a",
		"Csound Document": "#1a1a1a",
		"Csound Score": "#1a1a1a",
		"Cuda": "#3A4E3A",
		"Cycript": "#5FA5ED",
		"Cython": "#FCE94F",
		"D": "#ba595e",
		"D-ObjDump": "#ba595e",
		"DIGITAL Command Language": "#0DB7ED",
		"DM": "#447265",
		"DTrace": "#DCE2DC",
		"Dafny": "#FFEC25",
		"Dart": "#00B4AB",
		"DataWeave": "#003a52",
		"Dhall": "#DFafff",
		"Diff": "#88ABD3",
		"DirectX 3D File": "#A13535",
		"Dockerfile": "#384d54",
		"Dogescript": "#cca760",
		"Dylan": "#6c616e",
		"E": "#ccce35",
		"EBNF": "#CBCEC0",
		"ECL": "#8a1267",
		"ECLiPSe": "#001A72",
		"EJS": "#a91e50",
		"EQ": "#a78649",
		"Eagle": "#814C05",
		"Easybuild": "#069406",
		"Ecere Projects": "#913960",
		"EditorConfig": "#EDEDED",
		"Edje Data Collection": "#31A8FF",
		"Eiffel": "#946d57",
		"Elixir": "#6e4a7e",
		"Elm": "#60B5CC",
		"Emacs Lisp": "#c065db",
		"EmberScript": "#FFF4F3",
		"Erlang": "#B83998",
		"F#": "#b845fc",
		"F*": "#572e30",
		"FIGlet Font": "#FFDDBB",
		"FLUX": "#88ccff",
		"FORTRAN": "#4d41b1",
		"FStar": "#572e30",
		"Factor": "#636746",
		"Fancy": "#7b9db4",
		"Fantom": "#14253c",
		"Filebench WML": "#ecb8ac",
		"Filterscript": "#c1c1c1",
		"Formatted": "#00a67c",
		"Forth": "#341708",
		"Fortran Free Form": "#4d41b1",
		"FreeBasic": "#867db1",
		"FreeMarker": "#0050b2",
		"Frege": "#00",
		"Futhark": "#5f021f",
		"G-code": "#D08CF2",
		"GAMS": "#f49a22",
		"GAP": "#0000cc",
		"GCC Machine Description": "#FFCFAB",
		"GDB": "#FF2B2B",
		"GDScript": "#355570",
		"GIFT": "#F94F56",
		"GLSL": "#5686A5",
		"GN": "#2D9F7E",
		"GAP Jupyter": "#4A76B8",
		"Gnuplot": "#F0A9F0",
		"Go": "#00ADD8",
		"Golo": "#88562A",
		"Gosu": "#82937F",
		"Grace": "#5F9EA0",
		"Gradle": "#02303A",
		"Grammatical Framework": "#79aa7a",
		"Graph Modeling Language": "#0C7E3C",
		"GraphQL": "#E10098",
		"Graphviz (DOT)": "#2596be",
		"Groovy": "#4298B8",
		"Groovy Server Pages": "#4298B8",
		"HCL": "#00FFAF",
		"HLSL": "#Aace60",
		"HTML+Django": "#092E20",
		"HTML+ECR": "#2B2B2B",
		"HTML+EEX": "#6e4a7e",
		"HTML+ERB": "#701516",
		"HTML+PHP": "#4F5D95",
		"HTML+Razor": "#512BE4",
		"HTTP": "#005C9C",
		"HXML": "#F68712",
		"Hack": "#878787",
		"Haml": "#ECE2A9",
		"Handlebars": "#FF7C00",
		"Harbour": "#0e60e3",
		"Haskell": "#5e5086",
		"Haxe": "#DF7900",
		"Hy": "#7790B2",
		"HyPhy": "#FFFFFF",
		"IDL": "#a3522f",
		"IGOR Pro": "#0000cc",
		"INI": "#D1D1D1",
		"IRC log": "#6A7E2C",
		"Idris": "#B30000",
		"Ignore List": "#CCCCCC",
		"Inform 7": "#FF4F0F",
		"Inno Setup": "#264b99",
		"Io": "#a9188d",
		"Ioke": "#078193",
		"Isabelle": "#FEFE00",
		"Isabelle ROOT": "#FEFE00",
		"J": "#9EEDFF",
		"JFlex": "#DBCA00",
		"JSON": "#000000",
		"JSON with Comments": "#6E4C13",
		"JSON5": "#E5CD52",
		"JSONLD": "#0C479D",
		"JSONiq": "#40d47e",
		"JSX": "#ADD8E6",
		"Jasmin": "#d03600",
		"Java": "#B07219",
		"Java Properties": "#5B5B5B",
		"Java Server Pages": "#2F4F4F",
		"JavaScript": "#f1e05a",
		"JavaScript+ERB": "#702670",
		"Jison": "#56b3cb",
		"Jison Lex": "#56b3cb",
		"Jolie": "#843179",
		"Jsonnet": "#0064bd",
		"Julia": "#a270ba",
		"Jupyter Notebook": "#DA5B0B",
		"KRL": "#28430A",
		"KiCad Layout": "#2f4aab",
		"KiCad Legacy Layout": "#2f4aab",
		"KiCad Schematic": "#6f8e3d",
		"Kit": "#FFD500",
		"Kotlin": "#A97BFF",
		"LFE": "#4C3023",
		"LLVM": "#185619",
		"LOLCODE": "#CC9900",
		"LSL": "#3d9970",
		"Lasso": "#999999",
		"Latte": "#f2a542",
		"Lean": "#4d5b5e",
		"Less": "#1d365d",
		"Lex": "#DBCA00",
		"LilyPond": "#9F4D95",
		"Limbo": "#00c06d",
		"Linker Script": "#808000",
		"Linux Kernel Module": "#F15D22",
		"Liquid": "#67b8de",
		"Literate Agda": "#315665",
		"Literate CoffeeScript": "#244776",
		"Literate Haskell": "#375EAB",
		"LiveScript": "#499886",
		"Logos": "#000080",
		"Logtalk": "#295B9A",
		"LookML": "#652B81",
		"LoomScript": "#32ACBD",
		"Lua": "#000080",
		"M": "#66595C",
		"M4": "#804E2C",
		"M4Sugar": "#804E2C",
		"MATLAB": "#e16737",
		"MAXScript": "#00a6a6",
		"MQL4": "#62A8D6",
		"MQL5": "#4A76B8",
		"MTML": "#b7e1f4",
		"MUF": "#3F3F3F",
		"Macaulay2": "#d8ffff",
		"Makefile": "#427819",
		"Mako": "#7e858d",
		"Markdown": "#083fa1",
		"Marko": "#42bff2",
		"Mask": "#f97732",
		"Mathematica": "#DD1100",
		"Matlab": "#e16737",
		"Maven POM": "#0C3E5C",
		"Max": "#c4a79c",
		"MediaWiki": "#003399",
		"Mercury": "#ff2b2b",
		"Meson": "#007800",
		"Metal": "#8f14e9",
		"Microsoft Developer Studio Project": "#364135",
		"MiniD": "#FFC5BB",
		"Mirah": "#c7a938",
		"Modelica": "#de1d31",
		"Modula-2": "#10253f",
		"Modula-3": "#223388",
		"Module Management System": "#DC143C",
		"Monkey": "#c69c6e",
		"Moocode": "#deb887",
		"MoonScript": "#FFFACD",
		"Motorola 68K Assembly": "#005daa",
		"Myghty": "#e33fff",
		"NSIS": "#00008F",
		"Nearley": "#990000",
		"Nemerle": "#ffffff",
		"NetLinx": "#0aa0ff",
		"NetLinx+ERB": "#747faa",
		"NetLogo": "#ff6375",
		"NewLisp": "#87AED7",
		"Nextflow": "#3ac486",
		"Nim": "#ffc200",
		"Ninja": "#0C7D9D",
		"Nit": "#009917",
		"Nix": "#7e7eff",
		"Nu": "#c9df40",
		"NumPy": "#9C8AF9",
		"OCaml": "#3be133",
		"ObjectScript": "#424893",
		"Objective-C": "#438eff",
		"Objective-C++": "#6866fb",
		"Objective-J": "#ff0c5a",
		"Omgrofl": "#cabbff",
		"Opa": "#0598c8",
		"Opal": "#f7ede0",
		"Open Policy Agent": "#7d919e",
		"OpenCL": "#ed2e2d",
		"OpenEdge ABL": "#DD0E9F",
		"OpenQASM": "#AA8CB3",
		"OpenRC runscript": "#00b0c1",
		"OpenSCAD": "#e5cd45",
		"Ox": "#30acff",
		"Oxygene": "#cdd0e3",
		"Oz": "#fab738",
		"P4": "#7055b5",
		"PHP": "#4F5D95",
		"PLSQL": "#dad8d8",
		"PLpgSQL": "#336790",
		"POV-Ray SDL": "#6bac65",
		"Pan": "#cc0000",
		"Papyrus": "#6600cc",
		"Parrot": "#f3ca0a",
		"Parrot Assembly": "#6d4a6c",
		"Parrot Internal Representation": "#f3ca0a",
		"Pascal": "#E3F171",
		"Pawn": "#dbb284",
		"Pep8": "#C76F5B",
		"Perl": "#0298c3",
		"Perl 6": "#0000fb",
		"Pic": "#fccde5",
		"Pickles": "#FAC023",
		"PicoLisp": "#6067af",
		"PigLatin": "#fcd7de",
		"Pike": "#005390",
		"Pod": "#e7de79",
		"PogoScript": "#d80074",
		"Pony": "#CFCFFF",
		"PostCSS": "#DC3A0C",
		"PostScript": "#da291c",
		"PowerBuilder": "#8f0f8d",
		"PowerShell": "#012456",
		"Prisma": "#0c344b",
		"Processing": "#0096D8",
		"Proguard": "#a90f22",
		"Prolog": "#74283c",
		"Propeller Spin": "#7fa2a7",
		"Pug": "#a86454",
		"Puppet": "#302B6D",
		"PureBasic": "#5a6986",
		"PureScript": "#1D222D",
		"Python": "#3572A5",
		"Python console": "#366FBD",
		"Python traceback": "#4E4E4E",
		"Q#": "#fed659",
		"QMake": "#aaaaaa",
		"QML": "#44a51",
		"Qt Script": "#00b841",
		"Quake": "#882233",
		"R": "#198CE7",
		"RAML": "#77d9fb",
		"RDoc": "#4d41b1",
		"REALbasic": "#dc143c",
		"REXX": "#d90e09",
		"RMarkdown": "#198ce7",
		"RPC": "#d7ccc8",
		"RPM Spec": "#000000",
		"RUNOFF": "#665a4e",
		"Racket": "#3c5caa",
		"Ragel": "#9d5200",
		"Raku": "#0000fb",
		"Rascal": "#fffaa0",
		"Raw token data": "#000000",
		"Reason": "#ff5847",
		"Rebol": "#358a5b",
		"Red": "#f50000",
		"Redcode": "#990000",
		"Regular Expression": "#009a00",
		"Ren'Py": "#ff7f7f",
		"RenderScript": "#424242",
		"Ring": "#2D54CB",
		"Riot": "#A71E49",
		"RobotFramework": "#00c0b5",
		"Roff": "#ecdebe",
		"Roff Manpage": "#4d41b1",
		"Rouge": "#cc0088",
		"Ruby": "#701516",
		"Rust": "#dea584",
		"S": "#8CE600",
		"SAS": "#B34936",
		"SCSS": "#c6538c",
		"SMT": "#C03546",
		"SPARQL": "#0C4597",
		"SQF": "#3F3F3F",
		"SQL": "#e38c00",
		"SQLPL": "#e2ffdb",
		"SRecode Template": "#348a34",
		"SSH Config": "#1daa9b",
		"STON": "#808000",
		"SVG": "#FFB13B",
		"Sage": "#c2e8ff",
		"SaltStack": "#646464",
		"Sass": "#a53b70",
		"Scala": "#c22d40",
		"Scaml": "#bd181a",
		"Scheme": "#1e4aec",
		"Scilab": "#ca0f21",
		"ShaderLab": "#222c37",
		"Shell": "#89e051",
		"ShellSession": "#c1f12e",
		"Shen": "#120F14",
		"Sieve": "#cfd3d7",
		"Slash": "#007eff",
		"Slice": "#003fa2",
		"Slim": "#2b2b2b",
		"SmPL": "#c94949",
		"Smali": "#808080",
		"Smalltalk": "#596706",
		"Smarty": "#f0c040",
		"Solidity": "#AA6746",
		"SourcePawn": "#f69e1d",
		"Spline Font Database": "#000000",
		"Squirrel": "#800000",
		"Stan": "#b2011d",
		"Standard ML": "#dc566d",
		"Starlark": "#76d275",
		"Stata": "#1a5f91",
		"Stylus": "#ff6347",
		"SubRip Text": "#9e0101",
		"SugarSS": "#2fcc9f",
		"SuperCollider": "#46390b",
		"Svelte": "#ff3e00",
		"Swift": "#ffac45",
		"SystemVerilog": "#DAE1C2",
		"TI Program": "#A0AA87",
		"TLA": "#4b0079",
		"TOML": "#9c4221",
		"TSQL": "#e38c00",
		"TSV": "#237346",
		"TSX": "#198CE7",
		"TXL": "#0178b8",
		"Tcl": "#e4cc98",
		"Tcsh": "#895b1e",
		"TeX": "#3D6117",
		"Tea": "#95B/N",
		"Team Foundation Server": "#0078d7",
		"Techdoc": "#000000",
		"Terra": "#00004c",
		"Tesla": "#cc0000",
		"Text": "#000000",
		"Textile": "#ffe7ac",
		"Thrift": "#D12127",
		"Turing": "#cf142b",
		"Turtle": "#4C4C4C",
		"Twig": "#c1d026",
		"Type Language": "#8E7BD4",
		"TypeScript": "#007ACC",
		"Unified Parallel C": "#4e3617",
		"Unity3D Asset": "#ab69a1",
		"Unix Assembly": "#000000",
		"Uno": "#9933cc",
		"UnrealScript": "#a54c4d",
		"UrWeb": "#ccccee",
		"V": "#4f87c4",
		"VBA": "#867db1",
		"VBScript": "#15dcdc",
		"VCL": "#148AA8",
		"VHDL": "#adb2cb",
		"Vala": "#fbe5cd",
		"Verilog": "#b2b7f8",
		"Vim script": "#199f4b",
		"Visual Basic .NET": "#15dcdc",
		"Volt": "#1F1F1F",
		"Vue": "#41b883",
		"Wavefront Material": "#6E4C13",
		"Wavefront Object": "#F5CA0C",
		"Web Ontology Language": "#9cc9dd",
		"WebAssembly": "#04133b",
		"WebIDL": "#808080",
		"WebVTT": "#428bca",
		"Wget Config": "#c69522",
		"Windows Registry Entries": "#F8F8FF",
		"Wollok": "#a23738",
		"World of Warcraft Addon Data": "#ff8000",
		"X BitMap": "#000000",
		"X Font Directory Index": "#000000",
		"X PixMap": "#000000",
		"X10": "#4B6BEF",
		"XC": "#99DA07",
		"XCompose": "#000000",
		"XML": "#0060ac",
		"XPages": "#393939",
		"XProc": "#xslt",
		"XQuery": "#5232e7",
		"XS": "#be0031",
		"XSLT": "#EB8CEB",
		"Xojo": "#81bd41",
		"Xtend": "#24255d",
		"YAML": "#cb171e",
		"YANG": "#0d79df",
		"YARA": "#220000",
		"YASnippet": "#32AB90",
	};

	return languageColors[language];
};



interface Repo {
	title: string,
	description: string,
	stars: number,
	url: string,
	languages: Array<string>
}

export const getProjects = async () => {
	const baseUrl = 'https://api.github.com/repos/';
	const repoList = ['Cincinnati-Ventures/rapid', 'Cincinnati-Ventures/clerk-rs', 'DarrenBaldwin07/darrenbaldwin.dev', 'Portt-dev/porttDotDev', '/Cincinnati-Ventures/vite-react-ts-template'];

	const repoData: Array<Repo> = [];

	const headers = {
		Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
	};

	repoList.forEach(async (repoUrl) => {
		const req = await fetch(repoUrl, {method: 'GET', headers })
	});

};
