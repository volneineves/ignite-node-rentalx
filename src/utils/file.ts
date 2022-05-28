import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
  } catch {
    return;
  }
  await fs.promises.unlink(filename);
};
