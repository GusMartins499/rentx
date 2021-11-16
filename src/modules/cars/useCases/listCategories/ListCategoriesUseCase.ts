import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepositories: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepositories.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
