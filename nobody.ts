//@ts-nocheck
import { writeFileSync } from "node:fs"
//import path from "node:path"
import type { Blog } from "::.content-collections/generated"

async function withoutBody(allNotes: Blog[]) {
	const file = "data/schema.json"
	const json = () => {
		return allNotes.map(({ title, date, slug }) => {
			return { title, date, slug }
		})
	}
	console.log(`create posts json without body for ${allNotes.length} paths`)
	//const json = createJson();
	/*   mkdirSync(path.dirname(file), {
		recursive: true,
	}) */
	writeFileSync(file, JSON.stringify(json()), "utf8")
}

export default withoutBody
