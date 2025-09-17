import { useEffect, useState } from "react";
import Popup from "./Popup";
import assets from "../../assets";
import SearchForm from "./SearchForm";
import type { ILocation } from "../../types";
import { CloseButton } from "../ui/button";

interface LocationProps {
  currentLocation: ILocation | null;
  onLocation: (location: ILocation | null) => void;
}

export default function AddLocation({
  onLocation,
  currentLocation,
}: LocationProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ILocation[]>([]);

  useEffect(() => {
    if (!query) {
      setResult([]);
      return;
    }

    setIsLoading(true);
    fetch(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&q=${encodeURIComponent(
        query
      )}`
    )
      .then((res) => res.json())
      .then((data: ILocation[]) => {
        setResult(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <Popup
      open={open}
      onClose={() => setOpen(false)}
      button={
        <button
          title="Add location"
          type="button"
          className="btn"
          onClick={() => setOpen(!open)}
        >
          <img
            src={assets.icons.location}
            alt="Location"
            className="h-5 w-5 dark:invert dark:brightness-200"
          />
        </button>
      }
      position="right-0"
    >
      <SearchForm
        onSearch={(value) => setQuery(value)}
        placeholder="Where are you?"
      />
      {isLoading && (
        <p className="text-zinc-800 dark:text-zinc-200">Loading...</p>
      )}
      {currentLocation && (
        <div className="mt-5 p-2 flex items-center gap-x-2 cursor-pointer border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-500">
          <img
            src={assets.icons.check}
            alt="Selected"
            className="w-5 h-5 dark:invert dark:brightness-200"
          />
          <p className="truncate flex-1 text-zinc-800 dark:text-zinc-200">
            {currentLocation.display_name}
          </p>
          <CloseButton
            onClose={() => {
              onLocation(null);
              setOpen(false);
            }}
          />
        </div>
      )}

      {!isLoading && result.length > 0 && (
        <div className="mt-5 max-h-60 overflow-auto border-b border-gray-200 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
          {result.map((place) => (
            <div
              key={place.place_id}
              className="p-2 text-zinc-800 dark:text-zinc-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => {
                onLocation(place);
                setOpen(false);
              }}
            >
              {place.display_name}
            </div>
          ))}
        </div>
      )}
    </Popup>
  );
}
