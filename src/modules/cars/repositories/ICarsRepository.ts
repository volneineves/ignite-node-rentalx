interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
}

export { ICarsRepository };
