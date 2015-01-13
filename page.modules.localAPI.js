PAGE.addWait(
	"Modules.localAPI"

	, [
		"Modules.remoteAPI" // local inherits from this
	]

	, function(ref) {

		var dog = ref.remoteAPI

		PAGE.loadScript("page.docs.extensions.batchCallback.js", true)

		dog.buildAllSections([
			"Docs.Extensions.batchCallback"
		])

		return dog

	})
