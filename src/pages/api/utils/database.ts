import fs from "fs";
import path from "path";

const publicPath = path.join(process.cwd(), "public/db");

export const readAsyncDatabase = async <T>(dbJson: string): Promise<T> => {
  const dbPath = path.join(publicPath, dbJson);

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
  const dbPath = path.join(publicPath, dbJson);

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

export const writeMemoryDatabase = async <T>(data: T): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 1500);
  });
};
