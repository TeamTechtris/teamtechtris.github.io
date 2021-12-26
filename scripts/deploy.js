import fs from 'fs/promises';
import replace from 'replace-in-file';
import ghpages from 'gh-pages';

replace({
	files: 'build/**/*',
	from: /_app/g,
	to: 'app',
})
	.then(() => {
		return fs.rename('build/_app', 'build/app');
	})
	.then(() => {
		return fs.writeFile('build/CNAME', 'techtris.xyz');
	})
	.then(() => {
		ghpages.publish('build', () => {
			console.log('Deploy complete!');
		});
	});
