import { Gener } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useData";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Gener) => void;
  selectedGenre: Gener | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, loading, error } = useGenres<Gener>("/genres");
  if (error) return null;
  if (loading) return <Spinner />;
  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="25px"
              borderRadius={7}
              src={getCroppedImageUrl(data.image_background)}
              fallbackSrc="https://via.placeholder.com/150"
            />
            <Button
              fontWeight={data.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(data)}
              fontSize="lg"
              variant={"link"}
            >
              {data.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
