import React, { useRef, useState } from "react";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;

const CategoryPills = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) => {
  const [translate, setTranslate] = useState(300);
  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="overflow-x-hidden relative">
      <div ref={containerRef} className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]" style={{transform: `translateX(-${translate}px)`}}>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelect(category)}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            variant={selectedCategory === category ? "dark" : "default"}
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
                setTranslate(prevState => {
                    const newTranslate = prevState - TRANSLATE_AMOUNT;
                    if (newTranslate <= 0) return 0;
                    return newTranslate;
                })
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
                if (containerRef.current == null) return
                const newTranslate = translate - tan
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryPills;