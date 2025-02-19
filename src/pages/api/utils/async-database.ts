import fs from "fs";
import path from "path";

export const readAsyncDatabase = async <T>(dbJson: string): Promise<T> => {
  const dbPath = path.resolve(process.cwd(), dbJson);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = fs.readFileSync(dbPath, "utf-8");
        resolve(JSON.parse(data) as T);
      } catch (error) {
        reject(error);
      }
    }, 1500);
  });
};

export const writeAsyncDatabase = async <T>(
  data: T,
  dbJson: string,
): Promise<void> => {
  const dbPath = path.resolve(process.cwd(), dbJson);

  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      fs.writeFile(dbPath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }, 1500);
  });
};
