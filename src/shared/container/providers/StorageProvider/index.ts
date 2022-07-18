import { container } from "tsyringe";

import { S3StorageProvider } from "./implementations/S3StorageProvider";
import { IStorageProvider } from "./IStorageProvider";

container.registerInstance<IStorageProvider>(
  "S3StorageProvider",
  new S3StorageProvider()
);
