import { container } from "tsyringe";

import { LocalStorageProvider } from "./implementations/LocalStorageProvider";
import { IStorageProvider } from "./IStorageProvide";

container.registerInstance<IStorageProvider>(
  "StorageProvider",
  new LocalStorageProvider()
);
