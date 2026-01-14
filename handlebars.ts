import Handlebars from "handlebars";
import { dataObject } from "./types.ts";

export async function layouts(arrayBuffer: Uint8Array<ArrayBuffer>) {
	const workingDirectory = Deno.cwd();
	const layoutsFile = await Deno.readFile(
		`${workingDirectory}/views/layouts/main.hbs`,
	);
	const layoutsData = {
		body: new TextDecoder().decode(arrayBuffer),
	};

	const template = Handlebars.compile(new TextDecoder().decode(layoutsFile));
	return template(layoutsData);
}

export async function render(source: string, data?: dataObject) {
	const template = Handlebars.compile(source);
	return template(data);
}
