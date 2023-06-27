import React, { createContext, useContext, useReducer } from 'react'

const GlobalContext = createContext<{
  manga: any[];
  image: any[];
  isSearch: boolean;
  searchResults: any[];
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getManga: () => Promise<void>;
  getMangaCover: (id:any) => Promise<void>;
}>({
  manga: [],
  image: [],
  isSearch: false,
  searchResults: [],
  loading: false,
  handleChange: () => {},
  getManga: async () => {},
  getMangaCover: async (id) => {},
});

const baseUrl = "https://api.mangadex.org"

//actions
const LOADING = "LOADING"
const SEARCH = "SEARCH"
const GET_MANGA = "GET_MANGA"
const GET_MANGA_COVER = "GET_MANGA_COVER"

//reducer
const reducer = (state: any, action: any) => {
  switch(action.type) {
    case LOADING:
      return {...state, loading: true}
    case GET_MANGA:
      return {...state, manga: action.payload, loading: false}
    case SEARCH:
      return {...state, searchResults: action.payload, loading: false}
    case GET_MANGA_COVER:
      return {...state, image: action.payload, loading: false}
    default:
      return state;
  }
}

export const GlobalContextProvider = ({children}:any) => {
  //initial state of the app
  const initalState = {
    manga: [],
    isSearch: false,
    searchResults: [],
    loading: false,
    image: [],
  }

  const [state, dispatch] = useReducer(reducer, initalState)
  const [search, setSearch] = React.useState('')

  //handle change
  const handleChange = (e:any) => {
    setSearch(e.target.value);
    if(e.target.value === ''){
        state.isSearch = false;
    }
  }


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
  const getManga = async () => {
    dispatch({type: LOADING})
    const response = await fetch(`${baseUrl}/manga?includes[]=author&includes[]=artist&includes[]=cover_art`)
    const data = await response.json();
    dispatch({type: GET_MANGA, payload: data.data})
  }

  const getMangaCover = async (id:any) => {
    dispatch({type: LOADING})
    const response = await fetch(`${baseUrl}/cover/${id}`)
    const data = await response.json();
    dispatch({type: GET_MANGA_COVER, payload: data.data})
  }

  React.useEffect(() => {
    getManga()
  }, [])

  return(
    <GlobalContext.Provider value={{ 
      ...state,
      handleChange,
      getManga,
      getMangaCover,
     }}>
      {children}
    </GlobalContext.Provider>
  )
}



export const useGlobalContext = () => {
  return useContext(GlobalContext)
}