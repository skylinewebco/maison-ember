import Reveal from "./Reveal";
import MenuItemRow from "./MenuItemRow";
import LayeredMenuImages from "./LayeredMenuImages";
import type { MenuCategory } from "@/lib/data";

type Props = {
  category: MenuCategory;
  images?: [string, string];
  reverse?: boolean;
};

export default function MenuSection({ category, images, reverse = false }: Props) {
  const content = (
    <Reveal as="div" stagger className="flex flex-col">
      <span className="eyebrow mb-3 border-b border-ember/40 inline-block w-fit pb-1">{category.title}</span>
      <div className="divide-y divide-line">
        {category.items.map((item) => (
          <MenuItemRow key={item.name} item={item} />
        ))}
      </div>
    </Reveal>
  );

  if (!images) {
    return <div className="container-x py-16 md:py-20">{content}</div>;
  }

  return (
    <div className="container-x py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className={reverse ? "md:order-2" : ""}>
          <LayeredMenuImages images={images} title={category.title} />
        </div>
        <div className={reverse ? "md:order-1" : ""}>{content}</div>
      </div>
    </div>
  );
}
