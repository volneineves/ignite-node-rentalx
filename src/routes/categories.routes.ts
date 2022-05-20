import { request, response, Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExist = categoriesRepository.findByName(name);

  if (categoryAlreadyExist) {
    return response.status(400).json({ error: "Category Already exists!" });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

categoriesRoutes.get("/:name", (request, response) => {
  const { name } = request.params;
  const category = categoriesRepository.findByName(name);
  return response.json(category);
});

export { categoriesRoutes };
