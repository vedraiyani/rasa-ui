fs = require('fs')
YAML = require('yaml')
jsyaml = require('js-yaml')

/*
const file = fs.readFileSync('./test.yml', 'utf8')
str = YAML.stringify(file)
// console.log(str)

// str = "nlu:\n- intent: greeting\n   - Hello\n   - Hi\n\n# slots:\n\n# entities:\n\nintents:\n- greeting\n\nresponses:\n  utter_greet:\n    - text: \"Welcome\"\n\nactions:\n- utter_greet\n\nstories:\n## story_1622127741\n - story: init\n   steps:\n   - intent: greeting\n   - action: utter_greet\n\npolices:\n\n"

// yml = YAML.parse(str)
// console.log(yml)

 
fs.writeFileSync("test.json", str);
*/

/*
const file = fs.readFileSync('./test.yml', 'utf8')
obj = {
    data : file
}
str = jsyaml.load(file)

fs.writeFileSync("test.json", JSON.stringify(obj));

const file2 = fs.readFileSync('./test.json', 'utf8');
obj = JSON.parse(file2)
str = jsyaml.load(obj.data)

fs.writeFileSync("test2.yaml", jsyaml.dump(str));
*/


// const file = fs.readFileSync('./test.yml', 'utf8')

// obj = jsyaml.load(file)

// fs.writeFileSync("test.json", JSON.stringify(obj));

// const file2 = fs.readFileSync('./test.json', 'utf8');
// obj = JSON.parse(file2)

// fs.writeFileSync("test2.yaml", jsyaml.dump(obj));


const file = fs.readFileSync('./test.yml', 'utf8')

obj = YAML.parse(file)

fs.writeFileSync("test.json", JSON.stringify(obj));

const file2 = fs.readFileSync('./test.json', 'utf8');
obj = JSON.parse(file2)

fs.writeFileSync("test2.yaml", YAML.stringify(obj));