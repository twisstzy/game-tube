import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleten = () => {
  return (
    <Card width="300px">
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleten;
