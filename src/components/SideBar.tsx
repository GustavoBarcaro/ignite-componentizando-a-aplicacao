import { Button } from "./Button";

interface SideBarProps {
  genres: Array<Genre>;
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

interface Genre {
  id: number;
  name:
    | "action"
    | "comedy"
    | "documentary"
    | "drama"
    | "horror"
    | "family";
  title: string;
}

export function SideBar({
  genres,
  handleClickButton,
  selectedGenreId,
}: SideBarProps) {
  // Complete aqui
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
