import fs from "fs";
import path from "path";

export default (req, res) => {
  const dirRelativeToPublicFolder = "images/stamps";

  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const extensions = ["jpg", "jpeg", "png", "gif"];

  const images = filenames
    .filter((name) => extensions.some((pattern) => name.endsWith(pattern)))
    .map((name) => path.join("/", dirRelativeToPublicFolder, name));

  res.statusCode = 200;
  res.json(images);
};
