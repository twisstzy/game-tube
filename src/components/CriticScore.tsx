import { Badge } from "@chakra-ui/react";

interface Prop {
  score: number;
}
const CriticScore = ({ score }: Prop) => {
  let color = score > 82 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius={"5px"} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
