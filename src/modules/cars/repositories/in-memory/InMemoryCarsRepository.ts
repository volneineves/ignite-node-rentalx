import { Car } from "@modules/cars/infra/typeorm/entities/Cars";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";

import { ICarsRepository } from "../ICarsRepository";

class InMemoryCarsRepository implements ICarsRepository {
  cars: Car[] = [];
  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    name,
    license_plate,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      name,
      license_plate,
    });
    this.cars.push(car);
  }
}

export { InMemoryCarsRepository };
