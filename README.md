# mdinject

This command line utility lets you inject arbitrary files into your markdown (or any other file type) using a simple syntax. This is useful for including snippets in your README extracted from your tests helping to ensure their accuracy and maintenance. This very file is built using it! 🐶🥫

## Featureset

- Any language, any file
- Relative indentation
- Inject specific sections of a file
- Inject multiple files

## Usage

See the examples folder.

### In Markdown (or other file)

`md​inject '<file>' '<tag>'`

Including the above will inject the **tag** section from **file**. Files are resolved relative to the markdown file. The entire line that this statement appears on will be overwritten so you can use whatever additional syntax you like e.g. comments.

### In referenced files

`mdinject-start <tag>`
`mdinject-end <tag>`

Lines between those two statements will be considered the content for **tag** and will be included when the file and tag are referenced. The line can have other characters than that syntax so you can place it in whatever comment syntax you prefer.

### CLI

`mdinject <file>`

This will read the given file (typically a Markdown file) and replace the mdinject statements with the prescribed file contents. The results will be written to stdout.

#### Options

- `--eol=<string>` Provide an alternate EOL string, by default mdinject [detects the line ending](https://www.npmjs.com/package/detect-newlines) of the inputted file
- `--trim=<boolean>` Enable/disable the relative indentation trim functionality. Default is `true`. 
