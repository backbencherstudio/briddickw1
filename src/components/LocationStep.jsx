import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import TopArrowIcon from "../../public/icons/TopArrow";

export const LocationStep = ({className, updateFormData, handleNext, placeholderTitle, showCompareButton = true }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [error, setError] = useState("");

  const resultRefs = useRef([]);

  const searchLocation = async (query) => {
    if (!query) {
      setSearchResults([]);
      setFocusedIndex(-1);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `http://192.168.40.47:3002/location?query=${query}`
      );
      const data = await response.json();
      setSearchResults(data);
      setFocusedIndex(-1);
    } catch (error) {
      console.error("Error searching locations:", error);
      toast.error("Error searching locations. Please try again.");
    }
    setIsSearching(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setInputValue(location.description);
    updateFormData("addressToSell", {
      description: location.description,
      fullLocation: location
    });
    setSearchResults([]);
    setFocusedIndex(-1);
    setError("");
    handleNext();
  };

  const handleKeyDown = (event) => {
    if (searchResults.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (focusedIndex >= 0) {
        handleLocationSelect(searchResults[focusedIndex]);
        handleNext();
      } else if (searchResults.length > 0) {
        handleLocationSelect(searchResults[0]);
        handleNext();
      }
    }
  };

  // Scroll focused result into view
  useEffect(() => {
    if (focusedIndex >= 0 && resultRefs.current[focusedIndex]) {
      resultRefs.current[focusedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [focusedIndex]);

  // Attach keydown listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchResults, focusedIndex]);

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setError("Location is required.");
      return;
    }
    
    if (selectedLocation) {
      updateFormData("addressToSell", {
        description: selectedLocation.description,
        fullLocation: selectedLocation
      });
    } else if (searchResults.length > 0) {
      handleLocationSelect(searchResults[0]);
    } else {
      updateFormData("addressToSell", {
        description: inputValue.trim(),
        fullLocation: null
      });
    }
    
    handleNext();
  };

  return (
    <div className="md:w-[700px] lg:w-[987px] flex flex-col items-center lg:rounded-2xl rounded-tl-none">
      <div className="relative px-4 py-1 w-full">
        <div className="p-4 lg:flex items-center gap-4 lg:rounded-2xl">
          <Input
            className={`w-full py-7 placeholder:text-sm md:placeholder:text-lg lg:placeholder:text-xl flex-grow border-none outline-none ${
              error ? "border-red-500" : ""
            }`}
            placeholder={placeholderTitle}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              searchLocation(e.target.value);
              setError("");
            }}
          />
          {showCompareButton && (
            <Button
              className="w-full lg:w-40 my-2 flex items-center gap-1 md:px-4 md:py-3"
              variant="primary"
              onClick={handleSubmit}
            >
              Compare Agents
              <TopArrowIcon />
            </Button>
          )}
        </div>
        {error && <p className="text-red-500 text-sm md:text-lg p-2 px-5">{error}</p>}
        {isSearching && <div className="mt-2 text-gray-600 text-sm md:text-lg p-2 px-5">Searching...</div>}

        {/* Box for Search Results */}
        {searchResults.length > 0 && (
          <div className="absolute bg-white top-[70px] left-0 py-3 mt-2  rounded-md max-h-[250px] lg:max-h-[300px] w-full overflow-y-auto text-sm md:text-base lg:text-lg">
            {searchResults.map((result, index) => (
              <div
                key={index}
                ref={(el) => resultRefs.current[index] = el}
                className={`p-2 cursor-pointer mx-7 py-2 ${
                  index === focusedIndex
                    ? "bg-gray-200"
                    : "hover:bg-gray-100 rounded-2xl"
                }`}
                onClick={() => handleLocationSelect(result)}
              >
                <p>{result.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};