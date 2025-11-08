import { Header } from '@/components/Header';
import { PlantCard } from '@/components/PlantCard';
import { plants, categories } from '@/data/plants';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Plant Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of houseplants, perfect for every space and skill level.
          </p>
        </div>

        {categories.map((category) => {
          const categoryPlants = plants.filter(plant => plant.category === category);
          
          return (
            <section key={category} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 pb-2 border-b">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPlants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Products;
