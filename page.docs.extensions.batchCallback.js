PAGE.add("Docs.Extensions.batchCallback", {

	"jDog" : "version 1.0"

	, "Methods" : [
		{
			"Name" : "ext.BatchCallback"
			, "Usage" : [
					[ false, "var batch = new PAGE.ext.BatchCallback(int Count, function Callback)" ]
				]
			, "Tags" : [ "Constructor", "extend", "extensions" ]
			, "Source" : [ "page.extend.batchCallback.js" ]
			, "Parent" : [ "Extensions" ]
			, "Examples" : [ 
				"var batch = new PAGE.ext.BatchCallback(3, function() {\n  console.log(\"PARTY!!!\")\n})\nundefined\n\nbatch.tryFinish()\nundefined\n\nbatch.tryFinish()\nundefined\n\nbatch.tryFinish()\nPARTY!!! VM3297:3\nundefined"
				, "function buildAllSections(arr) {\n  dog.batch = new ref.BatchCallback(arr.length, function() {\n    organizeLegend()\n    createLegend()\n  })\n\n  // built this way to improve perceived speed\n  // page should now load progressively\n  for (var x in arr) createSection( arr[x] )\n}\n\nfunction createSection(url) {\n\n  var e_section = document.createElement(\"div\")\n    , section = []\n\n  // adds it in the order it comes\n  dog.sections.push(section)\n  dog.e_root.appendChild(e_section)\n\n  J.ajax.get(\n    url\n    , {}\n    , function(raw) {\n      var data = dog.data = JSON.parse(raw)\n\n      // keeps the memory reference alive\n      for (var x in data.Methods) section.push( data.Methods[x] )\n\n      build(e_section, data.Methods)\n\n      // run the callback when it's done\n      dog.batch.tryFinish()\n  })\n}"
			]

			, "Description" : "Lets say you have a whole bunch of asynchronous code that you want to run before calling some kind of callback. Many times these will fire at different rates. This method allows you to setup a counter, where once it reaches the desired count it will trigger the callback."
			, "Definitions" : {
				"batch" : "The stored batch, to trigger callback with tryFinish"
				, "Count" : "Total number of asynch calls before triggering callback"
				, "Callback" : "Function to run when the count is reached"
			}
			, "Returns" : "new BatchCallback"
		}
		, {
			"Name" : "batch.tryFinish"
			, "Usage" : [
				[ false, "batch.tryFinish()"]
			]
			, "Tags" : [ "Constructor", "extend", "extensions" ]
			, "Source" : [ "page.extend.batchCallback.js" ]
			, "Parent" : [ "Extensions" ]
			, "Examples" : [ 
			]

			, "Description" : "Upon defining a new new batch each callback runs tryFinish until the total count is reached."
			, "Definitions" : { 
				"batch" : "The stored batch"
			}
			, "Returns" : "Undefined"
		}
	]
})
