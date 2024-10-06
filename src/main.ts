import Parser from "./frontend/parser";
import { createGlobalEnv } from "./runtime/environment";
import { evaluate } from "./runtime/interpreter";
import fs from "fs"; 

console.log("user-defined-functions: ");
run("./user-defined-functions.txt");
console.log("----------------------------------");
console.log("native-functions: ");
run("./native-functions.txt");

async function run(filename: string) {
	const parser = new Parser();
	const env = createGlobalEnv();

	const input = fs.readFileSync(filename, "utf-8");
	const program = parser.produceAST(input);

	const result = evaluate(program, env);
	console.log(result);
}