export interface Movie {
    id: number;
    title: string;
    poster_path: string | null; // 사진이 없을 수 있는 녀석들을 위해 유니온 타입 널
    vote_average: number;
    release_date: string;
    popularity: number; // 과제에서 사용할 수 있는 변수
}

// 검색 상태
export type SearchStatus = 'idle' | 'loading' | 'success' | 'error';