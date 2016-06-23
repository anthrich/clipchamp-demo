console.log("test");
clipchamp.preload();

var clipchampEle = document.getElementById("clipchamp-container");
if(clipchampEle) {
	clipchamp(clipchampEle, {
		label: "Record video",
		title: "Record your answer",
		logo: "assets/tc_logo.svg",
		color: "#000",
		resolution: "480p",
		compression: "medium",
		inputs: ["camera"],
		output: "azure",
		camera: {
			limit: 300,
		},
		azure: {
			container: "clipchamp"
		}
	});
}