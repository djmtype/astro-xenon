import { visit } from 'unist-util-visit';
import path from 'path';

export function remarkAstroLocalImages() {

	const transformer = (tree,file) => {

		const reldirMD = path.relative(
			file.cwd,
			path.dirname(file.history[0])
		);

		visit(tree, 'image', (img) => {

			if (img.url.startsWith("./")) {
				img.url = path.join("/",reldirMD,img.url);
			}

		});
	};

	return function attacher() {
		return transformer;
	};
}
