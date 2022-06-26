#!/usr/bin/env node
const chokidar = require("chokidar");
const fs = require("fs");
const log = require("npmlog");
const glob = require("glob");
const notifier = require("node-notifier");
const path = require("path");
const pug = require("pug");
const stylus = require("stylus");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const browserSync = require("browser-sync").create();

const argv = yargs(hideBin(process.argv)).argv;
const folders = {
  src: "./src",
  build: "./build",
};

if (argv.watch) {
  watch();
}

if (argv.build) {
  buildAll();
}

if (argv.server) {
  server();
}

process.on("uncaughtException", function (err) {
  log.error(err);
  notifier.notify("Build error");
});

function server() {
  browserSync.init({
    server: {
      baseDir: folders.build,
    },
  });
}

function serverReload(path) {
  const bsPath = path.replace("./build/", "./");
  log.info(`Reloading ${bsPath}`);
  browserSync.reload();
}

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function watch() {
  const srcFiles = __dirname + "/src/**/*.{styl,pug,json}";
  const watcher = chokidar.watch(srcFiles, {
    persistent: true,
    cwd: folders.src,
  });
  watcher
    .on("add", (path) => chooseBuild("add", path))
    .on("change", (path) => chooseBuild("change", path))
    .on("error", (error) => log.error(`Watcher error: ${error}`))
    .on(
      "unlink",
      (path) => removeFile(path) && log.info(`File ${path} has been removed`)
    )
    .on("ready", () => log.info("Initial build complete. Ready for changes"));
}

function getBuildPath(filePath) {
  return (
    folders.build +
    "/" +
    filePath
      .replace(".styl", ".css")
      .replace(".pug", ".html")
      .replace("/src/", "/build/")
  );
}

function removeFile(originalFilePath) {
  const buildFilePath = getBuildPath(originalFilePath);
  if (fs.existsSync(buildFilePath)) {
    fs.unlinkSync(buildFilePath);
    log.info(`Removed file ${buildFilePath}`);
  }
}

function chooseBuild(eventName, path) {
  log.info(`${eventName} file ${path}`);
  path.includes(".pug") && buildPug(path);
  path.includes(".styl") && buildStylus(path);
  path.includes(".json") && buildTokens();
}

function buildTokens() {
  log.info("Building Tokens");
  buildAll();
}

function buildAll() {
  log.info("Building All");
  const stylusFiles = glob.sync(`${folders.src}/**/*.styl`);
  stylusFiles.forEach((stylusFile) =>
    buildStylus(stylusFile.replace("./src/", ""))
  );
  const pugFiles = glob.sync(`${folders.src}/**/*.pug`);
  pugFiles.forEach((pugFile) => buildPug(pugFile.replace("./src/", "")));
}

function buildPug(relativeFilePath) {
  log.info("Building pug file " + relativeFilePath);
  const pugPath = `${folders.src}/${relativeFilePath}`;
  const htmlPath = pugPath.replace(".pug", ".html").replace("/src/", "/build/");
  ensureDirectoryExistence(htmlPath);
  const html = pug.renderFile(pugPath, { pretty: true });
  fs.writeFileSync(htmlPath, html);
  serverReload(htmlPath);
}

function buildStylus(relativeFilePath, buildIndex = true) {
  if (buildIndex) {
    buildStylus("index.styl", false);
  }
  log.info("Building stylus file " + relativeFilePath);
  const stylusPath = `${folders.src}/${relativeFilePath}`;
  const stylusFile = fs.readFileSync(stylusPath, "utf8");
  const cssPath = stylusPath
    .replace(".styl", ".css")
    .replace("/src/", "/build/");
  stylus(stylusFile)
    .set("filename", cssPath)
    .set("paths", [path.dirname(stylusPath)])
    .render((err, css) => {
      if (err) {
        log.error(err);
      }
      ensureDirectoryExistence(cssPath);
      fs.writeFileSync(cssPath, css);
      serverReload(cssPath);
    });
}
