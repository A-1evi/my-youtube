export const list = [
  "All",
  "Gaming",
  "Live",
  "JavaScript",
  "ComputerProgramming",
  "Grand master chess title",
  "Valorant",
  "Music",
  "Mixes",
  "Trailers",
  "Drama",
];

export const HAMBURGER_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC";

export const YOUTUBE_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png";  
  
const apiKey = process.env.REACT_APP_API_KEY;

export const YOUTUBE_MOST_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&maxResults=50&regionCode=IN&chart=mostPopular&key=${apiKey}`;


export const YOUTUBE_SEARCH_SUGGESTION_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&regionCode=IN&type=video&maxResults=5&q=`;


export const live_chat_count = 20;