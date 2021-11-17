import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificatiosRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const sameNameSpecification = this.specificatiosRepository.findByName(name);
    if (sameNameSpecification) {
      throw new Error("Specification already exists!");
    }
    this.specificatiosRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
