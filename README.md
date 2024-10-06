# Project Name

## Overview

This project is a TypeScript-based interpreter that processes scripts using a custom runtime. The application reads a script file, parses it into an Abstract Syntax Tree (AST), and then evaluates it using a runtime interpreter.

## Project Structure

- **src**: Contains the TypeScript source files.
  - **main.ts**: The main entry point of the application. It handles file reading and initiates the script evaluation process.
  - **frontend**: Contains the components responsible for parsing and tokenizing the scripts.
    - **ast**: Defines the structure of the Abstract Syntax Tree (AST) nodes.
    - **parser**: Contains the logic for parsing scripts.
      - **index.ts**: The main parser file that converts tokens into an AST.
    - **lexer**: Contains the logic for lexical analysis.
      - **index.ts**: Breaks down the input script into tokens.
  - **runtime**: Contains the core logic for interpreting scripts.
    - **interpreter.ts**: Implements the `evaluate` function that processes the AST.
    - **environment.ts**: Manages variable scopes and environments during script execution.
    - **eval**: Contains evaluation logic for different types of statements and expressions.
      - **statements.ts**: Evaluates program and variable/function declaration statements.
      - **expressions.ts**: Evaluates expressions like binary operations, assignments, and function calls.
- **dist/**: Contains the compiled JavaScript files after running the TypeScript compiler.
- **test.txt**: A sample script file that the application processes.
- **native-functions.txt**: Contains scripts that demonstrate the use of native functions.
- **user-defined-functions.txt**: Contains scripts that demonstrate the use of user-defined functions.

## How the Program Works

1. **Lexical Analysis (Lexer)**: 
   - The lexer reads the input script from `test.txt` and breaks it down into a series of tokens. Tokens are the basic building blocks, such as keywords, identifiers, operators, and literals.

2. **Parsing (Parser)**:
   - The parser takes the tokens produced by the lexer and organizes them into an Abstract Syntax Tree (AST). The AST is a tree representation of the syntactic structure of the script, which makes it easier to analyze and evaluate.

3. **Abstract Syntax Tree (AST)**:
   - The AST is a hierarchical structure that represents the logical flow and operations of the script. Each node in the tree corresponds to a construct occurring in the source code.

4. **Runtime Evaluation**:
   - The `evaluate` function in `runtime/interpreter.ts` traverses the AST and executes the script. This involves interpreting the nodes of the AST and performing the corresponding operations, such as arithmetic calculations, variable assignments, and control flow.

## Running the Project

1. **Compile the TypeScript files**:

   ```bash
   tsc
   ```

   This command compiles the TypeScript files in the `src/` directory and outputs JavaScript files to the `dist/` directory.

2. **Run the Compiled JavaScript**:

   ```bash
   node dist/main.js
   ```

   This command executes the main JavaScript file, which processes the script in `test.txt`.

## Notes

- Ensure that `test.txt` is present in the root directory, as it is required for the `run` function to execute properly.
- You can modify `src/main.ts` to change the input file or adjust the logic as needed.
