const util = require('util');
const exec = util.promisify(require('child_process').exec);

const level = process.argv[2];

const print = ({stdout, stderr}) => {
    console.log(stdout);
    console.log(stderr);
} ;



if (level === undefined) {
    console.log('Provide a patch-level: [major, minor, patch]');
    process.exit(1);
}

const run = async () => {
    await exec('npm version ' + level).then(print);
    await exec('git push --all && git push --tags').then(print);
    await exec('npm run deploy').then(print);
    await exec('npm publish . --access public').then(print);
};


run();
