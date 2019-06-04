## Solution
This solution was create to address StackExchange problem listed at https://sharepoint.stackexchange.com/questions/264098/problem-with-changing-in-the-scss-file/264105#264105

## scss

Please check the solution structure. Keep in mind following things:
* Are you using the default `module.scss` file or you created your own? If you created your own `module.scss` file, are you importing it correctly?
* Correct import statement will be `import styles from '<relative path of file>'. 
* Always use `./` to refer current directory. I had noticed, when one use VSCode intellisense, it uses path from `lib` directory. Which can be another issue.

[!screenshot]('./screenshot/1.png')

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
