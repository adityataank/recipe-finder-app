import { Children } from "react";
import SkeletonCard from "../UI/SkeletonCard";
import DataBlock from "../DataBlock";

interface PropsTypes {
  type?: "category" | "area" | "ingredient" | "recipes";
}

const SkeletonGroup = ({ type = "recipes" }: PropsTypes) => {
  const isRecipe = type === "recipes";
  const count = isRecipe ? 4 : 12;
  const RenderCard = () =>
    isRecipe ? (
      <SkeletonCard />
    ) : (
      <DataBlock data={{}} tab={type} showSkeleton />
    );
  const renderSkeletons = () =>
    Children.toArray(
      Array(count)
        .fill(0)
        .map(() => <RenderCard />)
    );
  return <>{renderSkeletons()}</>;
};

export default SkeletonGroup;
