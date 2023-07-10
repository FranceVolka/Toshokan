import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const GlobalContext = createContext<{
  manga: any[];
  popular_manga: any[];
  chapter: any[];
  mangaChapter: any[];
  isSearch: boolean;
  searchResults: any[];
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getManga: () => Promise<void>;
  getMangaCover: (id: any) => Promise<void>;
}>({
  manga: [],
  popular_manga: [],
  chapter: [],
  mangaChapter: [],
  isSearch: false,
  searchResults: [],
  loading: false,
  handleChange: () => {},
  getManga: async () => {},
  getMangaCover: async (id) => {},
});

const baseUrl = "https://api.mangadex.org";

//actions
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_MANGA = "GET_MANGA";
const GET_POPULAR_MANGA = "GET_POPULAR_MANGA";
const GET_CHAPTER = "GET_CHAPTER";
const GET_MANGA_CHAPTER = "GET_MANGA_CHAPTER";

//reducer
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_MANGA:
      return { ...state, manga: action.payload, loading: false };
    case GET_POPULAR_MANGA:
      return { ...state, popular_manga: action.payload, loading: false };
    case SEARCH:
      return { ...state, searchResults: action.payload, loading: false };
    case GET_CHAPTER:
      return { ...state, chapter: action.payload, loading: false };
    case GET_MANGA_CHAPTER:
      return { ...state, mangaChapter: action.payload, loading: false };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }: any) => {
  //initial state of the app
  const initalState = {
    manga: [],
    popular_manga: [],
    chapter: [],
    mangaChapter: [],
    isSearch: false,
    searchResults: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initalState);
  const [search, setSearch] = React.useState("");

  //handle change
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      state.isSearch = false;
    }
  };

  //handle submit
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if(search){
  //         searchAnime(search);
  //         state.isSearch = true;
  //     }else{
  //         state.isSearch = false;
  //         alert('Please enter a search term')
  //     }
  // }

  //fetch Manga
  const getLatestManga = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.get(
        `${baseUrl}/manga?includes[]=tag&includes[]=author&includes[]=artist&includes[]=cover_art&limit=20&order[latestUploadedChapter]=desc`
      );
      const data = response.data;
      dispatch({ type: GET_MANGA, payload: data.data });
    } catch (error) {
      console.log(error);
      // Handle the error
    }
  };

  //fetch popular Manga
  const getPopularManga = async () => {
    dispatch({ type: LOADING });
    try {
    const response = await axios.get(`${baseUrl}/manga?includes[]=tag&includes[]=author&includes[]=artist&includes[]=cover_art&limit=4&order[followedCount]=desc`)
    const data = response.data;
    dispatch({type: GET_POPULAR_MANGA, payload: data.data})
  } catch (error) {
    console.log(error);
    // Handle the error
  }
  }

  //fetch manga chapter
  // const getChapters = async () => {
  //   dispatch({type: LOADING})
  //   const response = await fetch(`${baseUrl}/chapter?includes[]=scanlation_group&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[readableAt]=desc&limit=64`)
  //   const data = await response.json();
  //   dispatch({type: GET_CHAPTER, payload: data.data})
  // }

  //fetch selected manga chapters
  const getMangaChapters = async (id: any) => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.get(
        `${baseUrl}/manga/${id}/feed?limit=96&includes[]=scanlation_group&includes[]=user&order[volume]=desc&order[chapter]=desc&offset=0&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic&translatedLanguage[]=en`
      );
      const data = response.data;
      dispatch({ type: GET_MANGA_CHAPTER, payload: data.data });
    } catch (error) {
      console.log(error);
      // Handle the error
    }
  };

  // const getMangaCover = async (id:any) => {
  //   dispatch({type: LOADING})
  //   const response = await fetch(`https://uploads.mangadex.org/cover/${id}`)
  //   const data = await response.json();
  //   dispatch({type: GET_MANGA_COVER, payload: data.data})
  // }

  React.useEffect(() => {
    getLatestManga();
    getPopularManga()
    // getChapters()
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleChange,
        getLatestManga,
        getPopularManga,
        // getChapters,
        getMangaChapters,
        // getMangaCover,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
